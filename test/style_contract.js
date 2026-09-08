const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = process.cwd();

const read = (relPath) => fs.readFileSync(path.join(root, relPath), "utf8");
const exists = (relPath) => fs.existsSync(path.join(root, relPath));
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// docs/ARCHITECTURE.md#local-overrides-your-site-vs-this-repo: the forbidden-path
// check below (and the icon-font-artifact check) exist to keep the *upstream*
// al-folio starter thin — they must not fire on a site created from this template,
// where local _includes/_sass/etc. overrides are explicitly supported. This repo's
// own docs flag that this test ships unchanged to every such site and will
// false-fail there; this is the "open maintainer decision" mentioned in that file,
// resolved here since this checkout is a site (kiraholaa/kiraholaa.github.io), not
// the starter itself.
function isUpstreamStarterRepo() {
  const envRepo = process.env.GITHUB_REPOSITORY;
  if (envRepo) {
    return envRepo.toLowerCase() === "alshedivat/al-folio";
  }
  try {
    const remote = execFileSync("git", ["config", "--get", "remote.origin.url"], { cwd: root, encoding: "utf8" }).trim().toLowerCase();
    return remote.includes("alshedivat/al-folio");
  } catch (error) {
    // No git remote available (e.g. a tarball checkout) — default to enforcing the
    // contract, since that's the safer assumption for the upstream repo itself.
    return true;
  }
}

const failures = [];

const packageJson = JSON.parse(read("package.json"));
const scripts = packageJson.scripts || {};
for (const forbiddenScript of ["build:css", "build:tailwind", "build:tailwind:watch"]) {
  if (Object.prototype.hasOwnProperty.call(scripts, forbiddenScript)) {
    failures.push(`Starter package.json must not define \`${forbiddenScript}\`; build ownership belongs to gem repos.`);
  }
}

const config = read("_config.yml");
if (!/^\s*theme:\s*al_folio_core\s*$/m.test(config)) {
  failures.push("`_config.yml` must keep `theme: al_folio_core` for thin-starter wiring.");
}
if (!/^\s*-\s*al_folio_core\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_folio_core`.");
}
if (!/^\s*-\s*al_folio_distill\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_folio_distill` (distill is plugin-owned).");
}
if (!/^\s*-\s*al_cookie\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_cookie` (cookie consent is plugin-owned).");
}
if (!/^\s*-\s*al_icons\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_icons` (icon runtime is plugin-owned).");
}
if (!/^\s*-\s*al_math\s*$/m.test(config)) {
  failures.push("`_config.yml` plugins must include `al_math` when math features are enabled.");
}

for (const libraryKey of ["fontawesome", "academicons", "scholar-icons"]) {
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:\\s*$`, "m").test(config)) {
    failures.push(`\`_config.yml\` must define \`third_party_libraries.${libraryKey}\` for al_icons runtime wiring.`);
    continue;
  }
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:[\\s\\S]*?^\\s{4}integrity:\\s*$[\\s\\S]*?^\\s{6}css:\\s*\"sha`, "m").test(config)) {
    failures.push(`\`_config.yml\` should define an SRI hash for \`third_party_libraries.${libraryKey}.integrity.css\`.`);
  }
}

for (const libraryKey of ["tikzjax", "tocbot"]) {
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:\\s*$`, "m").test(config)) {
    failures.push(`\`_config.yml\` must define \`third_party_libraries.${libraryKey}\` for v1 runtime contracts.`);
  }
}

const gemfile = read("Gemfile");
// The point of this check is that `al_math` is pinned to *a* released version,
// not to any particular one. Hard-coding the number here meant every routine
// version bump failed the style contract until someone remembered to edit this
// file too, which is a tripwire for the bump rather than for the boundary.
if (!/gem 'al_math', '= \d+\.\d+\.\d+'/.test(gemfile)) {
  failures.push("`Gemfile` should pin `al_math` to an exact released version (`= x.y.z`).");
}
if (/gem 'al_math',\s*:git =>/.test(gemfile)) {
  failures.push("`Gemfile` must not use git-branch pin for `al_math`; use released gem version.");
}

if (isUpstreamStarterRepo()) {
  for (const forbiddenPath of ["_includes", "_layouts", "_sass", "_scripts", "assets/tailwind", "tailwind.config.js", "assets/webfonts"]) {
    if (exists(forbiddenPath)) {
      failures.push(`Starter must not own core component path \`${forbiddenPath}\`; move ownership to the corresponding gem.`);
    }
  }

  for (const forbiddenGlobPath of [
    "assets/fonts/academicons.woff",
    "assets/fonts/academicons.ttf",
    "assets/fonts/scholar-icons.woff",
    "assets/fonts/scholar-icons.ttf",
  ]) {
    if (exists(forbiddenGlobPath)) {
      failures.push(`Starter must not own icon runtime artifact \`${forbiddenGlobPath}\`; icon ownership belongs to al_icons.`);
    }
  }
}

for (const requiredPath of ["test/visual", "test/integration_plugin_toggles.sh", "test/integration_distill.sh"]) {
  if (!exists(requiredPath)) {
    failures.push(`Starter integration/visual contract missing required path: \`${requiredPath}\`.`);
  }
}

if (failures.length > 0) {
  console.error("Starter style contract check failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Starter style contract check passed.");

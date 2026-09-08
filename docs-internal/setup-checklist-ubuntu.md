# Checklist de setup — sitio en Ubuntu 24 con Claude Code + VS Code

Marca cada casilla a medida que avances. El orden importa: no saltes al
paso de Jekyll sin haber terminado el de Ruby.

## 1. Dependencias del sistema

- [ ] Actualizar paquetes: `sudo apt update`
- [ ] Instalar Git (probablemente ya lo tienes): `sudo apt install -y git`
- [ ] Instalar Ruby y herramientas de compilación:
      `sudo apt install -y ruby-full build-essential zlib1g-dev`
- [ ] Configurar que los gems se instalen en tu carpeta de usuario (evita
      problemas de permisos con `sudo gem install`):

  ```
  echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
  echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
  source ~/.bashrc
  ```

- [ ] Instalar Bundler y Jekyll: `gem install bundler jekyll`
- [ ] Verificar instalación: `jekyll -v` y `bundle -v` deben responder con
      un número de versión, sin errores.

## 2. Crear el repositorio del sitio

- [ ] En GitHub, ir al repo `alshedivat/al-folio` y usar "Use this
      template" (o Fork).
- [ ] Nombrar tu copia exactamente `kiraholaa.github.io` (así GitHub Pages
      lo detecta automáticamente).
- [ ] Clonar TU copia (no el original) en una carpeta local, por ejemplo:
      `git clone https://github.com/kiraholaa/kiraholaa.github.io.git`
- [ ] Entrar a la carpeta: `cd kiraholaa.github.io`

## 3. Abrir el proyecto en VS Code con Claude Code

- [ ] Abrir la carpeta en VS Code: `code .` (desde dentro de la carpeta
      del repo)
- [ ] Abrir la terminal integrada de VS Code (Ctrl + ñ o desde el menú
      Terminal > New Terminal)
- [ ] Iniciar Claude Code desde ahí: `claude`
- [ ] Copiar `design-system.md` y `content-summary.md` a la raíz del repo
      (o a una carpeta `/docs`) ANTES de empezar a pedirle cambios a
      Claude Code, para que los lea como contexto.

## 4. Primer prompt a Claude Code

- [ ] Pedirle algo como: _"Lee design-system.md y content-summary.md.
      Aplica la paleta de colores a los archivos SCSS del theme
      (probablemente en `_sass/`), y ayúdame a estructurar las páginas
      Home, Research/Projects, CV y Contact según lo descrito en
      content-summary.md."_
- [ ] Revisar qué archivos modificó antes de aceptar los cambios (Claude
      Code te muestra el diff).

## 5. Instalar dependencias del proyecto y correr en local

- [ ] Dentro de la carpeta del repo: `bundle install`
- [ ] Levantar el servidor local: `bundle exec jekyll serve --livereload`
- [ ] Abrir en el navegador: `http://localhost:4000`
- [ ] Confirmar que el sitio carga con la paleta ya aplicada (fondo Ink
      Black, acento Copperwood visible).

## 6. Iterar contenido y diseño

- [ ] Ir sección por sección (Home → Research/Projects → CV → Contact),
      pidiéndole a Claude Code los ajustes puntuales.
- [ ] Confirmar visualmente cada acento de proyecto (Copperwood para
      tesis, Dried Wine para CPR, Old Gold para docencia) en las tarjetas
      correspondientes.
- [ ] Subir la foto profesional (misma usada en Google Scholar) a la
      carpeta de assets del theme y enlazarla en la config del perfil.

## 7. Publicar

- [ ] Hacer commit y push de los cambios:
      `git add . && git commit -m "Setup inicial del sitio" && git push`
- [ ] En GitHub, ir a Settings > Pages del repo y confirmar que "Source"
      apunta a la rama `main` (o `gh-pages` según cómo lo configure
      al-folio).
- [ ] Esperar unos minutos y verificar que `kiraholaa.github.io` carga en
      el navegador.
- [ ] Agregar el link del sitio ya publicado a ORCID (Websites & social
      links), Google Scholar (Homepage) y GitHub (Website).

## 8. Cierre del trabajo de la asignatura

- [ ] Confirmar que los 6 entregables del enunciado están completos:
      nombre de publicación + justificación, ORCID, Google Scholar,
      sitio web, GitHub, firma de correo institucional.
- [ ] Revisar consistencia final: mismo nombre (Kaleb Irahola-Azad), misma
      foto, mismos links cruzados en las 4 plataformas.

---
layout: page
title: research
permalink: /projects/
description: Research and project lines — PhD thesis work, plus publications (in progress).
nav: true
nav_order: 1
tabs: true
---

<!-- pages/projects.md -->
{% assign research_projects = site.projects | where: "category", "research" | sort: "importance" %}
{% assign other_projects = site.projects | where: "category", "other" | sort: "importance" %}

{% tabs projects-page %}

{% tab projects-page Research %}

<div class="row row-cols-1 row-cols-md-3">
{% for project in research_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>

{% endtab %}

{% tab projects-page Publications %}

Publications in progress — no papers published yet.

{% endtab %}

{% endtabs %}

{% if other_projects.size > 0 %}
## Other projects

<div class="row row-cols-1 row-cols-md-3">
{% for project in other_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>
{% endif %}

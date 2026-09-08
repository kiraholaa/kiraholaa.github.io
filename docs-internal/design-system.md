# Design system — kiraholaa.github.io

Documento de referencia única para la paleta de colores del sitio. Cualquier
color nuevo (proyecto, paper, sección) se agrega aquí primero, y luego se
traduce a variables en `_sass/_variables.scss`.

Fuente original de la paleta: export de Coolors (CSV/JSON guardado en
`/docs/palette-export.json` de este mismo repo).

## Paleta base (fija, no cambia)

Estos 5 colores son el esqueleto visual de todo el sitio — fondo, superficie,
texto. No se reasignan a proyectos específicos.

| Nombre       | Hex       | Rol                                              | Variable SCSS sugerida     |
|--------------|-----------|---------------------------------------------------|------------------------------|
| Ink Black    | `#0a121c` | Fondo primario (hero, encabezados de sección)     | `$color-bg-primary`         |
| Carbon Black | `#221f16` | Fondo secundario (tarjetas, contenido)            | `$color-bg-secondary`       |
| Soft Linen   | `#f2efe6` | Texto principal sobre fondo oscuro                | `$color-text-primary`       |
| Grey Olive   | `#9a9587` | Texto secundario, metadatos, descripciones        | `$color-text-secondary`     |
| Copperwood   | `#b5651d` | Acento general de navegación (links, hover, título) — también ancla de la familia "Tesis" | `$color-accent-nav` |

**Por qué Ink Black vs. Carbon Black:** Ink Black (más frío/oscuro) marca las
zonas de "entrada" a una sección — el ojo se detiene ahí primero. Carbon
Black (más cálido, ligeramente más claro) marca zonas de "lectura" —
tarjetas, listados, cuerpo de texto largo. La diferencia es sutil a
propósito: separa jerarquía sin romper el tono minimalista oscuro.

## Sistema de acentos por proyecto / rama de trabajo

Cada rama de trabajo tiene un color predominante. Los papers de la tesis
comparten familia de color entre sí (para que se lean como un mismo cuerpo
de trabajo); las ramas separadas (CPR, docencia) tienen su propio tono, pero
siempre igual de apagado/mate que el resto de la paleta — nunca un color
vivo o saturado, para no romper la base oscura y minimalista.

### Tesis doctoral — familia Copperwood

Ancla: `Copperwood #b5651d`. Cada paper/objetivo específico usa una
variación de tono (más claro, más oscuro, más apagado) dentro de la misma
familia, no un color distinto.

| Paper / objetivo específico       | Nombre           | Hex       | Relación con el ancla       |
|------------------------------------|------------------|-----------|-------------------------------|
| (paraguas / identidad general)     | Copperwood       | `#b5651d` | Color base de la familia      |
| Paper 1 — *(pendiente de definir)* | Copper Light     | `#d6884c` | Tinte más claro                |
| Paper 2 — *(pendiente de definir)* | Copper Deep      | `#8a4a16` | Sombra más oscura              |
| Paper 3 — *(pendiente de definir)* | Copper Muted     | `#a9855f` | Versión más desaturada         |
| Paper 4 — *(si aplica)*            | *(por definir)*  | —         | Siguiente variación en la misma familia |

### Simulador CPR — rama aparte

| Nombre        | Hex       | Rol                                   |
|---------------|-----------|-----------------------------------------|
| Dried Wine    | `#6e2a34` | Acento del proyecto CPR simulator      |

### Docencia / postgrado (UCB) — rama aparte

| Nombre        | Hex       | Rol                                                          |
|---------------|-----------|----------------------------------------------------------------|
| Old Gold      | `#a9862f` | Acento de la rama de docencia — referencia mate al amarillo institucional de UCB |

## Reglas para agregar un color nuevo

1. Todo acento nuevo debe ser **mate/desaturado** — nunca un color vivo o
   neón. Si al lado de Copperwood, Dried Wine y Old Gold se ve "más
   brillante" que ellos, está mal calibrado.
2. Los papers de la tesis se agregan como **variación de Copperwood**
   (tinte, sombra, o versión desaturada), no como color nuevo.
3. Una rama de trabajo completamente distinta (no tesis) sí puede tener su
   propio tono, siempre que se mantenga en la misma temperatura oscura/mate
   que el resto.
4. Registrar el color aquí ANTES de usarlo en el código — este archivo es la
   fuente de verdad, no la memoria de ninguna conversación ni cuenta externa
   (Coolors free, por ejemplo, tiene límite de paletas guardadas).
5. Revisar contraste texto/fondo en cada color nuevo con
   [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)
   antes de darlo por definitivo.

## Historial de cambios

- **Base + Copperwood + estructura de familias**: definido a partir de
  mockups iterativos (estilo académico clásico + minimalista de autor).
- Pendiente: asignar hex definitivo a Paper 1–4 de la tesis en cuanto estén
  definidos los objetivos específicos.

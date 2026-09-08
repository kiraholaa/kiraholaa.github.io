# Content & context summary — kiraholaa.github.io

Este documento resume todas las decisiones ya tomadas para construir el
sitio. Úsalo junto con `design-system.md` (paleta de colores) como contexto
inicial al pedirle a Claude Code que trabaje en el repo.

## Identidad de publicación

- **Nombre de publicación (published name):** Kaleb Irahola-Azad (con guion)
- **Variante también conocida como:** Kaleb Irahola Azad (sin guion)
- Ya registrado consistentemente en ORCID, Google Scholar y GitHub.

## Correos por plataforma

| Plataforma     | Correo usado                                                                                                                   | Razón                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ORCID          | institucional PUCV                                                                                                             | Verificación de afiliación                                           |
| Google Scholar | cuenta creada con Gmail personal (`k.irahola.a@gmail.com`), verificada con correo institucional `kaleb.irahola.a@mail.pucv.cl` | Personal = permanente; institucional solo verifica afiliación actual |
| GitHub         | Gmail personal (`k.irahola.a@gmail.com`)                                                                                       | Cuenta permanente, no atada a ninguna institución                    |

## ORCID — contenido ya cargado

- **Employment:** PUCV (PhD Student, EII, 2026–presente), Universidad
  Católica Boliviana San Pablo (Lecturer, Tarija, 2022–2026)
- **Education:** UNIR (Máster en Diseño y Gestión de Proyectos
  Tecnológicos, 2022–2023), UCB San Pablo (Lic. Ingeniería Mecatrónica,
  2015–2019)
- **Keywords:** Digital Twin, Port logistics, Interpretable AI, IoT,
  Sensing, Data Science
- **Biography (inglés):** PhD student in Industrial Engineering at
  Pontificia Universidad Católica de Valparaíso (PUCV), member of the
  Laboratorio de Sistemas Inteligentes de Transporte. Background in
  mechatronics engineering. My research focuses on Digital Twin
  implementation in port logistics, designing the data capture and fusion
  layer that feeds an interpretable-by-design AI model for coordinating
  landside truck flow at smart gates.
- **Countries:** Chile (residencia/afiliación actual), Bolivia (origen)

## Google Scholar

- Perfil creado, público, sin artículos aún (situación normal para inicio
  de doctorado — no se agregó nada artificial).
- Afiliación declarada: PhD Student, Industrial Engineering, Pontificia
  Universidad Católica de Valparaíso.
- Áreas de interés: mismas keywords que ORCID.

## GitHub

- Usuario: `kiraholaa`
- Nombre público: Kaleb Irahola-Azad
- Bio: PhD student · Digital Twin & interpretable AI for port logistics
- Company: PUCV
- Location: Valparaíso, Chile
- Social links agregados: ORCID, Google Scholar, LinkedIn (URL limpia, sin
  parámetros de tracking)
- Repos de trabajo en curso (`tesis`, `EII-885_ML`) mantenidos en privado.

## Dirección de estilo del sitio

- **Idioma:** solo inglés.
- **Estructura:** varias páginas (no una sola de scroll) — Home, Research
  / Projects, CV, Contact.
- **Estilo visual:** híbrido entre "académico clásico" (serif en
  encabezados, tono sobrio) y "minimalista de autor" (tipografía grande,
  mucho espacio en blanco, poca decoración).
- **Paleta:** ver `design-system.md` — fondo oscuro (Ink Black / Carbon
  Black), texto claro (Soft Linen / Grey Olive), acento cobre (Copperwood)
  como color general de navegación.
- **Sistema de acento por proyecto:** cada rama de trabajo tiene su propio
  acento (ver `design-system.md`), aplicado a detalles puntuales (bordes de
  tarjeta, etiquetas, links activos de esa sección) — el fondo base NO
  cambia entre secciones, solo el acento.

## Contenido ya definido para tarjetas de proyecto

| Proyecto                            | Categoría   | Acento asignado        |
| ----------------------------------- | ----------- | ---------------------- |
| Smart gate model (interpretable AI) | Tesis       | Familia Copperwood     |
| Digital twin data layer             | Tesis       | Familia Copperwood     |
| CPR simulator (hardware/firmware)   | Rama aparte | Dried Wine (`#6e2a34`) |
| Docencia / postgrado (UCB)          | Rama aparte | Old Gold (`#a9862f`)   |

Los papers específicos de la tesis (3–4, uno por objetivo específico) están
pendientes de definir con detalle — cuando estén claros sus títulos, se
les asigna una variación de la familia Copperwood (ver tabla en
`design-system.md`).

## Stack técnico decidido

- **Theme:** al-folio (Jekyll), open source, sin backend/base de datos.
- **Hosting:** GitHub Pages, repo `kiraholaa.github.io`.
- **Modo oscuro:** el theme lo trae de fábrica — la paleta definida está
  pensada para ese modo por defecto.

## Pendiente / próximos pasos

- Definir títulos y objetivos específicos de los 3–4 papers de la tesis.
- Escribir contenido de la página CV (a partir de los datos ya cargados en
  ORCID).
- Redactar la sección de contacto / formulario o correo de contacto.
- Subir foto profesional (misma que se usó en Google Scholar) al sitio.

# Script de Presentación: Taller de LLM Assisted Coding
## BAISH x Y-hat | Duración: 30 minutos

---

## APERTURA [0:00 - 1:30]

**[Antes de mostrar slides, hablar directo a la audiencia]**

Buenas tardes a todos. Pregunta rápida antes de arrancar: ¿Cuántos de ustedes ya usan ChatGPT, Claude, o algún LLM para programar?

[PAUSA - esperar que levanten la mano]

Perfecto. Y ahora, ¿cuántos se frustraron cuando el modelo les dio código que no funcionaba, o perdió el hilo de lo que estaban haciendo después de un par de idas y vueltas?

[PAUSA - probablemente más manos]

Bueno, ahí está el problema que vamos a resolver hoy. Les voy a mostrar exactamente por qué pasa eso, y cómo usar un método que convierte a los LLMs de "asistentes que a veces ayudan" a "un equipo completo de desarrollo que trabaja en serio".

[CLICK - mostrar Slide 1]

---

## SLIDE 1: TÍTULO [1:30 - 3:00]

Bienvenidos al Taller de LLM Assisted Coding. Noten que tachamos "Vibe Coding" porque lo que les vamos a mostrar hoy no es tirar prompts al aire a ver qué sale. Es un método profesional, estructurado, que genera apps completas y funcionales.

El título dice "Armá proyectos con AI como si tuvieras todo un equipo" - y es literal. Vamos a usar 8 agentes especializados que trabajan juntos: Product Manager, Arquitecto, Desarrollador, QA, y más.

[CLICK - Slide 2]

---

## SLIDE 2: ¿QUÉ ES BAISH? [3:00 - 4:30]

BAISH es el Buenos Aires AI Safety Hub. Somos una comunidad que investiga y enseña sobre seguridad en inteligencia artificial.

Creemos que garantizar la seguridad de los modelos avanzados de IA es uno de los desafíos más importantes que tenemos por delante. No se trata de tenerle miedo a la IA - se trata de construirla bien desde el principio.

Tenemos tres actividades principales que pueden interesarles:

**AI Safety Fundamentals** - Un curso introductorio que se da los viernes de 14:30 a 17:00 en la sala 1604. Si les interesa entender los fundamentos técnicos y filosóficos de la seguridad en IA, pasen por ahí.

**Workshop de AI Safety** - Los martes de 15 a 17, también en 1604, hacemos replicaciones guiadas de papers. Agarramos un paper importante y lo implementamos juntos.

**Club del Paper** - Cada dos semanas los jueves, presentaciones de estudiantes sobre papers de IA y seguridad. Es un espacio más académico para discutir research de punta.

Toda la info está en nuestros canales. Ahora sí, vamos al taller.

[CLICK - Slide 3]

---

## SLIDE 3: DISCLAIMER [4:30 - 5:30]

Antes de seguir, un disclaimer súper importante que tienen que entender bien.

[Leer con énfasis]

**Esta herramienta es excelente para armar apps completas desde cero en poco tiempo.** Eso es verdad y se los vamos a demostrar.

**PERO - y es un PERO enorme - NO la usen para los trabajos prácticos de la facultad.**

¿Por qué? Porque si dejan que el LLM haga todo el trabajo de aprender, ustedes no van a aprender. Y cuando llegue el parcial y tengan que codear a mano, se van a dar cuenta de que no saben.

La analogía es usar una calculadora: está perfecto usarla para trabajar, pero si la usan para hacer toda la tarea de matemática, nunca van a aprender a hacer las cuentas ustedes.

**¿Para qué SÍ usarla?** Proyectos propios. Tu portfolio. Un MVP para una idea que tenés. Tu startup. Hackathons. Cosas donde el objetivo es construir algo que funcione, no demostrar que aprendiste un concepto específico.

¿Quedó claro? Perfecto.

[CLICK - Slide 4]

---

## SLIDE 4: LOCODIFF BENCHMARK [5:30 - 7:00]

Ahora les voy a mostrar por qué los LLMs tradicionales tienen problemas con el código.

[Señalar el gráfico]

Este es el benchmark LoCoDiff, que mide qué tan bien los modelos manejan contextos largos en tareas de código.

Miren la línea azul - ese es Sonnet 4.5, el mejor modelo disponible ahora. Fíjense qué pasa cuando aumenta la cantidad de tokens en el contexto:

- Con 2 a 21 mil tokens → 96% de precisión. Excelente.
- Con 21 a 35 mil tokens → baja a 82%. Ya empezó a perder el hilo.
- Con 36 a 60 mil tokens → 72%. Está claramente degradándose.
- Con más de 60 mil tokens → 64%. Es como pasar de un 10 a un 6.

**Y ese es el MEJOR modelo.** Miren los demás - GPT, Gemini, Grok. Todos se caen mucho más rápido.

¿Qué significa esto? Que cuando pegan todo su código en ChatGPT, el modelo está ahogándose en información. No puede encontrar lo que importa entre tanto ruido.

Pero hay algo aún peor que el problema de contexto largo...

[CLICK - Slide 5]

---

## SLIDE 5: ESTUDIO METR - AI HACE MÁS LENTOS A EXPERTOS [7:00 - 8:30]

Los modelos no tienen memoria a largo plazo.

Un programador que trabaja 2 años en un proyecto construye entendimiento profundo del codebase. Conoce los patterns, dónde está cada cosa, qué no tocar.

El LLM, cada vez que lo usás, arranca de cero. No importa cuántas veces trabajaste en ese archivo - para el modelo es siempre la primera vez.

[Señalar gráfico izquierdo - Predicciones vs Realidad]

Este estudio de METR de 2025 lo demuestra dramáticamente. Tomaron developers con más de 2 años de experiencia en sus propios proyectos open-source y midieron su velocidad con y sin AI.

Miren las predicciones:
- **Expertos predijeron**: 40% más rápido con AI
- **Expertos en ML predijeron**: 38% más rápido
- **Los mismos developers esperaban**: 20-25% más rápido

[Señalar la barra roja del final]

**¿El resultado real? 20% MÁS LENTO.**

[PAUSA - dejar que esto caiga]

[Señalar gráfico derecho - Tiempos de Implementación]

Acá ven los tiempos concretos. Con AI permitido, tardaron 2.26 horas en promedio. Sin AI, 1.67 horas.

¿Por qué? Porque estos developers ya tienen todo el contexto en su cabeza. El AI no. Pierden tiempo explicándole al modelo cosas que ellos ya saben.

[PAUSA]

Ahora, acá está el plot twist: **BMad no está diseñado para trabajar en codebases que ya conocés hace años.**

Está diseñado para **construir proyectos nuevos desde cero**, donde nadie tiene ventaja de conocimiento previo. Donde el contexto inteligente y los agentes especializados te dan un superpoder real.

Ese es el sweet spot de AI para código: greenfield projects, no mantenimiento de legacy.

[CLICK - Slide 6]

---

## SLIDE 6: ¿CÓMO USÁS AI HOY? [8:30 - 10:30]

Seamos honestos sobre cómo todos usamos los LLMs para programar actualmente.

[Lado izquierdo - problemas comunes]

Lo que hacemos todos:
- "Che, ayudame con este bug de mierda" - copiamos el error, lo pegamos, esperamos que funcione.
- "Creame un botón con buen diseño" - queremos algo rápido y lindo.
- "No entiendo un carajo este código" - estamos leyendo código legacy horrible.

¿Suena familiar? Por supuesto. Y está bien para tareas chicas.

**El problema:** Te quedás con fragmentos aislados de código. El contexto se pierde. Solo podés hacer apps chiquitas antes de que explote todo.

[Lado derecho - el problema real]

El problema posta es el **Context Window**. Ya vimos el gráfico, pero veamos qué significa en la práctica:

1. **El modelo pierde precisión con mucho contexto** - de 96% a 64% en Sonnet 4.5.

2. **Se pierde lo importante** - Cuando tenés 50 archivos en el contexto, el modelo no encuentra el detalle crucial que necesita.

3. **Un solo chat largo = deterioro completo** - Cada cambio agrega más basura al contexto. Código viejo mezclado con nuevo. El modelo empieza a contradecirse. Eventualmente, no entiende ni lo que escribió hace 10 mensajes.

[Abajo - la solución]

**La que va: Manejo de Contexto Inteligente.**

Agentes especializados que buscan SOLO lo que necesitás para cada tarea. No le das todo al Developer. Le das exactamente la user story, los archivos relevantes, la arquitectura de ese módulo específico.

Eso es BMad.

[CLICK - Slide 7]

---

## SLIDE 7: CICLO DE DESARROLLO CON BMAD [10:30 - 12:30]

BMad sigue un proceso profesional que probablemente reconozcan si hicieron materias de ingeniería de software.

[Primera sección - Planning]

**Planning riguroso**: Antes de escribir una línea de código, planificamos todo.

- El **Analyst** (opcional) puede armar un project brief si arrancás de cero
- El **PM** crea el PRD - Product Requirements Document - con todas las features y requisitos
- El **UX Expert** (opcional) diseña la experiencia de usuario
- El **Architect** define la arquitectura técnica, el tech stack, cómo se conecta todo
- **QA** puede dar input temprano sobre áreas de alto riesgo
- El **Product Owner** "shardea" todo - lo parte en epics y stories manejables

[Medio - PO shard documents]

El PO es clave acá. Toma documentos enormes (el PRD de 20 páginas, la arquitectura compleja) y los parte en pedacitos digeribles. Cada "shard" es un documento focalizado que un agente puede procesar sin ahogarse.

[Segunda sección - Development Loop]

**Development Loop iterativo**: Ahora sí, a programar. Pero story por story, con validación en cada paso.

- **SM** (Scrum Master) hace el draft de la siguiente story
- **PO** valida contra los requirements (opcional pero recomendado)
- **QA** hace análisis de riesgo y diseño de tests (opcional)
- **Dev** implementa la story con código y tests
- **QA** revisa y da el gate de calidad (opcional)
- Hacemos el **commit** y marcamos la story como Done
- Repetimos el ciclo para la siguiente story

[Abajo - HITL]

Acá está la clave del éxito: **Human in the Loop**. Hay puntos donde tenés que aprobar antes de seguir. No es todo automático. Vos sos el tech lead que guía al equipo.

[CLICK - Slide 8]

---

## SLIDE 8: BUSINESS ANALYST [12:30 - 13:30]

El **Business Analyst** se llama Mary en los prompts.

¿Para qué sirve? Es **la que entiende el negocio y te ayuda a arrancar.**

Imaginate que tenés una idea medio vaga: "Quiero hacer una app para que la gente comparta recetas". Pero no sabés exactamente qué features necesitás, quién es tu competencia, cómo monetizar.

Mary te ayuda:
- **Arma los briefs del proyecto** - Te hace las preguntas correctas y documenta todo
- **Investiga el mercado** - Analiza la competencia, busca nichos
- **Organiza lluvias de ideas** - Te ayuda a generar y estructurar ideas
- **Te da clarity cuando estás perdido**

El comando es `/analyst *create-project-brief`

Mary es opcional - si ya tenés tu idea clara, podés skipearla y arrancar directo con el PM. Pero si estás en modo "tengo una idea pero no sé bien qué hacer con ella", Mary es tu mejor amiga.

[CLICK - Slide 9]

---

## SLIDE 9: PRODUCT MANAGER [13:30 - 14:30]

El **Product Manager** se llama John. Y John es **el que planifica TODO.**

El PM toma tu idea (refinada por Mary o directa de vos) y la convierte en un PRD - Product Requirements Document. Este es el documento más importante del proyecto.

¿Qué hace John?
- **Arma PRDs completos** con features, user stories, requirements funcionales y no funcionales
- **Define prioridades** - Qué se hace en el MVP, qué viene después
- **Crea el roadmap** - Planifica las fases del proyecto
- **Documenta todo** para que todos entiendan qué hay que hacer

El comando principal es `/pm *create-prd`

El PRD es tu contrato. Es lo que guía a todos los demás agentes. Si el PRD está bien hecho, el resto fluye. Si está mal, todo el proyecto se tuerce.

John es obligatorio - no podés skipear el PM. Necesitás esos requirements.

[CLICK - Slide 10]

---

## SLIDE 10: ARCHITECT [14:30 - 15:30]

El **Architect** se llama Winston. Y Winston **diseña toda la arquitectura del sistema.**

Una vez que John terminó el PRD, Winston lo lee y diseña cómo se va a construir técnicamente.

¿Qué hace Winston?
- **Diseña la arquitectura** completa - frontend, backend, base de datos, APIs
- **Elige el tech stack** - ¿React o Vue? ¿Node o Python? ¿SQL o NoSQL?
- **Define las APIs** y contratos entre componentes
- **Estructura el código** - Carpetas, módulos, separación de concerns
- **Considera escalabilidad, seguridad, performance**

El comando es `/architect *create-full-stack-architecture`

Winston toma decisiones técnicas fundamentales. Y las documenta, así el Developer sabe exactamente cómo construir cada pieza y cómo encajan todas juntas.

También es obligatorio - sin arquitectura, el Developer va a inventar cosas sobre la marcha y va a ser un desastre.

[CLICK - Slide 11]

---

## SLIDE 11: UX EXPERT [15:30 - 16:30]

La **UX Expert** se llama Sally. Sally es **la diseñadora de experiencia.**

Sally es opcional, pero si tu app tiene interfaz de usuario (casi todas), vale mucho la pena usarla.

¿Qué hace Sally?
- **Diseño de UX e UI** - Cómo va a sentirse y verse la app
- **Wireframes y prototipos** - Mockups de las pantallas
- **User research** e **interaction design** - Cómo el usuario interactúa con cada feature
- **Accesibilidad** - Asegura que sea usable por todos
- **Prompts para V0/Lovable** - Genera prompts optimizados para herramientas de generación de UI

El comando es `/ux-expert *create-front-end-spec`

Sally genera un spec de front-end que el Developer puede seguir. No es código - es una descripción detallada de cómo debe verse y comportarse cada componente.

Si querés que tu app no parezca de los 90, usá a Sally.

[CLICK - Slide 12]

---

## SLIDE 12: SCRUM MASTER [16:30 - 17:30]

El **Scrum Master** se llama Bob. Bob es **especialista en preparación de stories.**

Acá es donde el proyecto pasa de documentos a trabajo ejecutable.

¿Qué hace Bob?
- **Crea stories detalladas y accionables** - Toma un epic y lo parte en stories que el Developer puede implementar
- **Define criterios de aceptación claros** - ¿Cómo sabemos que está hecho?
- **Secuencia las tareas** - Primera esto, después esto, al final esto
- **Gestión de epics** y procesos ágiles
- **Retrospectivas y mejora continua**

El comando principal es `/sm *draft`

Bob agarra los shards que generó el PO y dice: "Ok Developer, hacé exactamente esto, en este orden, con estos criterios de éxito."

Sin Bob, el Developer mira el PRD gigante y se paraliza. Con Bob, tiene una tarjeta clara de "hacé esto ahora".

[CLICK - Slide 13]

---

## SLIDE 13: PRODUCT OWNER [17:30 - 18:30]

La **Product Owner** se llama Sarah. Sarah **gestiona el backlog y shardea documentos.**

Ya mencioné el sharding antes - ahora veamos por qué es crítico.

¿Qué hace Sarah?
- **Shardea PRD y arquitectura** en epics y stories - Parte documentos gigantes en pedacitos focalizados
- **Valida cada story draft** contra requirements - Se asegura que lo que Bob propone cumple con lo que John pidió
- **Gestión de backlog** y priorización - Qué story va primero
- **Refina historias durante desarrollo** - Ajusta el backlog según lo que aprendemos
- **Asegura coherencia story por story** - Que todo encaje al final

El comando principal es `/po *shard-doc`

Sarah es la que evita que el contexto explote. En vez de darle al Developer un documento de 10,000 tokens, le da un shard de 500 tokens con exactamente lo que necesita para esta story.

[CLICK - Slide 14]

---

## SLIDE 14: DEVELOPER [18:30 - 19:30]

El **Developer** se llama James. James es **el que codea posta.**

Todo lo anterior era preparación. James es donde la magia sucede.

¿Qué hace James?
- **Programa cada feature con todos los tests** - Código de producción, no prototipos
- **Tests unitarios, de integración y E2E** - Cobertura completa
- **Debuggea y refactorea** - No solo escribe código nuevo, arregla y mejora
- **Sigue best practices** - Code style, SOLID principles, DRY
- **Documenta el código** - Comments, docstrings, README

El comando principal es `/dev *develop-story`

James recibe la story de Bob, lee la arquitectura de Winston, el spec de Sally si existe, y programa. Genera código que funciona, con tests que pasan.

James es el más usado. Vas a estar todo el tiempo en el loop de draft → validate → develop → review → commit.

[CLICK - Slide 15]

---

## SLIDE 15: QA/TEST ARCHITECT [19:30 - 20:30]

El **Test Architect** se llama Quinn. Quinn es **tu asesor de calidad.**

Acá hay algo importante: Quinn NO bloquea. Quinn **asesora**. Ustedes deciden la barra de calidad que quieren.

¿Qué hace Quinn?
- **Risk profiling** - Matriz de evaluación de riesgos por feature
- **Test design** - Estrategia comprehensiva de testing
- **Requirements traceability** - Mapea cada test a un requirement (formato Given-When-Then)
- **NFR assessment** - Non-Functional Requirements: seguridad, performance, confiabilidad
- **Quality gates** - Emite uno de cuatro estados: PASS / CONCERNS / FAIL / WAIVED

El comando es `/qa *review {story}`

Quinn puede entrar en dos momentos:
1. **Antes de desarrollar** - "Esta story tiene alto riesgo de seguridad, considerá estos test cases"
2. **Después de desarrollar** - "Revisé el código, los tests están bien pero falta validación de input - CONCERNS"

Ustedes deciden si seguir adelante con CONCERNS o arreglarlo primero. Quinn informa, no manda.

[CLICK - Slide 16]

---

## SLIDE 16: FASE 1 - PLANNING [20:30 - 21:30]

Ahora veamos cómo se usan estos agentes en la práctica. Hay dos fases: Planning y Development.

**Fase 1: Planning - Diseño completo antes de codear**

Esta fase genera todos los documentos que el equipo necesita. Se hace UNA VEZ al principio del proyecto.

Los pasos:

**1. Analyst: Project Brief (opcional)** - Define la visión. Si ya tenés esto claro, skip.

**2. PM: PRD Creation** - OBLIGATORIO. Genera requirements, epics, stories preliminares.

**3. UX Expert: Front-End Spec (opcional)** - Si tenés UI, recomendado. Diseño de interfaces y prompts para herramientas.

**4. Architect: System Design** - OBLIGATORIO. Arquitectura y tech stack.

**5. QA: Early Test Input (opcional)** - Quinn puede dar input temprano en áreas de alto riesgo.

**6. PO: Sharding** - OBLIGATORIO. Sarah parte PRD y arquitectura en shards manejables.

Al final de esta fase, tenés:
- PRD completo
- Arquitectura definida
- Specs de diseño (si aplica)
- Backlog de stories shardeadas

Listo. No tocaste una línea de código todavía. Y eso está bien - el planning correcto te ahorra semanas de refactoring después.

[CLICK - Slide 17]

---

## SLIDE 17: FASE 2 - DEVELOPMENT [21:30 - 22:30]

**Fase 2: Development - Implementación iterativa story por story**

Esta fase es un loop. Lo repetís para cada story hasta terminar el proyecto.

Los pasos del loop:

**1. SM: Draft Story** - Bob toma la siguiente story del backlog y la prepara: tasks secuenciales, criterios de aceptación, contexto.

**2. PO: Validate Draft (opcional)** - Sarah valida que la story cumple con PRD y arquitectura. Recomendado.

**3. QA: Risk & Test Design (opcional)** - Quinn identifica riesgos y define estrategia de testing. Útil para stories complejas.

**4. Dev: Implementation** - James programa la story: código + tests + documentación.

**5. QA: Review & Gate (opcional)** - Quinn hace análisis comprehensivo y emite quality gate. Recomendado antes de commit.

**6. Commit & Loop** - Commitean los cambios, marcan la story como Done en el backlog, y vuelven al paso 1 con la siguiente story.

[Abajo - nota iterativa]

Es **iterativo**. No hacen todo de una. Story por story, commit por commit, hasta completar el proyecto.

La ventaja de este approach es que siempre tenés una versión funcional. Si después de 5 stories te das cuenta que querés cambiar el rumbo, podés. No estás comprometido a un plan gigante que generaste al principio.

[CLICK - Slide 18]

---

## SLIDE 18: QUALITY GATES [22:30 - 23:00]

Hablemos rápido de los quality gates porque son importantes.

[Arriba - features]

Quinn ofrece 4 tipos de análisis:
- **Risk Profiling** - ¿Qué puede salir mal?
- **Test Design** - ¿Cómo testeamos esto bien?
- **Requirements Tracing** - ¿Estamos cumpliendo con lo que pedimos?
- **NFR Assessment** - ¿Es seguro? ¿Es rápido? ¿Es confiable?

[Medio - gate status]

Quinn emite uno de cuatro estados:

- **PASS** ✅ - Todo bien, adelante
- **CONCERNS** ⚠️ - Hay problemas menores, considérenlos
- **FAIL** ❌ - Hay problemas graves, no deberían commitear esto
- **WAIVED** 🔓 - Sabemos que no es perfecto pero es prototipo/MVP, seguimos igual

[Abajo - nota clave]

"Los equipos eligen su barra de calidad - QA asesora, no bloquea"

Esto significa: si estás haciendo un MVP rápido para una hackathon, podés ignorar los CONCERNS. Si estás construyendo software médico, probablemente no.

Quinn te da la información. Vos decidís.

[CLICK - Slide 19]

---

## SLIDE 19: HERRAMIENTAS [23:00 - 24:00]

Bueno, ya entendieron la metodología. ¿Cómo lo usamos en la práctica?

[Grid de herramientas]

**Entorno**: VS Code en GitHub Codespaces. Nada para instalar localmente, todo en la nube. En 2 minutos tenés todo listo.

**Modelos**: Vamos a usar principalmente code-supernova y Grok Code Fast 1. Son modelos optimizados para código con buen balance costo-performance.

**Framework**: BMad Method ya viene pre-instalado en el repo. Los prompts de los 8 agentes, toda la estructura, listo para usar.

**MCP Tools**: Playwright y Sequential Thinking. Ya vamos a ver qué son.

[Abajo - setup en 5 pasos]

El setup es simple:

1. **Fork del repo** - Copian el repo del workshop a su cuenta
2. **Abrir en Codespaces** - Un botón en GitHub
3. **Correr script de setup** - Un comando que instala todo
4. **Ingresar API key** - Su key de Anthropic u OpenRouter
5. **Seleccionar modelo** - Eligen el modelo que quieren usar

5 pasos, 5 minutos máximo. Después de eso están listos para armar apps.

[CLICK - Slide 20]

---

## SLIDE 20: MCP TOOLS [24:00 - 25:30]

MCP Tools son "superpoderes" para los agentes. Son herramientas especializadas que los LLMs pueden usar para hacer cosas que normalmente no pueden.

[Primera sección - Playwright]

**Playwright MCP - Browser Automation**

Playwright le da a los agentes la capacidad de **controlar un browser de verdad.**

Capacidades:
- Navegar a URLs
- Hacer clicks
- Llenar formularios
- Tomar screenshots
- Testear flujos E2E completos

Casos de uso:
- QA testing automático
- Verificar responsive design
- Testear user flows reales
- Detectar bugs visuales

Con Playwright, Quinn puede literalmente abrir tu app, usarla como lo haría un usuario, y decirte "el botón de login no funciona en mobile".

[Segunda sección - Sequential Thinking]

**Sequential Thinking MCP - Problem Solving**

Sequential Thinking le da a los agentes un "espacio para pensar" estructurado.

Features:
- Break down de problemas complejos en pasos
- Revisar thoughts anteriores
- Branching en el razonamiento (explorar múltiples opciones)
- Verificar hipótesis antes de ejecutar

Ideal para:
- Planning complejo
- Debugging difícil donde no está claro qué pasa
- Análisis que requiere reconsideración
- Decisiones arquitectónicas con múltiples tradeoffs

Con Sequential Thinking, Winston puede pensar "Ok, podría usar REST o GraphQL, veamos pros y cons de cada uno para este caso específico" antes de decidir.

[Banner final]

Ambos vienen pre-configurados en el repo. Se activan automáticamente cuando los agentes los necesitan. Ustedes no tienen que hacer nada.

[CLICK - Slide 21]

---

## SLIDE 21: DEMO - LA IDEA [25:30 - 26:00]

Bueno, suficiente teoría. Veamos esto en acción.

Vamos a construir un **Pomodoro Timer** en tiempo real.

¿Qué es un Pomodoro Timer? Es una técnica de estudio donde laburás 25 minutos concentrado, 5 minutos de break, y repetís. Después de 4 "pomodoros", tomás un break más largo.

Es perfecto para estudiar sin agotarte. Y es un proyecto ideal para demo porque:
- Es simple de entender
- Tiene UI (timer visual, botones)
- Tiene lógica (countdown, state management)
- Tiene features opcionales (notificaciones, historial)

Entonces vamos a ver cómo BMad construye esto desde cero.

[CLICK - Slide 22]

---

## SLIDE 22: DEMO FLOW [26:00 - 27:30]

[Acá está el plan para la demo. Hay dos opciones dependiendo del tiempo:]

**OPCIÓN A: Demo rápida narrada (si estamos cortos de tiempo)**

Voy a narrar cada paso mostrando screenshots o navegando rápido:

**1. Planning (3 min total en slides)**
- Mostrar comando `/pm *create-prd` y explicar: "Le decimos al PM: quiero un pomodoro timer con estas features básicas"
- Mostrar el PRD generado (scroll rápido): "Miren, armó user stories, requirements funcionales, hasta pensó en notificaciones"
- Mostrar comando `/architect *create-full-stack-architecture`
- Mostrar arquitectura generada: "Winston eligió React + TypeScript en el front, lógica de timer con hooks, componentes separados"

**2. Sharding (1 min)**
- `/po *shard-doc` - "Sarah parte esto en 4 stories manejables"
- Mostrar el backlog generado

**3. Story Draft (2 min)**
- `/sm *draft` para la primera story
- "Bob toma 'Story 1: Timer Básico' y la expande en tasks: 1) Crear componente Timer, 2) Implementar countdown logic, 3) Agregar controles start/pause, 4) Escribir tests"

**4. Development (5 min)**
- `/dev *develop-story`
- Mostrar a James trabajando (ver los archivos siendo creados en tiempo real)
- Mostrar el código generado (scroll por un componente)
- **IMPORTANTE**: Mostrar la app funcionando en el browser

**5. QA Review (1 min - opcional)**
- `/qa *review story-1`
- Mostrar el reporte: "PASS - tests comprehensivos, código limpio"

[Transición]

Y eso es todo. En 12 minutos pasamos de "quiero un pomodoro timer" a una app funcional con código limpio y tests.

**OPCIÓN B: Si tienen tiempo para live demo**

[Hacer un live demo rápido ejecutando estos comandos. Requiere que todo esté preparado antes.]

---

[CLICK - Slide 23]

---

## SLIDE 23: ¿QUÉ PODÉS CONSTRUIR? [27:30 - 28:30]

Ahora que vieron cómo funciona, ¿qué pueden construir con esto?

[Leer la grilla rápido, con energía, como lista de posibilidades]

Tu portfolio personal. Un dashboard de finanzas. Una app de recetas. Tu app de notas perfecta. La API para tu startup. Un e-commerce MVP. Tu blog. Un task manager.

[Pausa]

¿Vieron la última celda? "¡Lo que se te ocurra!"

Eso es literal. Si podés describirlo en palabras, BMad puede ayudarte a construirlo.

Algunos de ustedes tal vez estén pensando: "Suena demasiado bueno para ser verdad." Y los entiendo. Pero la realidad es que las herramientas están acá. Los modelos están cada vez mejor. El contexto inteligente resuelve el problema principal.

La única limitación real es tu creatividad y tu tiempo.

El límite lo ponés vos.

[CLICK - Slide 24]

---

## SLIDE 24: ¡COMENCEMOS! [28:30 - 30:00]

Bueno, ya hablamos suficiente. Ahora viene la parte divertida: ustedes van a hacerlo.

[Señalar el setup]

El setup es simple, 5 pasos:

1. **Fork del repo** - Van al repo del workshop y le dan fork
2. **Abrirlo en GitHub Codespaces** - Un botón verde que dice "Code" → "Codespaces"
3. **Correr el script de setup** - Un comando en la terminal
4. **Ingresar tu API key** - Si no tenés, les vamos a dar instrucciones para conseguir trial credits
5. **Seleccionar el modelo** - Eligen entre code-supernova o Grok Code Fast 1

Eso es todo. En 5 minutos están listos.

[Señalar el botón CTA]

¡Vamos a armar algo copado!

Esa es la actitud. No "vamos a ver si funciona". No "a ver qué sale".

Vamos a ARMAR algo que FUNCIONA.

[Señalar los logos]

Gracias BAISH y Y-hat por organizar esto. Y gracias a ustedes por venir.

[Pausa, contacto visual con la audiencia]

Ahora sí - ¿tienen alguna pregunta rápida antes de arrancar con el hands-on?

[Tomar 1-2 preguntas MUY breves si hay, máximo 1 minuto]

Perfecto. Abran sus laptops, busquen el link del repo que está en el chat, y empecemos a construir.

---

## TIMING TOTAL: ~30 minutos

**Breakdown por sección:**
- Apertura + Slides 1-2: 4:30 min
- Slide 3 (Disclaimer): 1:00 min
- Slide 4 (LoCoDiff): 1:30 min
- Slide 5 (METR Study): 1:30 min
- Slide 6 (Problema actual): 2:00 min
- Slide 7 (Ciclo desarrollo): 2:00 min
- Slides 8-15 (8 agentes individuales): 7:30 min
- Slides 16-18 (Workflow + QA): 2:30 min
- Slides 19-20 (Tools + MCP): 2:30 min
- Slides 21-22 (Demo): 2:00 min
- Slides 23-24 (Cierre): 1:30 min

**Total: 29:30 min** (buffer de 30 seg para transiciones)

**Nota sobre timing crítico:**
Los agentes individuales (slides 8-15) son ~1 minuto cada uno. Si te atrasás, cortá la descripción del Analyst y UX Expert que son opcionales, y pasá más rápido por SM y PO.

---

## NOTAS PARA EL PRESENTADOR

### Energía y Pacing
- **Arrancar con energía alta** - Hook fuerte en la apertura
- **Bajar un poco en el medio** - Las secciones técnicas (agentes, fases) con ritmo más pausado
- **Subir al final** - Demo y cierre con entusiasmo

### Puntos de énfasis
- El benchmark (Slide 4) - Hacer que entiendan el problema de contexto largo
- **El estudio METR (Slide 5)** - Este es el momento "wow" negativo - AI hace MÁS LENTOS a expertos. Dejar que caiga. Luego el pivot: BMad es para greenfield projects.
- El disclaimer (Slide 3) - Ser firme pero no sermoneador
- Human in the Loop (Slide 7) - Esto no es mágico, vos seguís a cargo
- Quality gates (Slide 19) - No bloquea, asesora

### Si te quedás sin tiempo
**Cortar en este orden:**
1. Analyst (Slide 8) - Es opcional, skipear completamente
2. UX Expert (Slide 11) - Es opcional, mencionar brevemente
3. QA (Slide 15) - Mencionar que existe y es asesor, no detalle
4. MCP Tools (Slide 20) - Solo mencionar que existen
5. Hacer agentes restantes más rápidos - 30-45 seg cada uno

**Nunca cortar:**
- **El estudio METR (Slide 5)** - Es la justificación clave de por qué BMad
- El problema y contexto (Slide 6)
- El flujo general (Slide 7)
- PM (Slide 9), Architect (Slide 10), Developer (Slide 14) - Los agentes core
- Workflow phases (Slides 16-17)

### Si te sobra tiempo
- Expander más en el demo
- Tomar más preguntas en el medio
- Mostrar ejemplos de PRDs o arquitecturas reales
- Contar anécdotas de proyectos exitosos con BMad

### Manejo de preguntas
- Si hacen una pregunta durante la presentación que vas a cubrir después: "Excelente pregunta, llego a eso en 2 slides"
- Si hacen una pregunta muy técnica: "Buena pregunta para resolver en el hands-on, después lo vemos juntos"
- Si alguien es escéptico: "Entiendo el escepticismo, por eso vamos a hacer el demo - seeing is believing"

### Backup por problemas técnicos
Si la demo falla:
- Tener screenshots pre-tomados de cada paso
- Tener un video backup grabado de antemano
- En último caso: narrar el proceso con los slides del flujo (22)

No entrar en pánico. La metodología es sólida incluso si la demo no sale perfecta.

---

## RECURSOS ADICIONALES

### Links útiles (tener a mano)
- Repo del workshop: [URL]
- Docs de BMad: [URL]
- Canal de Discord BAISH: [URL]
- Anthropic API trial: [URL]
- OpenRouter: [URL]

### Respuestas a preguntas frecuentes

**"¿Cuánto cuesta?"**
Los modelos tienen costo por token. Para proyectos chicos (como el pomodoro) es < $1. Para proyectos más grandes, depende del tamaño. OpenRouter tiene precios transparentes.

**"¿Funciona con código existente?"**
Sí, BMad puede trabajar con codebases existentes. Los agentes pueden leer tu código, entenderlo, y hacer modificaciones siguiendo tu arquitectura.

**"¿Qué lenguajes soporta?"**
Todos los lenguajes mainstream: Python, JavaScript/TypeScript, Go, Rust, Java, etc. Los modelos son polyglot.

**"¿Puedo usar otros modelos además de los que mencionaste?"**
Sí, BMad es agnóstico al modelo. Podés usar Claude Sonnet, GPT-4, Gemini, lo que quieras. Solo ajustás la configuración.

**"¿El código generado es bueno?"**
Con las instrucciones correctas y el contexto adecuado, sí. No es perfecto - siempre vas a revisar y ajustar. Pero es production-quality en la mayoría de casos.

**"¿Esto me va a sacar el trabajo?"**
No. Te va a hacer 10x más productivo. En vez de ser un developer que hace 1 proyecto a la vez, vas a ser un tech lead que orquesta múltiples proyectos simultáneos.

---

**END OF SCRIPT**

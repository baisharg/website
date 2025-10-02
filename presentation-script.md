# Script de Presentación: Taller de LLM Assisted Coding
## BAISH x Y-hat | Duración: 30 minutos | Total de slides: 22

---

## APERTURA [0:00 - 1:30]

**[Antes de mostrar slides, hablar directo a la audiencia]**

Buenas tardes a todos. Pregunta rápida antes de arrancar: ¿Cuántos de ustedes ya usan ChatGPT, Claude, o algún LLM para programar?

[PAUSA - esperar que levanten la mano]

Perfecto. Y ahora, ¿cuántos se frustraron cuando el modelo les dio código que no funcionaba, o perdió el hilo de lo que estaban haciendo después de un par de idas y vueltas?

[PAUSA - probablemente más manos]

Bueno, ahí está el problema que vamos a resolver hoy. Les voy a mostrar exactamente por qué pasa eso, y cómo usar un método que convierte a los LLMs de "asistentes que a veces ayudan" a "un equipo completo de desarrollo que trabaja con documentación estructurada y contexto inteligente".

[CLICK - mostrar Slide 1]

---

## SLIDE 1: TÍTULO [1:30 - 3:00]

Bienvenidos al Taller de LLM Assisted Coding. Noten que tachamos "Vibe Coding" porque lo que les vamos a mostrar hoy no es tirar prompts al aire a ver qué sale. Es un método profesional, estructurado, que genera apps completas y funcionales.

El título dice "Armá proyectos con AI como si tuvieras todo un equipo" - y es literal. Vamos a usar 8 agentes especializados que trabajan juntos: Product Manager, Arquitecto, Desarrollador, QA, y más.

[CLICK - Slide 2]

---

## SLIDE 2: ¿QUÉ ES BAISH? [3:00 - 3:45]

BAISH es el Buenos Aires AI Safety Hub - investigamos y enseñamos sobre seguridad en inteligencia artificial.

Tenemos tres actividades que pueden interesarles:

**AI Safety Fundamentals** - Viernes 14:30-17:00, Sala 1604.

**Workshop de AI Safety** - Martes 15:00-17:00, Sala 1604. Replicaciones de papers guiadas. **Importante: abierto a todos sin necesidad de inscripción previa.**

**Club del Paper** - Cada dos semanas los jueves, 15:00-17:00, Sala 1604.

Ahora sí, vamos al taller.

[CLICK - Slide 3]

---

## SLIDE 3: CÓMO APROVECHAR ESTA HERRAMIENTA [3:45 - 5:00]

Antes de seguir, hablemos de cómo usar BMad de forma inteligente.

**BMad acelera la construcción de proyectos y mejora la calidad del código.**

La estrategia inteligente: usala para **construir más proyectos y aprender más rápido**. Cada proyecto te expone a nuevos patterns, arquitecturas, decisiones de diseño.

**Casos de uso ideales:** Proyectos personales, MVPs, prototipos, tu startup, hackathons, aprender nuevos tech stacks.

Ahora, sobre los TPs de la facultad - acá viene lo interesante. **SÍ podés usar BMad para TPs**, pero de forma pedagógica:

[Señalar la caja con el workflow]

**Workflow para aprender:**
1. Usá PM + Architect para **entender** el problema y la arquitectura profesional
2. Usá SM para dividir el trabajo en stories claras
3. **Acá está la clave: Salteá el Developer - CODEA VOS**
4. Usá QA para revisar TU código y aprender de feedback experto

El resultado: aprendés planificación profesional, codeás vos mismo, y recibís code review automático de calidad. Es como tener un senior developer revisando tu trabajo.

Esto es lo que hace BMad diferente - no es solo generación de código, es un sistema completo para aprender y trabajar profesionalmente.

[CLICK - Slide 4]

---

## SLIDE 4: LOCODIFF BENCHMARK [5:00 - 6:15]

Ahora les voy a mostrar por qué los LLMs tradicionales tienen problemas con el código.

[Señalar el gráfico]

Este es el benchmark LoCoDiff - un estudio publicado en enero 2025 que mide qué tan bien los modelos manejan contextos largos en tareas de código reales.

Miren la línea azul - ese es Sonnet 4.5, el mejor modelo disponible ahora. Fíjense qué pasa cuando aumenta la cantidad de tokens en el contexto:

- Con 2 a 21 mil tokens → 96% de precisión. Excelente.
- Con 21 a 35 mil tokens → baja a 82%. Ya empezó a perder el hilo.
- Con 36 a 60 mil tokens → 72%. Está claramente degradándose.
- Con más de 60 mil tokens → 64%. Es como pasar de un 10 a un 6.

**Y ese es el MEJOR modelo.** Miren los demás - GPT-5, Gemini, Grok. Todos se caen mucho más rápido.

¿Qué significa esto? Que cuando pegan todo su código en ChatGPT, el modelo está ahogándose en información. No puede encontrar lo que importa entre tanto ruido.

[Señalar link abajo a la derecha si alguien pregunta]

El estudio completo está linkeado abajo - pueden profundizar después del taller.

Pero hay algo aún peor que el problema de contexto largo...

[CLICK - Slide 5]

---

## SLIDE 5: ESTUDIO METR - AI Y DEVELOPERS EXPERTOS [6:15 - 7:45]

Los modelos no tienen memoria a largo plazo.

Un programador que trabaja 2 años en un proyecto construye entendimiento profundo del codebase. Conoce los patterns, dónde está cada cosa, qué no tocar.

El LLM, cada vez que lo usás, arranca de cero. No importa cuántas veces trabajaste en ese archivo - para el modelo es siempre la primera vez.

[Señalar gráfico izquierdo - Predicciones vs Realidad]

Este estudio de METR de julio 2025 lo demuestra dramáticamente. Tomaron developers con más de 2 años de experiencia en sus propios proyectos open-source y midieron su velocidad con y sin AI.

Miren las predicciones:
- **Expertos predijeron**: 39% más rápido con AI
- **Expertos en ML predijeron**: 38% más rápido
- **Los mismos developers esperaban**: 20-24% más rápido

[Señalar la barra roja del final]

**¿El resultado real? 20% MÁS LENTO.**

[PAUSA - dejar que esto caiga]

[Señalar gráfico derecho - Tiempos de Implementación]

Acá ven los tiempos concretos. Con AI permitido, tardaron 2.26 horas en promedio. Sin AI, 1.67 horas.

¿Por qué? Porque estos developers ya tienen todo el contexto en su cabeza. El AI no. Pierden tiempo explicándole al modelo cosas que ellos ya saben.

[Señalar la caja verde abajo]

**Ahora, la solución BMad:** Documentación estructurada + Contexto inteligente.

BMad funciona para DOS casos:

**Greenfield projects** - Construir proyectos nuevos desde cero. Acá nadie tiene ventaja de contexto, y BMad brilla.

**Brownfield projects** - Y acá está lo interesante: también sirve para codebases existentes. ¿Cómo? **Documentándolos primero.** Usás los agentes para crear documentación estructurada del proyecto existente - arquitectura, componentes, decisiones de diseño. Ahora los agentes tienen contexto profesional, no tienen que adivinarlo.

Entonces BMad no es solo para proyectos nuevos - es para cualquier proyecto que quieras desarrollar de forma estructurada y profesional.

[El link al estudio está abajo a la derecha para quien quiera profundizar]

[CLICK - Slide 6]

---

## SLIDE 6: ¿CÓMO USÁS AI HOY? [7:45 - 9:30]

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

## SLIDE 7: CICLO DE DESARROLLO CON BMAD [9:30 - 11:00]

BMad sigue un proceso profesional que probablemente reconozcan si hicieron materias de ingeniería de software. Pero lo interesante es cómo lo implementamos de forma práctica.

[Primera sección - Planning]

**Planning riguroso**: Antes de escribir una línea de código, planificamos. El workflow core es:

- **PM** crea el PRD - Product Requirements Document completo
- **Architect** define la arquitectura técnica y tech stack
- **PO** corre el Master Checklist - valida que PRD y Arquitectura estén alineados
- **PO** "shardea" todo - lo parte en epics y stories manejables

Y después tenés agentes adicionales que usás cuando los necesitás: Analyst para proyectos nuevos, UX Expert para apps con UI, QA para input en áreas de alto riesgo.

[Medio - Documents Shardeados]

El PO es clave acá. Primero valida que los documentos estén alineados - si no, se refinan hasta que todo tenga sentido. Después toma documentos enormes y los parte en pedacitos digeribles. Cada "shard" es un documento focalizado que un agente puede procesar sin ahogarse. Acá es donde resolvemos el problema del contexto largo.

[Segunda sección - Development Loop]

**Development Loop iterativo**: El workflow core tiene pasos críticos:

- **SM Review** - revisa notas de la story anterior para aprender
- **SM Draft** - hace el draft de la siguiente story con tareas secuenciales
- **Dev** implementa con código, tests, validaciones
- **Ready + Notes** - Dev marca listo para review y documenta notas
- **Tests✓ Commit** - Verificar tests de regresión y linting, después COMMIT
- Loop a siguiente story

Y de nuevo, validación adicional cuando la necesitás: PO para validar contra PRD, QA para review de áreas críticas.

[Abajo - HITL]

Acá está la clave del éxito: **Human in the Loop**. Vos sos el tech lead que aprueba transiciones clave. No es todo automático - vos guiás el equipo.

[CLICK - Slide 8]

---

## SLIDE 8: BUSINESS ANALYST [11:00 - 11:45]

El **Business Analyst** se llama Mary en los prompts.

¿Para qué sirve? Es **la que entiende el negocio y te ayuda a arrancar.**

Imaginate que tenés una idea medio vaga: "Quiero hacer una app para que la gente comparta recetas". Pero no sabés exactamente qué features necesitás, quién es tu competencia, cómo monetizar.

Mary te ayuda con:
- Armar briefs del proyecto
- Investigar mercado y competencia
- Organizar lluvias de ideas
- Dar clarity cuando estás perdido

[Señalar la sección de artifacts]

**Los artifacts que crea:** Project Brief, Market Research, Competitor Analysis, Brainstorming Output. Documentos estructurados que después usa el PM.

El comando es `/analyst *create-project-brief`

Mary es para proyectos greenfield donde arrancás de cero. Si ya tenés tu idea clara, podés skipearla.

[CLICK - Slide 9]

---

## SLIDE 9: PRODUCT MANAGER [11:45 - 12:30]

El **Product Manager** se llama John. John es **el que planifica TODO.**

El PM toma tu idea y la convierte en un PRD - Product Requirements Document. Este es el documento más importante del proyecto.

¿Qué hace John?
- Arma PRDs completos con features, user stories, requirements
- Define prioridades - MVP vs roadmap
- Documenta todo

[Señalar artifacts]

**Los artifacts que crea:** PRD (Product Requirements Document), Epics, User Stories, y también Brownfield PRD para proyectos existentes.

El comando principal es `/pm *create-prd`

El PRD es tu contrato. Es lo que guía a todos los demás agentes. Si el PRD está bien hecho, el resto fluye.

John es obligatorio - no podés skipear el PM. Necesitás esos requirements.

[CLICK - Slide 10]

---

## SLIDE 10: ARCHITECT [12:30 - 13:15]

El **Architect** se llama Winston. Winston **diseña toda la arquitectura del sistema.**

Una vez que John terminó el PRD, Winston lo lee y diseña cómo se va a construir técnicamente.

¿Qué hace Winston?
- Diseña arquitectura completa - frontend, backend, base de datos, APIs
- Elige el tech stack - React o Vue, Node o Python, SQL o NoSQL
- Define APIs y contratos entre componentes
- Estructura el código
- Considera escalabilidad, seguridad, performance

[Señalar artifacts]

**Los artifacts que crea:** Full-Stack Architecture, Backend Architecture, Frontend Architecture, y Brownfield Architecture para proyectos existentes que necesitás documentar.

El comando es `/architect *create-full-stack-architecture`

También es obligatorio - sin arquitectura, el Developer va a inventar cosas sobre la marcha.

[CLICK - Slide 11]

---

## SLIDE 11: UX EXPERT [13:15 - 13:50]

La **UX Expert** se llama Sally. Sally es **la diseñadora de experiencia.**

Sally es para apps con UI - si tu app tiene interfaz de usuario, vale la pena usarla.

¿Qué hace Sally?
- Diseño de UX e UI
- Wireframes y prototipos
- User research e interaction design
- Accesibilidad
- Prompts optimizados para V0/Lovable

[Señalar artifacts]

**Los artifacts que crea:** Front-End Spec, UI Design Prompts para v0 y Lovable, Wireframes & Prototypes.

El comando es `/ux-expert *create-front-end-spec`

Sally genera un spec que el Developer sigue, o que vos podés usar para generar UI con herramientas como v0 o Lovable.

[CLICK - Slide 12]

---

## SLIDE 12: SCRUM MASTER [13:50 - 14:30]

El **Scrum Master** se llama Bob. Bob es **especialista en preparación de stories.**

Acá es donde el proyecto pasa de documentos a trabajo ejecutable.

¿Qué hace Bob?
- Crea stories detalladas y accionables
- Define criterios de aceptación claros
- Secuencia las tareas - primero esto, después esto
- Gestión de epics y procesos ágiles

[Señalar artifacts]

**Los artifacts que crea:** User Story Drafts, Tareas Secuenciales, Criterios de Aceptación. Todo lo que el Developer necesita para implementar sin adivinar.

El comando principal es `/sm *draft`

Bob agarra los shards del PO y dice: "Ok Developer, hacé exactamente esto, en este orden, con estos criterios de éxito."

Sin Bob, el Developer se paraliza. Con Bob, tiene una tarjeta clara.

[CLICK - Slide 13]

---

## SLIDE 13: PRODUCT OWNER [14:30 - 15:10]

La **Product Owner** se llama Sarah. Sarah **gestiona el backlog y shardea documentos.**

El sharding es crítico - es cómo resolvemos el problema del contexto largo.

¿Qué hace Sarah?
- Shardea PRD y arquitectura en epics y stories
- Valida story drafts contra requirements
- Gestión de backlog y priorización
- Asegura coherencia story por story

[Señalar artifacts]

**Los artifacts que crea:** Sharded Documents, Epic Files, Story Validations, Backlog Structure. Documentos focalizados en vez de monolitos gigantes.

El comando principal es `/po *shard-doc`

Sarah evita que el contexto explote. En vez de 10,000 tokens de PRD gigante, le da al Developer 500 tokens con exactamente lo que necesita para esta story.

[CLICK - Slide 14]

---

## SLIDE 14: DEVELOPER [15:10 - 15:50]

El **Developer** se llama James. James es **el que codea posta.**

Todo lo anterior era preparación. James es donde la magia sucede.

¿Qué hace James?
- Programa cada feature con todos los tests
- Tests unitarios, de integración y E2E
- Debuggea y refactorea
- Sigue best practices
- Documenta el código

[Señalar artifacts]

**Los artifacts que crea:** Production Code, Unit Tests, Integration Tests, E2E Tests, Code Documentation. Todo lo que necesitás para una feature completa de producción.

El comando principal es `/dev *develop-story`

James recibe la story de Bob, lee la arquitectura de Winston, el spec de Sally si existe, y programa. Genera código que funciona, con tests que pasan.

James es el más usado - vas a estar en el loop: draft → develop → commit.

[CLICK - Slide 15]

---

## SLIDE 15: QA/TEST ARCHITECT [15:50 - 16:35]

El **Test Architect** se llama Quinn. Quinn es **tu asesor de calidad.**

Importante: Quinn NO bloquea. Quinn **asesora**. Ustedes deciden la barra de calidad.

¿Qué hace Quinn?
- Risk profiling - matriz de riesgos
- Test design - estrategia de testing
- Requirements traceability - Given-When-Then
- NFR assessment - seguridad, performance, confiabilidad
- Quality gates - PASS / CONCERNS / FAIL / WAIVED

[Señalar artifacts]

**Los artifacts que crea:** QA Reports, Quality Gate Files, Risk Profiles, Test Designs, Requirements Trace Maps. Documentación profesional de calidad.

El comando es `/qa *review {story}`

Quinn puede entrar antes de desarrollar (análisis de riesgo) o después (code review). Ustedes deciden si seguir con CONCERNS o arreglar primero.

**Y acá está el workflow pedagógico:** Si estás haciendo un TP, usá QA para revisar TU código y aprender de feedback experto.

[CLICK - Slide 16]

---

## SLIDE 16: FASE 1 - PLANNING [16:35 - 17:20]

Ahora veamos cómo se usan estos agentes en la práctica. Hay dos fases: Planning y Development.

**Fase 1: Planning - Diseño completo antes de codear**

Esta fase genera todos los documentos que el equipo necesita. Se hace UNA VEZ al principio del proyecto.

**El workflow core tiene 4 pasos:**

**1. PM: PRD Creation** - Genera requirements completos, epics, stories preliminares.

**2. Architect: System Design** - Diseña arquitectura completa y tech stack.

**3. PO: Master Checklist** - Valida alineación entre PRD y Arquitectura. Si no alinea, se refinan documentos hasta que todo tenga sentido.

**4. PO: Sharding** - Shardea PRD y arquitectura en epics/stories con contexto enfocado.

[Señalar la nota abajo]

**Agentes adicionales según necesidad:** Analyst para proyectos nuevos, UX Expert para apps con UI, QA para áreas de alto riesgo.

Al final de esta fase tenés:
- PRD completo
- Arquitectura definida y **validada contra el PRD**
- Backlog de stories shardeadas y listas para desarrollo

No tocaste una línea de código todavía. Y eso está bien - el planning correcto te ahorra semanas de refactoring después.

[CLICK - Slide 17]

---

## SLIDE 17: FASE 2 - DEVELOPMENT [17:20 - 18:00]

**Fase 2: Development - Implementación iterativa story por story**

Esta fase es un loop. Lo repetís para cada story hasta terminar el proyecto.

**El workflow core tiene 6 pasos:**

**1. SM: Review Previous Notes** - Bob revisa notas de dev/QA de la story anterior para aprender de lo que pasó.

**2. SM: Draft Next Story** - Prepara la siguiente story desde el epic shardeado con tareas secuenciales.

**3. Dev: Implementation** - James programa: código de producción + tests (unit, integration, E2E) + validaciones.

**4. Dev: Ready for Review + Notes** - James marca el trabajo listo para review y documenta notas para la próxima story.

**5. Verify Tests/Linting → COMMIT** - IMPORTANTE: Verificar que todos los tests de regresión y el linting pasen, después hacer COMMIT.

**6. Mark Done & Next Story** - Marcar story como completa y volver al paso 1 para la siguiente.

[Señalar la nota abajo]

**Validación adicional según necesidad:** PO Validate para coherencia con PRD, QA Risk/Review para áreas críticas.

[Abajo - nota iterativa]

Es **iterativo**. Story por story, commit por commit, hasta completar el proyecto.

La ventaja: siempre tenés una versión funcional. Si después de 5 stories querés cambiar el rumbo, podés. No estás comprometido a un plan gigante.

**Y acá está el loop de aprendizaje:** las notas que James deja hoy son las que Bob usa mañana para mejorar el siguiente draft.

[CLICK - Slide 18]

---

## SLIDE 18: QUALITY GATES [18:00 - 18:30]

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

## SLIDE 19: HERRAMIENTAS [18:30 - 19:45]

Bueno, ya entendieron la metodología. ¿Cómo lo usamos en la práctica?

[Grid de herramientas - señalando cada una]

**Entorno**: VS Code en GitHub Codespaces. Nada para instalar localmente, todo en la nube. En 2 minutos tenés todo listo.

**Modelos Gratuitos**: Vamos a usar principalmente code-supernova y Grok Code Fast 1. ¿Por qué? Porque somos 80 estudiantes y este workflow usa muchos tokens. Necesitamos opciones gratuitas para que todos puedan probar sin gastar.

**GitHub Student (Recomendado)**: Si tienen GitHub Student Pack, tienen Copilot Pro gratis, que les da acceso a Sonnet 4.5 - el mejor modelo del benchmark que vimos. Pueden hacer login con GitHub en OpenCode y usar Sonnet directamente.

**Framework**: BMad Method ya viene pre-instalado en el repo. Los prompts de los 8 agentes, toda la estructura, listo para usar.

**MCP Tools**: Playwright y Sequential Thinking - ya vamos a ver qué son.

**Compatibilidad**: BMad son prompts, no software propietario. Funciona en Cursor, Copilot, Claude Code, lo que usen.

[Abajo - setup en 5 pasos]

El setup es simple:

1. Fork del repo
2. Abrir en Codespaces
3. Correr script de setup
4. Ingresar API key
5. Seleccionar modelo

5 pasos, 5 minutos máximo. Después están listos.

[CLICK - Slide 20]

---

## SLIDE 20: MCP TOOLS [19:45 - 20:45]

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

## SLIDE 21: EJEMPLO REAL - BAISH WEBSITE [20:45 - 22:00]

Ahora que vieron toda la metodología, les voy a contar algo interesante.

[Señalar el centro - el ejemplo de baish.com.ar]

**Estamos reconstruyendo nuestra propia web con BMad.** Esto es dogfooding real - usamos la herramienta que les estamos enseñando para mejorar nuestro propio sitio.

Documentación estructurada del proyecto existente, workflow completo, agentes coordinados trabajando en brownfield.

¿Qué pueden construir con BMad?

[Señalar lado izquierdo]

**Greenfield Projects:**
- Hackathon projects - empezás de cero, armás algo funcional en 24-48 horas
- MVP para tu startup - validá tu idea rápido
- Prototipos rápidos - probá conceptos sin commitment
- Aprender nuevo stack - querés aprender React Native? Construí un proyecto real

[Señalar lado derecho]

**Brownfield Projects:**
- Refactors mayores - ese código legacy que nadie quiere tocar
- Nueva feature en app existente - documentás primero, después desarrollás
- Migración de tecnología - de Vue a React, de REST a GraphQL
- Documentar codebase legacy - creá la documentación que nunca existió

El punto clave: BMad no es solo para proyectos nuevos. Es para cualquier proyecto donde quieras trabajar de forma profesional y estructurada.

[CLICK - Slide 22]

---

## SLIDE 22: ¡COMENCEMOS! [22:00 - 24:00]

Bueno, ya hablamos suficiente. Ahora viene la parte divertida: ustedes van a hacerlo.

[Señalar el setup]

El setup es simple, 5 pasos:

1. **Fork del repo** - Van al repo del workshop y le dan fork
2. **Abrirlo en GitHub Codespaces** - Un botón verde que dice "Code" → "Codespaces"
3. **Correr el script de setup** - Un comando en la terminal
4. **Ingresar tu API key** - Si no tenés, les vamos a dar instrucciones para conseguir trial credits. Si tenés GitHub Student, podés usar Copilot Pro con Sonnet.
5. **Seleccionar el modelo** - Eligen entre code-supernova, Grok Code Fast 1, o Sonnet si tienen GitHub Student

Eso es todo. En 5 minutos están listos.

[Señalar el botón CTA]

¡Vamos a armar algo copado!

Esa es la actitud. No "vamos a ver si funciona". No "a ver qué sale".

Vamos a ARMAR algo que FUNCIONA.

[Señalar los logos]

Gracias BAISH y Y-hat por organizar esto. Y gracias a ustedes por venir.

[Pausa, contacto visual con la audiencia]

**Recordatorio final:** Si están haciendo un TP, usen el workflow pedagógico - PM + Architect + SM para entender y planear, CODEAN USTEDES, y QA para revisar su código. Aprendés más y recibís feedback profesional.

Ahora sí - ¿tienen alguna pregunta rápida antes de arrancar con el hands-on?

[Tomar 1-2 preguntas MUY breves si hay, máximo 1 minuto]

Perfecto. Abran sus laptops, busquen el link del repo que está en el chat, y empecemos a construir.

---

## TIMING TOTAL: ~24 minutos de presentación + ~6 min de Q&A/transición = ~30 min total

**Breakdown por sección:**
- Apertura + Slides 1-2: 3:45 min
- Slide 3 (Aprovechar herramienta): 1:15 min
- Slide 4 (LoCoDiff): 1:15 min
- Slide 5 (METR Study): 1:30 min
- Slide 6 (Problema actual): 1:45 min
- Slide 7 (Ciclo desarrollo): 1:45 min (+15 seg por PO Checklist + pasos dev detallados)
- Slides 8-15 (8 agentes individuales): 5:50 min
- Slides 16-18 (Workflow + QA): 2:25 min (+15 seg por paso adicional en planning y dev)
- Slides 19-20 (Tools + MCP): 2:15 min
- Slide 21 (BAISH website ejemplo): 1:15 min
- Slide 22 (Cierre): 2:00 min

**Total: 25:00 min** de presentación + 5:00 min de buffer/Q&A = **30:00 min total**

**Nota sobre timing crítico:**
- Si te atrasás, los agentes opcionales (Analyst, UX Expert) se pueden mencionar más rápido (30 seg cada uno en vez de 45 seg)
- El ejemplo de BAISH website (slide 21) se puede acortar a 45 segundos si es necesario
- Mantené el timing ajustado en la sección de agentes para llegar al hands-on a tiempo

---

## NOTAS PARA EL PRESENTADOR

### Energía y Pacing
- **Arrancar con energía alta** - Hook fuerte en la apertura
- **Bajar un poco en el medio** - Las secciones técnicas (agentes, fases) con ritmo más pausado
- **Subir al final** - Demo y cierre con entusiasmo

### Puntos de énfasis
- El benchmark (Slide 4) - Hacer que entiendan el problema de contexto largo
- **El estudio METR (Slide 5)** - Este es el momento "wow" negativo - AI hace MÁS LENTOS a expertos. Dejar que caiga. Luego el pivot: BMad funciona para greenfield Y brownfield con documentación estructurada.
- **El workflow pedagógico (Slide 3)** - Este es el game changer para estudiantes: PUEDEN usar BMad para TPs saltando el Developer y codeando ellos mismos, con QA review
- Los artifacts (Slides 8-15) - Señalar qué documentos crea cada agente para que entiendan el flujo de información
- Human in the Loop (Slide 7) - Esto no es mágico, vos seguís a cargo
- Quality gates (Slide 18) - No bloquea, asesora
- **Modelos gratuitos (Slide 19)** - Explicar por qué usamos free models (80 estudiantes) pero que GitHub Student da acceso a Sonnet

### Si te quedás sin tiempo
**Cortar en este orden:**
1. Analyst (Slide 8) - Mencionar en 30 seg o skipear
2. UX Expert (Slide 11) - Mencionar en 30 seg
3. MCP Tools (Slide 20) - Solo mencionar que existen y están pre-configurados
4. BAISH website ejemplo (Slide 21) - Acortar a 45 segundos
5. Hacer agentes restantes más rápidos - 30-40 seg cada uno

**Nunca cortar:**
- **El workflow pedagógico para TPs (Slide 3)** - Es clave para estudiantes, les da permiso para usar BMad correctamente
- **El estudio METR (Slide 5)** - Es la justificación de por qué BMad funciona
- El problema y contexto (Slide 6)
- El flujo general (Slide 7) - **Especialmente el PO Checklist y el loop de aprendizaje (SM Review Notes)**
- PM (Slide 9), Architect (Slide 10), Developer (Slide 14), PO (Slide 13) - Los agentes core
- Workflow phases (Slides 16-17) - **Especialmente PO Master Checklist y el paso Verify Tests/Linting → COMMIT**
- **Los artifacts en cada agente** - Señalar brevemente qué crea cada uno, es clave para entender el flujo

### Si te sobra tiempo
- Expander más en el ejemplo de BAISH website - mostrar artifacts reales si están disponibles
- Tomar más preguntas en el medio
- Mostrar ejemplos de PRDs o arquitecturas generadas por los agentes
- Profundizar en el workflow brownfield - cómo documentar un proyecto existente
- Contar más casos de uso específicos (hackathons ganados, MVPs lanzados)

### Manejo de preguntas
- Si hacen una pregunta durante la presentación que vas a cubrir después: "Excelente pregunta, llego a eso en 2 slides"
- Si hacen una pregunta muy técnica: "Buena pregunta para resolver en el hands-on, después lo vemos juntos"
- Si alguien es escéptico: "Entiendo el escepticismo, por eso vamos a hacer el demo - seeing is believing"

### Backup por problemas técnicos
Si hay problemas durante el hands-on setup:
- Tener un ambiente de Codespaces pre-configurado como backup
- Tener API keys de prueba listas para distribuir
- Tener screenshots del proceso de setup
- En último caso: hacer demo en vivo mostrando el proceso completo

No entrar en pánico. La metodología es sólida y el setup es simple - la mayoría podrá hacerlo.

---

## RECURSOS ADICIONALES

### Links útiles (tener a mano)
- Repo del workshop: [URL]
- Docs de BMad: [URL]
- Canal de Discord BAISH: [URL]
- Anthropic API trial: [URL]
- OpenRouter: [URL]

### Respuestas a preguntas frecuentes

**"¿Puedo realmente usar esto para los TPs de la facultad?"**
Sí, pero con el workflow pedagógico: usá PM + Architect + SM para entender y planear, saltá el Developer y CODEA VOS, usá QA para revisar tu código. Así aprendés planificación profesional, implementás vos, y recibís feedback experto.

**"¿Cuánto cuesta?"**
Los modelos gratuitos (code-supernova, Grok Code Fast 1) no cuestan nada. Si tenés GitHub Student Pack, tenés Copilot Pro gratis con acceso a Sonnet 4.5. Si querés usar modelos pagos, proyectos chicos son < $1.

**"¿Funciona con código existente o solo greenfield?"**
Funciona para ambos. Greenfield: construís desde cero. Brownfield: primero documentás el proyecto existente con los agentes (arquitectura, componentes), después los agentes tienen contexto para trabajar.

**"¿Qué lenguajes soporta?"**
Todos los lenguajes mainstream: Python, JavaScript/TypeScript, Go, Rust, Java, etc. Los modelos son polyglot.

**"¿Puedo usar otros modelos además de los que mencionaste?"**
Sí, BMad es agnóstico al modelo. Son prompts, no software propietario. Funciona con Claude, GPT, Gemini, en Cursor, Copilot, Claude Code, etc.

**"¿El código generado es bueno?"**
Con el contexto estructurado de BMad (PRD, arquitectura, stories claras), sí. No es perfecto - siempre vas a revisar. Pero es production-quality en la mayoría de casos.

**"¿Qué es el 'sharding' exactamente?"**
Sharding es partir documentos gigantes en pedacitos enfocados. En vez de darle al Developer un PRD de 10,000 tokens, le das un shard de 500 tokens con exactamente lo que necesita para esta story. Así evitás el problema del contexto largo.

**"¿Esto me va a sacar el trabajo?"**
No. Te va a hacer más productivo. En vez de ser un developer, vas a ser un tech lead que orquesta múltiples proyectos simultáneos y entiende todo el ciclo de desarrollo.

---

**END OF SCRIPT**

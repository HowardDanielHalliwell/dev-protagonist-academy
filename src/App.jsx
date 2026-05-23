import { useState, useEffect, useRef } from "react";

const TF = {
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
};

/* ================================================================
   CURRICULUM — 5 NIVELES COMPLETOS
================================================================ */
const LEVELS = [
  {
    id:"n0", num:"00", title:"Punto de Inicio", sub:"Tu entorno de trabajo profesional",
    color:"#22d3ee", dark:"#22d3ee18", border:"#22d3ee30", glow:"0 0 40px #22d3ee25",
    emoji:"🛠️", locked:false,
    lessons:[
      {id:"n0l1", title:"Los 4 pilares del entorno dev", mins:10, xp:50,
        quiz:{question:"¿Qué herramienta instala y gestiona las librerías externas en Python?",options:["VS Code","pip (Package Installer for Python)","Git","El explorador de archivos"],correct:1,explanation:"pip es el gestor de paquetes de Python. Con 'pip install nombre-libreria' descargas cualquier librería del ecosistema. Es el equivalente de Gradle en Android/Kotlin o npm en JavaScript. Viene incluido con Python 3.4+."},
        sections:[
          {type:"intro",title:"Tu taller de trabajo",body:"Antes de escribir una línea de código necesitas el entorno correcto. Un dev sin entorno es como un carpintero sin taller. Esta lección te da el mapa de qué herramientas necesitas y por qué cada una importa para el trabajo diario."},
          {type:"pillars",title:"Los 4 pilares del entorno dev",note:"Todo proyecto profesional necesita estos cuatro. Sin uno de ellos, tu flujo de trabajo tendrá fricción constante.",items:[{i:"✏️",t:"IDE / Editor",d:"Donde escribes código. VS Code para Python/JS/SQL, Android Studio para Kotlin."},{i:"🐍",t:"Runtime / Python",d:"El intérprete que ejecuta tu código. Sin Python instalado, tus .py son solo texto."},{i:"💻",t:"Terminal",d:"Línea de comandos. 10x más rápida que el explorador para tareas de dev."},{i:"🌿",t:"Git",d:"Control de versiones. Tu máquina del tiempo — cada commit es un punto de retorno garantizado."}]},
          {type:"insight",icon:"💡",body:"Ya tienes Android Studio y experiencia con Kotlin — eso significa que ya entiendes IDE, compilador y gestor de dependencias (Gradle). Python + VS Code siguen el mismo patrón pero más ligero. La transición es inmediata."},
        ]},
      {id:"n0l2", title:"VS Code y extensiones esenciales", mins:15, xp:80,
        quiz:{question:"¿Para qué sirve la extensión Pylance en VS Code?",options:["Para ejecutar Python desde el navegador","Para autocompletado inteligente, detección de errores en tiempo real y navegación de código Python","Para conectar VS Code con GitHub automáticamente","Para formatear el código Python al guardar"],correct:1,explanation:"Pylance es el language server de Microsoft para Python. Agrega autocompletado con tipos, detección de errores en tiempo real, Ir a definición (F12) y soporte completo para type hints. Es la diferencia entre VS Code como editor de texto vs IDE profesional."},
        sections:[
          {type:"intro",title:"VS Code: un editor para todo",body:"VS Code es el editor más usado del mundo (70%+ de devs según Stack Overflow). Funciona para Python, JavaScript, Kotlin, SQL, YAML y más. Las extensiones correctas lo convierten de editor de texto a IDE completo."},
          {type:"code",label:"Instalar extensiones desde terminal",lang:"bash",code:`# Las 5 extensiones esenciales — ejecuta cada línea en la terminal:\ncode --install-extension ms-python.python\ncode --install-extension ms-python.pylance\ncode --install-extension eamodio.gitlens\ncode --install-extension rangav.vscode-thunder-client\ncode --install-extension esbenp.prettier-vscode\n\n# Si 'code' no funciona: VS Code → Ctrl+Shift+P → "Shell Command: Install code in PATH"`},
          {type:"pillars",title:"¿Para qué sirve cada extensión?",note:"Cada una resuelve un problema concreto de tu flujo de trabajo:",items:[{i:"🐍",t:"Python + Pylance",d:"Autocompletado, type checking y debugging inteligente para Python."},{i:"🌿",t:"GitLens",d:"Ve quién cambió qué línea y cuándo, directamente en el editor."},{i:"⚡",t:"Thunder Client",d:"Prueba tus APIs REST desde VS Code sin instalar Postman."}]},
          {type:"exercise",title:"Configura VS Code",prompt:"Instala las 5 extensiones. Luego en Settings (Ctrl+,): activa 'Format On Save' y 'Auto Save: afterDelay'. Verifica que Pylance funciona abriendo un .py y escribiendo 'import' — debe aparecer autocompletado.",hint:"Si 'code' no se reconoce: Ctrl+Shift+P en VS Code → 'Shell Command: Install code in PATH' → reinicia la terminal.",solution:"Settings clave (Ctrl+Shift+P → 'Open User Settings JSON'):\n{\n  \"editor.formatOnSave\": true,\n  \"files.autoSave\": \"afterDelay\",\n  \"python.defaultInterpreterPath\": \"python\"\n}\n\nVerificación Pylance:\nEscribe 'print(' en un .py → debe aparecer la firma de la función automáticamente."},
        ]},
      {id:"n0l3", title:"Python: instalación y primer script", mins:20, xp:100,
        quiz:{question:"¿Cuál es la forma correcta de verificar que Python está instalado en tu sistema?",options:["Buscarlo en el menú de inicio de Windows","Ejecutar 'python --version' en la terminal","Abrir VS Code y esperar que lo detecte","Revisar Panel de Control → Programas"],correct:1,explanation:"'python --version' es la verificación universal. Si devuelve 'Python 3.X.X' estás listo. Si da error, Python no está en el PATH. En Windows: verifica que durante la instalación marcaste 'Add Python to PATH' — sin esa palomita hay que reinstalar."},
        sections:[
          {type:"intro",title:"Python en tu máquina",body:"Descarga Python desde python.org (versión 3.12+ recomendada). En Windows es CRÍTICO marcar 'Add Python to PATH' durante la instalación. Sin ese check, la terminal no encontrará Python y absolutamente nada funcionará desde consola."},
          {type:"code",label:"Verificar e instalar entorno",lang:"bash",code:`# 1. Verificar versión de Python\npython --version\n# Debe mostrar: Python 3.12.x\n\n# 2. Verificar pip (gestor de paquetes)\npip --version\n\n# 3. Primer script sin archivo (inline)\npython -c "print('¡Python funcionando! 🐍')"\n\n# 4. En VS Code: Ctrl+Shift+P → "Python: Select Interpreter"\n# Elige Python 3.12 para que Pylance lo use`},
          {type:"code",label:"Tu primer archivo Python",lang:"python",code:`# mi_perfil.py — ejecuta con: python mi_perfil.py\n\nnombre = "Danny"\nrol = "Maestro y Dev en formación 🚀"\nlenguajes = ["Kotlin", "JavaScript", "Python"]\nmeta = "Construir mi propia IA para Mano Amiga Chalco"\n\nprint("=== Perfil Dev ===")\nprint(f"Nombre: {nombre}")\nprint(f"Rol: {rol}")\nprint(f"Lenguajes: {', '.join(lenguajes)}")\nprint(f"Meta 2026: {meta}")`},
          {type:"exercise",lang:"python",title:"Tu perfil en Python",prompt:"Crea 'mi_perfil.py' con tus datos reales: nombre, rol actual, lenguajes que ya conoces, y tu meta de aprendizaje para este año. Ejecuta desde la terminal.",hint:"Usa variables de tipo string y list. Usa f-strings para print. Ejecuta con 'python mi_perfil.py' desde la carpeta donde guardaste el archivo.",solution:`nombre = "Danny"\nrol = "Maestro en Mano Amiga, Dev en formación"\nlenguajes = ["Kotlin", "JavaScript", "Python"]\nmeta_2026 = "Construir IA con RAG para Mano Amiga Chalco"\n\nprint("=== MI PERFIL DEV ===")\nprint(f"Nombre: {nombre}")\nprint(f"Rol: {rol}")\nprint(f"Lenguajes: {', '.join(lenguajes)}")\nprint(f"Meta 2026: {meta_2026}")`},
        ]},
      {id:"n0l4", title:"Terminal: el segundo lenguaje del dev", mins:20, xp:100,
        quiz:{question:"¿Qué comando lista los archivos y carpetas de la ubicación actual en la terminal?",options:["show","display","ls (Mac/Linux/PowerShell) o dir (Windows cmd)","open"],correct:2,explanation:"'ls' funciona en Mac, Linux y PowerShell de Windows. 'dir' en el cmd clásico. En PowerShell (recomendado en Windows) 'ls' ya funciona. Con 'ls' y 'cd' (cambiar directorio) cubres el 80% de la navegación terminal de un dev."},
        sections:[
          {type:"intro",title:"La terminal lo cambia todo",body:"La terminal parece intimidante al principio. Pero una vez que la dominas, es 10x más rápida que cualquier interfaz gráfica. Instalar dependencias, ejecutar scripts, navegar proyectos — todo en segundos sin tocar el mouse. Es la herramienta que más diferencia a un dev junior de uno senior."},
          {type:"analogy",icon:"🗺️",label:"Terminal vs explorador gráfico",body:"El explorador de archivos es como un mapa turístico — visual e intuitivo para orientarte. La terminal es como un GPS con coordenadas exactas: llegas al destino preciso al instante. Para tareas repetitivas de desarrollo, la terminal siempre gana en velocidad."},
          {type:"code",label:"Los 12 comandos que usarás siempre",lang:"bash",code:`# NAVEGACIÓN\npwd                    # ¿Dónde estoy? (Print Working Directory)\nls                     # ¿Qué hay aquí?\nls -la                 # Todo, incluyendo archivos ocultos\ncd Desktop             # Ir a Desktop\ncd ..                  # Subir un nivel\ncd ~                   # Ir al home del usuario\n\n# CREAR Y MANIPULAR\nmkdir mis-proyectos    # Crear carpeta\nmkdir -p a/b/c         # Crear estructura anidada\ncp archivo.py copia.py # Copiar\nmv viejo.py nuevo.py   # Renombrar / mover\nrm archivo.py          # Eliminar (sin papelera — cuidado)\n\n# PRODUCTIVIDAD\ncode .                 # Abrir VS Code en la carpeta actual\npython script.py       # Ejecutar script`},
          {type:"exercise",title:"Navega como dev",prompt:"Solo con la terminal, sin tocar el explorador gráfico: 1) Ve al Desktop, 2) Crea 'mis-proyectos/nivel-0', 3) Crea 'hola.py' con print('Hola desde terminal'), 4) Ejecuta el script, 5) Lista el contenido para verificar.",hint:"Windows PowerShell: 'mkdir mis-proyectos\\nivel-0' o '-p mis-proyectos/nivel-0'. Para crear el archivo: 'code hola.py' abre VS Code, escríbelo y guarda con Ctrl+S.",solution:`cd ~/Desktop\nmkdir -p mis-proyectos/nivel-0\ncd mis-proyectos/nivel-0\ncode hola.py\n# En VS Code: print("Hola desde terminal") → Ctrl+S\npython hola.py\n# Output: Hola desde terminal\nls\n# Output: hola.py`},
        ]},
      {id:"n0l5", title:"Git: tu primera máquina del tiempo", mins:25, xp:120,
        quiz:{question:"¿Qué hace exactamente 'git add .' en el flujo de trabajo?",options:["Sube los cambios inmediatamente a GitHub","Graba los cambios permanentemente en el historial","Prepara (stagea) todos los archivos modificados para el siguiente commit","Crea automáticamente una nueva rama de trabajo"],correct:2,explanation:"'git add .' lleva los cambios del working directory al staging area — los prepara para commitear. El commit los graba permanentemente. Es intencional que sean dos pasos: primero decides QUÉ incluir, luego lo grabas. Así puedes hacer commits selectivos y con mensaje claro."},
        sections:[
          {type:"intro",title:"Git: control de versiones para todos",body:"Git es usado por el 90% de los proyectos profesionales. No es solo 'guardar' — es experimentar sin miedo, colaborar sin pisarse el trabajo, y tener un historial completo de cada decisión técnica. Sin Git, cualquier proyecto de más de una persona se convierte en caos."},
          {type:"code",label:"Configurar Git por primera vez",lang:"bash",code:`# Verificar instalación (si no está: descargar de git-scm.com)\ngit --version\n\n# Configurar identidad — solo una vez\ngit config --global user.name "Danny"\ngit config --global user.email "tu@email.com"\n\n# Verificar\ngit config --list`},
          {type:"code",label:"Flujo completo: de cero a GitHub",lang:"bash",code:`# 1. Crear repo local\nmkdir mi-primer-repo && cd mi-primer-repo\ngit init\n\n# 2. Primer commit\necho "# Mi primer repo" > README.md\ngit add .                                    # stagear todo\ngit commit -m "feat: agregar README inicial" # grabar\n\n# 3. Subir a GitHub (crear repo VACÍO en GitHub primero)\ngit remote add origin https://github.com/TU_USUARIO/mi-primer-repo.git\ngit push -u origin main\n\n# Flujo diario:\ngit add .\ngit commit -m "feat: descripcion de lo que hice"\ngit push`},
          {type:"insight",icon:"🌿",body:"Mensajes de commit profesionales: 'feat:' (nueva funcionalidad), 'fix:' (corrección de bug), 'docs:' (documentación), 'refactor:' (mejora sin cambio funcional). Con estos prefijos tu historial se lee como un diario del proyecto — cualquier dev lo entiende sin explicación."},
          {type:"exercise",title:"Tu primer repositorio real",prompt:"Crea un repositorio Git con 'mi_perfil.py'. Haz exactamente 3 commits con mensajes descriptivos (usa prefijos feat:/docs:). Sube a GitHub y verifica que el historial muestra los 3 commits.",hint:"Crea el repo en GitHub SIN inicializar (sin README) para evitar conflictos. Usa 'git log --oneline' para ver tus commits antes de subir.",solution:`git init\ngit add mi_perfil.py\ngit commit -m "feat: agregar perfil inicial"\n\n# Modifica el archivo...\ngit add mi_perfil.py\ngit commit -m "feat: agregar lista de lenguajes"\n\n# Terminas el script...\ngit add .\ngit commit -m "feat: completar perfil con meta 2026"\n\ngit log --oneline\ngit remote add origin https://github.com/TU/mi-primer-repo.git\ngit push -u origin main`},
        ]},
      {id:"n0cap", title:"Capstone: Tu Ambiente Configurado", mins:30, xp:150,
        sections:[
          {type:"intro",title:"El punto de partida de todo dev",body:"Un entorno bien configurado te permite enfocarte en resolver problemas en lugar de pelear con herramientas. Este capstone verifica que tienes todo listo — lo que cualquier empresa esperaría antes de tu primer día de trabajo como desarrollador."},
          {type:"capstone",title:"Setup Completo y Primer Proyecto en GitHub",
            description:"Configura tu ambiente de trabajo completo y publica tu primer proyecto en GitHub. Al terminar tendrás un repositorio público que demuestra que tienes el flujo de trabajo profesional configurado.",
            requirements:[
              "VS Code con las 5 extensiones activas: Python, Pylance, GitLens, Thunder Client, Prettier — verifica abriendo un .py y viendo autocompletado de Pylance activo",
              "Python 3.12+ — verificable con 'python --version' en terminal mostrando 3.12.x",
              "Git configurado con tu nombre y email — verificable con 'git config --list' mostrando tus datos",
              "Repositorio GitHub 'dev-protagonista-inicio' con mínimo 3 commits descriptivos usando prefijos feat:/docs:",
              "El repo contiene: mi_perfil.py, README.md con descripción del proyecto, y .gitignore para Python",
            ],
            bonus:"Configura entorno virtual: 'python -m venv .venv', agrégalo al .gitignore (nunca va a Git), crea requirements.txt vacío. Esta es la estructura estándar de cualquier proyecto Python profesional"},
        ]},
    ]
  },
  {
    id:"n1", num:"01", title:"Fundamentos", sub:"Pensamiento computacional puro",
    color:"#00ffaa", dark:"#00ffaa18", border:"#00ffaa30", glow:"0 0 40px #00ffaa25",
    emoji:"🌱", locked:false,
    lessons:[
      {
        id:"n1l1", title:"¿Qué es programar?", mins:15, xp:100,
        quiz:{question:"¿Cuál es el modelo universal de TODA computadora, desde Pong hasta ChatGPT?",options:["Entrada → Salida → Proceso","Proceso → Entrada → Salida","Entrada → Proceso → Salida","Salida → Entrada → Proceso"],correct:2,explanation:"Todo programa en la historia sigue INPUT → PROCESO → OUTPUT. Los datos entran, se transforman, y el resultado sale. Tu Generador de Planeaciones sigue exactamente este modelo."},
        sections:[
          {type:"intro", title:"¿Qué es programar?", body:"Programar es darle instrucciones precisas a una máquina. La máquina es perfectamente obediente — pero absolutamente literal. No interpreta, no adivina, no asume. Hace exactamente lo que le dices, nada más."},
          {type:"analogy", icon:"🍳", label:"Analogía del huevo frito", body:"Si le dices a alguien que nunca ha cocinado 'pon el huevo en el sartén', lo pondrá con cáscara y todo. Necesitas ser específico: rompe el huevo, separa la cáscara, vierte el contenido a 180°C... Eso es exactamente programar."},
          {type:"pillars", title:"Las 3 operaciones de toda computadora", note:"Todo programa en la historia — desde Pong hasta ChatGPT — es una combinación de estas tres:",
            items:[{i:"📥",t:"INPUT",d:"Recibir datos del exterior"},{i:"⚙️",t:"PROCESO",d:"Transformar y decidir"},{i:"📤",t:"OUTPUT",d:"Mostrar o guardar resultado"}]},
          {type:"insight", icon:"🧠", body:"Tu Generador de Planeaciones ya sigue este modelo: INPUT = datos del maestro → PROCESO = prompt a la IA → OUTPUT = PDF. Siempre fuiste programador sin saberlo."},
          {type:"exercise", title:"Piensa en pasos", prompt:"Escribe el algoritmo en español para determinar si un alumno pasó o reprobó. Calificación mínima aprobatoria: 6.", hint:"¿Qué dato necesitas? ¿Qué comparación haces? ¿Qué muestras al final?", solution:"1. Pedir la calificación del alumno\n2. ¿La calificación es ≥ 6?\n   → SÍ: mostrar 'Aprobado ✓'\n   → NO: mostrar 'Reprobado ✗'\n3. Fin"},
        ]
      },
      {
        id:"n1l2", title:"Algoritmos y pseudocódigo", mins:20, xp:120,
        quiz:{question:"¿Qué es un algoritmo?",options:["Un lenguaje de programación especial","Un software para cálculos matemáticos","Una secuencia finita y ordenada de pasos para resolver un problema","Un tipo especial de variable"],correct:2,explanation:"Un algoritmo es la lógica pura, independiente del lenguaje. Puedes escribirlo en pseudocódigo, Python, Kotlin o incluso en papel. El código es solo la traducción del algoritmo a una sintaxis concreta."},
        sections:[
          {type:"intro", title:"Algoritmos", body:"Un algoritmo es una secuencia finita y ordenada de pasos para resolver un problema. No es código todavía — es la lógica pura. Los buenos desarrolladores piensan el algoritmo antes de tocar el teclado."},
          {type:"code", label:"Pseudocódigo — Par o impar", lang:"pseudocódigo", code:`INICIO\n  LEER numero\n  SI numero MOD 2 == 0 ENTONCES\n    MOSTRAR "Es par"\n  SINO\n    MOSTRAR "Es impar"\n  FIN SI\nFIN`},
          {type:"code", label:"Lo mismo en Python real", lang:"python", code:`numero = int(input("Escribe un número: "))\n\nif numero % 2 == 0:\n    print("Es par")\nelse:\n    print("Es impar")`},
          {type:"insight", icon:"💡", body:"¿Ves cómo el pseudocódigo y Python son casi idénticos? Python fue diseñado para ser el lenguaje más cercano al lenguaje humano. Por eso es el mejor punto de partida para aprender."},
          {type:"exercise", title:"El mayor de tres", prompt:"Escribe el algoritmo para encontrar el mayor de tres números A, B y C.", hint:"No puedes comparar los tres a la vez. Necesitas comparaciones parciales, una por una.", solution:"1. Leer A, B y C\n2. Asumir que A es el mayor\n3. ¿B > mayor actual? → SÍ: mayor = B\n4. ¿C > mayor actual? → SÍ: mayor = C\n5. Mostrar el mayor\n6. Fin"},
        ]
      },
      {
        id:"n1l3", title:"Variables y tipos de datos", mins:25, xp:150,
        quiz:{question:"¿Qué tipo de dato usarías para guardar si un alumno está inscrito o no?",options:["int (0 o 1)","string ('si' o 'no')","bool (True/False)","list de estudiantes"],correct:2,explanation:"bool es perfecto para estados binarios: inscrito/no inscrito, aprobado/reprobado, activo/inactivo. Usar int (0/1) o string ('si'/'no') para esto es mala práctica — el lenguaje ya tiene un tipo para eso."},
        sections:[
          {type:"intro", title:"Variables", body:"Una variable es una caja con nombre donde guardas información. El nombre te dice qué hay dentro, y el contenido puede cambiar durante la ejecución. Son la memoria de tu programa."},
          {type:"code", label:"Variables en Python", lang:"python", code:`nombre = "Danny"\nedad = 28\naltura = 1.75\nes_programador = True\n\n# Puedes cambiar su valor en cualquier momento\nedad = 29  # feliz cumpleaños 🎂\nprint(f"Hola, soy {nombre} y tengo {edad} años")`},
          {type:"pillars", title:"Los 4 tipos de datos básicos", note:"Todo dato en programación es uno de estos cuatro:",
            items:[{i:"🔢",t:"int / float",d:"Números enteros y decimales"},{i:"💬",t:"string",d:"Texto entre comillas"},{i:"🔘",t:"bool",d:"True o False únicamente"},{i:"📋",t:"list",d:"Colección de valores"}]},
          {type:"code", label:"Los 4 tipos en acción", lang:"python", code:`entero = 42\ndecimal = 3.14\ntexto = "Hola mundo"\nbool_val = True\nlista = ["Python", "Kotlin", "JS"]\n\nprint(type(entero))   # <class 'int'>\nprint(type(texto))    # <class 'str'>`},
          {type:"exercise", lang:"python", title:"Tu perfil en variables", prompt:"Crea variables para: tu nombre, tu edad, si eres dev, y una lista de tus lenguajes. Luego imprímelas con f-strings.", hint:"Usa los 4 tipos: string, int, bool y list. Las f-strings se escriben f\"texto {variable}\".", solution:`nombre = "Danny"\nedad = 28\nes_dev = True\nlenguajes = ["Kotlin", "JavaScript", "Python"]\n\nprint(f"Nombre: {nombre}")\nprint(f"Edad: {edad}")\nprint(f"¿Es dev?: {es_dev}")\nprint(f"Lenguajes: {lenguajes}")`},
        ]
      },
      {
        id:"n1l4", title:"Estructuras de control", mins:30, xp:180,
        quiz:{question:"¿Cuántas veces se ejecuta el cuerpo de: for i in range(5)?",options:["4 veces (de 1 a 4)","5 veces (de 0 a 4)","6 veces (de 0 a 5)","Depende del sistema operativo"],correct:1,explanation:"range(5) genera la secuencia [0, 1, 2, 3, 4] — exactamente 5 elementos, de 0 a n-1. Esta es una fuente clásica de errores: range(5) NO incluye el 5. Para incluir el 5 necesitas range(6)."},
        sections:[
          {type:"intro", title:"El flujo del código", body:"Por defecto Python ejecuta de arriba hacia abajo. Las estructuras de control te permiten cambiar ese flujo: tomar decisiones con if/else y repetir acciones con bucles. Son el corazón de cualquier programa."},
          {type:"code", label:"if / elif / else", lang:"python", code:`calificacion = 8.5\n\nif calificacion >= 9:\n    print("Excelente 🏆")\nelif calificacion >= 7:\n    print("Bien 👍")\nelif calificacion >= 6:\n    print("Suficiente")\nelse:\n    print("Reprobado ✗")`},
          {type:"code", label:"for — Repetir para cada elemento", lang:"python", code:`lenguajes = ["Python", "Kotlin", "JavaScript"]\n\nfor lenguaje in lenguajes:\n    print(f"Aprendiendo: {lenguaje}")\n\n# Con range() para contar\nfor i in range(5):\n    print(f"Iteración {i}")  # 0, 1, 2, 3, 4`},
          {type:"code", label:"while — Repetir mientras sea verdad", lang:"python", code:`intentos = 0\npassword = ""\n\nwhile password != "python123":\n    password = input("Contraseña: ")\n    intentos += 1\n\nprint(f"Acceso concedido en {intentos} intento(s) ✓")`},
          {type:"exercise", lang:"python", title:"FizzBuzz clásico", prompt:"Imprime números del 1 al 20. Si divisible entre 3 → 'Fizz'. Si entre 5 → 'Buzz'. Si entre ambos → 'FizzBuzz'.", hint:"Usa for con range(1, 21). El operador % da el residuo de una división.", solution:`for i in range(1, 21):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`},
        ]
      },
      {
        id:"n1l5", title:"Funciones", mins:30, xp:200,
        quiz:{question:"¿Qué keyword usa Python para que una función devuelva un valor al código que la llamó?",options:["output","send","give","return"],correct:3,explanation:"'return' termina la ejecución de la función y entrega el valor. Sin return, la función devuelve None implícitamente. En Python no existe 'output' ni 'send' como keywords de retorno."},
        sections:[
          {type:"intro", title:"Funciones — El superpoder del dev", body:"Una función es un bloque de código con nombre que puedes reutilizar cuantas veces quieras. En lugar de repetir el mismo código 10 veces, lo defines una vez y lo llamas 10 veces."},
          {type:"analogy", icon:"🧰", label:"Analogía", body:"Una función es como una herramienta. Un martillo lo fabricas una vez y lo usas en mil clavos. No construyes un martillo nuevo para cada clavo."},
          {type:"code", label:"Tu primera función", lang:"python", code:`def saludar(nombre):\n    mensaje = f"¡Hola, {nombre}! Bienvenido al código."\n    return mensaje\n\nprint(saludar("Danny"))\nprint(saludar("Mano Amiga"))`},
          {type:"code", label:"Función compleja con lógica interna", lang:"python", code:`def evaluar_alumno(nombre, puntos, total):\n    porcentaje = (puntos / total) * 100\n    if porcentaje >= 90: letra = "A"\n    elif porcentaje >= 70: letra = "B"\n    else: letra = "C"\n    return f"{nombre}: {porcentaje:.1f}% — Calificación {letra}"\n\nprint(evaluar_alumno("Danny", 45, 50))\nprint(evaluar_alumno("Ana", 38, 50))`},
          {type:"exercise", lang:"python", title:"Conversor de temperatura", prompt:"Crea la función 'celsius_a_fahrenheit(c)'. Fórmula: F = (C × 9/5) + 32. Pruébala con 0°C, 100°C y 37°C.", hint:"Define la función con un parámetro, aplica la fórmula y retorna el resultado formateado.", solution:`def celsius_a_fahrenheit(c):\n    f = (c * 9/5) + 32\n    return f"{c}°C = {f:.1f}°F"\n\nprint(celsius_a_fahrenheit(0))    # 32.0°F\nprint(celsius_a_fahrenheit(100))  # 212.0°F\nprint(celsius_a_fahrenheit(37))   # 98.6°F`},
        ]
      },
      {
        id:"n1cap", title:"Capstone: Calculadora de Notas", mins:45, xp:300,
        sections:[
          {type:"intro", title:"Tu primer programa completo", body:"Aplica todo lo del Nivel 1: variables, tipos de datos, estructuras de control y funciones. Construirás una calculadora de notas que evalúa el promedio de un alumno y genera un reporte. Es tu primer programa que resuelve un problema real."},
          {type:"capstone", title:"Calculadora de Notas para Mano Amiga",
            description:"Crea un programa completo que reciba las calificaciones de un alumno, calcule su promedio, determine su letra (A/B/C/D) y genere un mini-reporte de evaluación.",
            requirements:[
              "Función obtener_promedio(calificaciones: list) → float que calcule el promedio de la lista",
              "Función letra_calificacion(promedio: float) → str que asigne: A (≥90), B (≥80), C (≥70), D (<70)",
              "Función generar_reporte(nombre, calificaciones) que use las dos funciones anteriores y retorne un string formateado",
              "Programa principal que pida el nombre del alumno y 3 calificaciones al usuario con input()",
              "El reporte debe mostrar: nombre, lista de calificaciones, promedio con 1 decimal y letra",
            ],
            bonus:"Agrega manejo de errores con try/except para que el programa no falle si el usuario escribe texto en lugar de números"},
        ]
      },
    ]
  },
  {
    id:"n2", num:"02", title:"Constructor", sub:"Python + JS + Kotlin en paralelo",
    color:"#38bdf8", dark:"#38bdf818", border:"#38bdf830", glow:"0 0 40px #38bdf825",
    emoji:"🔧", locked:true,
    lessons:[
      {id:"n2l1", title:"Python: entorno y ecosistema", mins:20, xp:120,
        quiz:{question:"¿Por qué se recomienda usar un entorno virtual (venv) en Python?",options:["Para hacer el código más rápido","Para aislar las dependencias de cada proyecto y evitar conflictos de versiones","Para proteger el código de copias no autorizadas","Para activar la sintaxis avanzada de Python 3"],correct:1,explanation:"Sin venv, todas tus apps comparten las mismas versiones de librerías. Si proyecto A necesita requests==2.x y proyecto B necesita requests==3.x, habrá un conflicto irresolvable. Cada proyecto en su propio entorno virtual."},
        sections:[
        {type:"intro", title:"El entorno Python", body:"Antes de escribir código necesitas configurar tu entorno. Aquí aprenderás pip, entornos virtuales y cómo estructurar un proyecto Python profesional."},
        {type:"code", label:"Configurar entorno virtual", lang:"bash", code:`# Crear entorno virtual\npython -m venv mi_entorno\n\n# Activar (Mac/Linux)\nsource mi_entorno/bin/activate\n\n# Activar (Windows)\nmi_entorno\\Scripts\\activate\n\n# Instalar librerías\npip install requests pandas`},
        {type:"exercise", title:"Tu primer entorno", prompt:"Crea un entorno virtual, instala la librería 'requests' y verifica que esté instalada con pip list.", hint:"Sigue los pasos del bloque de código. En Windows usa el comando de Windows.", solution:"python -m venv env\nsource env/bin/activate\npip install requests\npip list"},
      ]},
      {id:"n2l2", title:"Listas, diccionarios y sets", mins:25, xp:140,
        quiz:{question:"¿Qué estructura de datos Python usarías para guardar el nombre y teléfono de un contacto como par clave-valor?",options:["list","tuple","set","dict (diccionario)"],correct:3,explanation:"Los diccionarios almacenan pares {clave: valor} y permiten acceso directo por nombre: contacto['telefono']. Son perfectos para representar objetos del mundo real como un alumno, una configuración, o un registro de base de datos."},
        sections:[
        {type:"intro", title:"Estructuras de datos en Python", body:"Python tiene estructuras de datos poderosas integradas. Las listas, diccionarios y sets son las más importantes y las usarás en absolutamente todo proyecto."},
        {type:"code", label:"Listas — Colecciones ordenadas", lang:"python", code:`frutas = ["mango", "papaya", "guayaba"]\nfrutas.append("tamarindo")\nfrutas.remove("papaya")\nprint(frutas[0])  # mango\nprint(len(frutas))  # 3`},
        {type:"code", label:"Diccionarios — Clave: Valor", lang:"python", code:`alumno = {\n    "nombre": "Danny",\n    "calificacion": 9.5,\n    "aprobado": True\n}\nprint(alumno["nombre"])  # Danny\nalumno["calificacion"] = 10  # actualizar`},
        {type:"exercise", lang:"python", title:"Agenda de contactos", prompt:"Crea un diccionario con 3 contactos donde la clave es el nombre y el valor es el número. Agrega uno nuevo, elimina uno existente e imprime todos.", hint:"usa dict.update() para agregar y del dict[key] para eliminar.", solution:`contactos = {"Ana": "555-1234", "Luis": "555-5678", "María": "555-9012"}\ncontactos["Danny"] = "555-0000"\ndel contactos["Luis"]\nfor nombre, tel in contactos.items():\n    print(f"{nombre}: {tel}")`},
      ]},
      {id:"n2l3", title:"POO — Clases y objetos", mins:35, xp:200,
        quiz:{question:"¿Qué hace el método __init__ en una clase Python?",options:["Se ejecuta cuando imprimes el objeto con print()","Destruye el objeto y libera la memoria","Inicializa el objeto y sus atributos en el momento de crearlo","Conecta automáticamente la clase a la base de datos"],correct:2,explanation:"__init__ es el constructor. Se llama automáticamente al crear una instancia: Alumno('Danny', '3ro'). Ahí defines self.nombre, self.calificaciones, etc. Sin __init__, el objeto no tendrá atributos propios."},
        sections:[
        {type:"intro", title:"Programación Orientada a Objetos", body:"La POO es una forma de organizar tu código modelando el mundo real. Un objeto tiene atributos (datos) y métodos (acciones). Todo en Python es un objeto."},
        {type:"code", label:"Tu primera clase", lang:"python", code:`class Alumno:\n    def __init__(self, nombre, grado):\n        self.nombre = nombre\n        self.grado = grado\n        self.calificaciones = []\n    \n    def agregar_cal(self, cal):\n        self.calificaciones.append(cal)\n    \n    def promedio(self):\n        return sum(self.calificaciones) / len(self.calificaciones)\n\ndanny = Alumno("Danny", "3ro")\ndanny.agregar_cal(9)\ndanny.agregar_cal(8.5)\nprint(danny.promedio())  # 8.75`},
        {type:"exercise", lang:"python", title:"Clase Libro", prompt:"Crea una clase 'Libro' con título, autor y páginas. Agrega un método 'resumen()' que retorne una descripción del libro.", hint:"Usa __init__ para los atributos y def para el método.", solution:`class Libro:\n    def __init__(self, titulo, autor, paginas):\n        self.titulo = titulo\n        self.autor = autor\n        self.paginas = paginas\n    \n    def resumen(self):\n        return f"'{self.titulo}' de {self.autor} ({self.paginas} páginas)"\n\nlibro = Libro("El Principito", "Saint-Exupéry", 96)\nprint(libro.resumen())`},
      ]},
      {id:"n2l4", title:"Manejo de errores y archivos", mins:25, xp:160,
        quiz:{question:"¿Qué bloque captura y maneja errores en tiempo de ejecución en Python?",options:["if/else","try/except","check/handle","catch/throw"],correct:1,explanation:"Python usa try/except (no 'catch' como Java o Kotlin). Puedes capturar tipos específicos como ZeroDivisionError, FileNotFoundError, o el genérico Exception. El bloque 'finally' se ejecuta siempre, con o sin error."},
        sections:[
        {type:"intro", title:"Errores: bienvenido al mundo real", body:"Todo programa que interactúa con el mundo real puede fallar. Archivos que no existen, entradas inválidas, conexiones caídas. El manejo de errores convierte código frágil en código robusto."},
        {type:"code", label:"try / except", lang:"python", code:`def dividir(a, b):\n    try:\n        resultado = a / b\n        return resultado\n    except ZeroDivisionError:\n        return "Error: no puedes dividir entre cero"\n    except TypeError:\n        return "Error: ambos valores deben ser números"\n\nprint(dividir(10, 2))   # 5.0\nprint(dividir(10, 0))   # Error: no puedes dividir entre cero`},
        {type:"code", label:"Leer y escribir archivos", lang:"python", code:`# Escribir archivo\nwith open("notas.txt", "w") as f:\n    f.write("Lección 1: completada\\n")\n    f.write("Lección 2: completada\\n")\n\n# Leer archivo\nwith open("notas.txt", "r") as f:\n    contenido = f.read()\n    print(contenido)`},
        {type:"exercise", title:"Lector de JSON", prompt:"Escribe una función que lea un archivo JSON y retorne su contenido como diccionario. Si el archivo no existe, que retorne un diccionario vacío.", hint:"Usa json.load() dentro de un try/except FileNotFoundError.", solution:`import json\n\ndef leer_json(ruta):\n    try:\n        with open(ruta, "r") as f:\n            return json.load(f)\n    except FileNotFoundError:\n        return {}\n\ndatos = leer_json("config.json")\nprint(datos)`},
      ]},
      {id:"n2l5", title:"JS paralelo: DOM y eventos", mins:25, xp:150,
        quiz:{question:"¿Cuál es la diferencia principal entre 'const' y 'let' en JavaScript?",options:["const es más lento que let","const no puede reasignarse tras su declaración; let sí puede","let solo funciona dentro de funciones","No hay diferencia, son completamente intercambiables"],correct:1,explanation:"const significa que la referencia es constante: no puedes hacer 'const x = 1; x = 2'. Pero si const apunta a un objeto o array, puedes modificar su contenido interno. Por defecto usa const, cambia a let solo cuando necesites reasignar."},
        sections:[
        {type:"intro", title:"JavaScript en el navegador", body:"JavaScript es Python para el navegador. Los conceptos son los mismos — variables, funciones, condicionales — pero con una responsabilidad extra: manipular la página web en tiempo real."},
        {type:"code", label:"Variables y funciones en JS", lang:"javascript", code:`// Los mismos conceptos, diferente sintaxis\nconst nombre = "Danny"  // como nombre = "Danny" en Python\nlet edad = 28           // variable que puede cambiar\n\nfunction saludar(nombre) {\n    return \`¡Hola, \${nombre}!\`\n}\n\nconsole.log(saludar(nombre))`},
        {type:"code", label:"Manipular el DOM", lang:"javascript", code:`// Seleccionar elementos HTML\nconst titulo = document.getElementById("titulo")\nconst boton = document.querySelector(".btn")\n\n// Cambiar contenido\ntitulo.textContent = "¡Hola desde JavaScript!"\n\n// Responder a eventos\nboton.addEventListener("click", () => {\n    titulo.style.color = "blue"\n})`},
        {type:"exercise", lang:"javascript", title:"Contador de clics", prompt:"Crea una variable 'clics = 0' y una función que la incremente cada vez que se llame. Después de 5 clics, imprime '¡Récord!'", hint:"Usa una variable global, una función que la incremente y un if para verificar el límite.", solution:`let clics = 0\n\nfunction registrarClic() {\n    clics++\n    console.log(\`Clics: \${clics}\`)\n    if (clics >= 5) {\n        console.log("¡Récord!")\n    }\n}`},
      ]},
      {id:"n2l6", title:"Kotlin paralelo: lo que ya sabes", mins:20, xp:130,
        quiz:{question:"¿Qué genera automáticamente una data class en Kotlin que una clase normal no tiene?",options:["Un constructor primario con parámetros","equals(), hashCode(), toString() y copy() listos para usar","Un método main() para ejecutar la clase","Integración automática con Jetpack Compose"],correct:1,explanation:"Las data classes generan: equals (comparar por valor, no por referencia), hashCode, toString (impresión legible), y copy (clonar con cambios). En Java/Python normal escribirías todo eso a mano. Data class = toda la boilerplate gratis."},
        sections:[
        {type:"intro", title:"Kotlin con fundamentos sólidos", body:"Ya has construido apps en Kotlin. Ahora vamos a ver el mismo código que escribiste pero entendiendo por qué funciona — corrutinas, data classes y el sistema de tipos de Kotlin."},
        {type:"code", label:"Data classes — POO simplificada", lang:"kotlin", code:`// En lugar de una clase con getters/setters...\ndata class Alumno(\n    val nombre: String,\n    val grado: String,\n    val calificacion: Double\n)\n\n// Kotlin genera automáticamente: equals, hashCode, toString, copy\nval danny = Alumno("Danny", "3ro", 9.5)\nval copia = danny.copy(calificacion = 10.0)\nprintln(danny)  // Alumno(nombre=Danny, grado=3ro, calificacion=9.5)`},
        {type:"code", label:"Corrutinas — Asincronía sin dolor", lang:"kotlin", code:`import kotlinx.coroutines.*\n\nsuspend fun obtenerDatos(): String {\n    delay(1000)  // simula llamada a API\n    return "Datos recibidos"\n}\n\nfun main() = runBlocking {\n    println("Pidiendo datos...")\n    val resultado = obtenerDatos()  // no bloquea el hilo\n    println(resultado)\n}`},
        {type:"exercise", title:"Refactorizar con data class", prompt:"Toma esta clase Java-style en Kotlin y conviértela a data class: class Producto(var nombre: String, var precio: Double, var stock: Int). Crea 2 instancias y una copia con precio diferente.", hint:"Con data class solo necesitas el constructor. Kotlin genera todo lo demás automáticamente.", solution:`data class Producto(\n    val nombre: String,\n    val precio: Double,\n    val stock: Int\n)\n\nval pan = Producto("Pan", 15.0, 100)\nval leche = Producto("Leche", 25.0, 50)\nval panOferta = pan.copy(precio = 12.0)\n\nprintln(pan)\nprintln(panOferta)`},
      ]},
      {
        id:"n2cap", title:"Capstone: Sistema de Biblioteca", mins:60, xp:450,
        sections:[
          {type:"intro", title:"POO + archivos + errores en un sistema real", body:"Integra todo el Nivel 2: POO, estructuras de datos, manejo de errores y persistencia en archivos. Construirás un sistema de biblioteca que recuerda su estado entre sesiones gracias a JSON."},
          {type:"capstone", title:"Sistema de Biblioteca Digital",
            description:"Crea un sistema de gestión de biblioteca con una clase Biblioteca que maneje libros y usuarios. Los datos deben persistir en un archivo JSON entre sesiones del programa.",
            requirements:[
              "Clase Libro con: titulo, autor, isbn, disponible (bool). Implementar __repr__ para mostrarla limpia.",
              "Clase Biblioteca con lista de libros y métodos: agregar_libro(), prestar(isbn, usuario), devolver(isbn), buscar(titulo)",
              "Persistencia completa: guardar() escribe a biblioteca.json, cargar() lee al iniciar — con try/except FileNotFoundError",
              "Función menu() con interfaz de texto: loop con opciones numeradas hasta que el usuario elija Salir",
              "Manejo de errores para: ISBN no encontrado, libro no disponible, archivo inexistente al iniciar",
            ],
            bonus:"Agrega historial de préstamos con fecha usando datetime: cada préstamo guarda quién lo tomó y cuándo"},
        ]
      },
    ]
  },
  {
    id:"n3", num:"03", title:"Desarrollador", sub:"Algoritmos, datos y arquitectura",
    color:"#fb923c", dark:"#fb923c18", border:"#fb923c30", glow:"0 0 40px #fb923c25",
    emoji:"⚙️", locked:true,
    lessons:[
      {id:"n3l1", title:"Estructuras de datos avanzadas", mins:40, xp:250,
        quiz:{question:"¿Cuál es la diferencia entre una Pila (Stack) y una Cola (Queue)?",options:["La pila es más rápida que la cola","Pila=LIFO (último en entrar, primero en salir); Cola=FIFO (primero en entrar, primero en salir)","Cola=LIFO; Pila=FIFO","No hay diferencia práctica, son equivalentes"],correct:1,explanation:"Stack (LIFO): el historial del navegador — el último que pusiste es el que deshaces primero. Queue (FIFO): la cola de impresión — el primero en llegar es el primero en imprimirse. Elegir la estructura correcta puede simplificar tu código enormemente."},
        sections:[
        {type:"intro", title:"Más allá de las listas", body:"Pilas, colas, árboles y grafos no son abstracciones académicas — son las herramientas que resuelven problemas que las listas simples no pueden. Un senior las elige correctamente."},
        {type:"code", label:"Pila (Stack) — LIFO", lang:"python", code:`# La pila: el último en entrar, primero en salir\nclass Pila:\n    def __init__(self):\n        self.items = []\n    def push(self, item): self.items.append(item)\n    def pop(self): return self.items.pop()\n    def peek(self): return self.items[-1]\n    def vacia(self): return len(self.items) == 0\n\nhistorial = Pila()\nhistorial.push("página 1")\nhistorial.push("página 2")\nprint(historial.pop())  # "página 2" — como el botón atrás del navegador`},
        {type:"exercise", lang:"python", title:"Cola de impresión", prompt:"Implementa una Cola (FIFO) para gestionar trabajos de impresión. Debe tener: agregar_trabajo(), imprimir_siguiente() y trabajos_pendientes().", hint:"FIFO = First In First Out. El primero en entrar es el primero en salir. Usa pop(0) para sacar el primero.", solution:`class ColaImpresion:\n    def __init__(self):\n        self.trabajos = []\n    \n    def agregar_trabajo(self, doc):\n        self.trabajos.append(doc)\n        print(f"'{doc}' agregado a la cola")\n    \n    def imprimir_siguiente(self):\n        if self.trabajos:\n            doc = self.trabajos.pop(0)\n            print(f"Imprimiendo: '{doc}'")\n        else:\n            print("Cola vacía")\n    \n    def trabajos_pendientes(self):\n        return len(self.trabajos)`},
      ]},
      {id:"n3l2", title:"Algoritmos de búsqueda y ordenamiento", mins:45, xp:280,
        quiz:{question:"¿Por qué Binary Search es O(log n) y no O(n) como la búsqueda lineal?",options:["Porque usa hardware especializado","Porque solo funciona con listas de menos de 1000 elementos","Porque descarta la mitad de los elementos en cada paso, reduciendo el espacio exponencialmente","Porque procesa varios elementos a la vez en paralelo"],correct:2,explanation:"En cada paso, Binary Search descarta la mitad de los elementos restantes. Con 1,000,000 de datos: necesita solo ~20 comparaciones (log2(1,000,000) ≈ 20). Una búsqueda lineal necesitaría hasta 1,000,000. Por eso los seniors eligen el algoritmo correcto."},
        sections:[
        {type:"intro", title:"Complejidad algorítmica", body:"No todos los algoritmos son iguales. Un algoritmo O(n²) con 1 millón de datos tarda años. Uno O(log n) tarda millisegundos. Entender complejidad es lo que te hace pensar como senior."},
        {type:"code", label:"Binary Search — O(log n)", lang:"python", code:`def binary_search(lista, objetivo):\n    izq, der = 0, len(lista) - 1\n    while izq <= der:\n        mid = (izq + der) // 2\n        if lista[mid] == objetivo:\n            return mid\n        elif lista[mid] < objetivo:\n            izq = mid + 1\n        else:\n            der = mid - 1\n    return -1\n\nnumeros = [1, 3, 5, 7, 9, 11, 13, 15]\nprint(binary_search(numeros, 7))  # índice 3`},
        {type:"exercise", lang:"python", title:"Implementa Bubble Sort", prompt:"Implementa el algoritmo Bubble Sort que ordene una lista de números de menor a mayor. Luego analiza: ¿cuál es su complejidad O()?", hint:"Compara pares adyacentes y los intercambia si están en el orden incorrecto. Repite hasta que no haya intercambios.", solution:`def bubble_sort(lista):\n    n = len(lista)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if lista[j] > lista[j+1]:\n                lista[j], lista[j+1] = lista[j+1], lista[j]\n    return lista\n\n# Complejidad: O(n²) — no ideal para listas grandes\nnumeros = [64, 34, 25, 12, 22, 11, 90]\nprint(bubble_sort(numeros))`},
      ]},
      {id:"n3l3", title:"SQL y bases de datos relacionales", mins:40, xp:250,
        quiz:{question:"¿Qué hace la cláusula WHERE en una consulta SQL?",options:["Ordena los resultados de mayor a menor","Agrupa filas que tienen el mismo valor","Filtra filas que cumplen una condición específica","Limita el número de columnas que se muestran"],correct:2,explanation:"WHERE filtra filas: 'WHERE calificacion >= 9' solo devuelve alumnos con 9 o más. Sin WHERE, obtienes TODAS las filas. Es el equivalente del 'if' de programación aplicado a millones de registros de una base de datos."},
        sections:[
        {type:"intro", title:"El lenguaje de los datos", body:"SQL es el lenguaje que hablan todas las bases de datos relacionales. Postgres, MySQL, SQLite — todos entienden SQL. Dominarlo es no-negociable para cualquier desarrollador backend."},
        {type:"code", label:"SQL fundamental", lang:"sql", code:`-- Crear tabla\nCREATE TABLE alumnos (\n    id SERIAL PRIMARY KEY,\n    nombre VARCHAR(100) NOT NULL,\n    grado VARCHAR(10),\n    calificacion DECIMAL(4,2)\n);\n\n-- Insertar datos\nINSERT INTO alumnos (nombre, grado, calificacion)\nVALUES ('Danny', '3ro', 9.5), ('Ana', '2do', 8.0);\n\n-- Consultar\nSELECT nombre, calificacion\nFROM alumnos\nWHERE calificacion >= 9\nORDER BY calificacion DESC;`},
        {type:"exercise", title:"Base de datos de cursos", prompt:"Diseña las tablas SQL para un sistema de cursos: maestros, cursos y alumnos inscritos. Escribe las CREATE TABLE y 2 consultas útiles.", hint:"Piensa en las relaciones: un maestro tiene muchos cursos, un alumno puede estar en muchos cursos (relación N:M).", solution:`CREATE TABLE maestros (\n    id SERIAL PRIMARY KEY,\n    nombre VARCHAR(100)\n);\nCREATE TABLE cursos (\n    id SERIAL PRIMARY KEY,\n    nombre VARCHAR(100),\n    maestro_id INT REFERENCES maestros(id)\n);\nCREATE TABLE inscripciones (\n    alumno_id INT,\n    curso_id INT,\n    PRIMARY KEY (alumno_id, curso_id)\n);\n\n-- Cursos por maestro:\nSELECT m.nombre, COUNT(c.id) as total_cursos\nFROM maestros m JOIN cursos c ON m.id = c.maestro_id\nGROUP BY m.nombre;`},
      ]},
      {id:"n3l4", title:"APIs REST desde cero", mins:35, xp:220,
        quiz:{question:"¿Qué verbo HTTP se usa para CREAR un nuevo recurso en una API REST?",options:["GET","PUT","POST","DELETE"],correct:2,explanation:"POST crea nuevos recursos (agrega datos al servidor). GET lee sin modificar. PUT/PATCH actualiza existentes. DELETE elimina. Esta convención REST es la base de las APIs que usan Google, Anthropic, Stripe — todos los servicios modernos."},
        sections:[
        {type:"intro", title:"APIs: el idioma del internet", body:"Una API REST es la forma en que las aplicaciones se comunican entre sí. Tu Generador de Planeaciones usa APIs. WhatsApp usa APIs. Cualquier app moderna usa APIs. Aquí aprendes a crearlas."},
        {type:"code", label:"API REST con FastAPI", lang:"python", code:`from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Alumno(BaseModel):\n    nombre: str\n    calificacion: float\n\nalumnos_db = []\n\n@app.get("/alumnos")\ndef obtener_alumnos():\n    return alumnos_db\n\n@app.post("/alumnos")\ndef crear_alumno(alumno: Alumno):\n    alumnos_db.append(alumno)\n    return {"mensaje": "Alumno creado", "alumno": alumno}`},
        {type:"exercise", title:"API de tareas", prompt:"Crea una API REST básica para gestionar tareas con FastAPI. Endpoints: GET /tareas, POST /tareas, DELETE /tareas/{id}.", hint:"Modela la tarea con Pydantic (id, titulo, completada). Usa una lista en memoria como base de datos temporal.", solution:`from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Tarea(BaseModel):\n    titulo: str\n    completada: bool = False\n\ntareas = []\ncounter = 0\n\n@app.get("/tareas")\ndef listar(): return tareas\n\n@app.post("/tareas")\ndef crear(tarea: Tarea):\n    global counter\n    counter += 1\n    nueva = {"id": counter, **tarea.dict()}\n    tareas.append(nueva)\n    return nueva\n\n@app.delete("/tareas/{id}")\ndef eliminar(id: int):\n    for t in tareas:\n        if t["id"] == id:\n            tareas.remove(t)\n            return {"ok": True}\n    raise HTTPException(404, "No encontrada")`},
      ]},
      {id:"n3l5", title:"Git avanzado", mins:30, xp:180,
        quiz:{question:"¿Para qué se usa 'git rebase' en lugar de 'git merge'?",options:["Para fusionar ramas con historial lineal y limpio, sin commits de merge extra","Para deshacer el ultimo commit local","Para sincronizar tu fork con el repositorio original","Para crear una nueva rama desde el estado actual"],correct:0,explanation:"Rebase reescribe tu historial poniendo tus commits encima de la rama base, resultando en un historial lineal sin commits de merge. Regla de oro: merge para ramas compartidas con el equipo, rebase para tus ramas personales antes de hacer PR."},
        sections:[
        {type:"intro", title:"Git: la máquina del tiempo del dev", body:"Git no es solo 'guardar cambios'. Es una herramienta de colaboración, de experimentación segura y de documentación del pensamiento. Usarlo bien te hace un desarrollador serio."},
        {type:"code", label:"Flujo Git profesional", lang:"bash", code:`# Crear rama para nueva feature\ngit checkout -b feature/sistema-calificaciones\n\n# Commits atómicos con mensajes claros\ngit add src/calificaciones.py\ngit commit -m "feat: agregar cálculo de promedio ponderado"\n\n# Actualizar con main antes de hacer merge\ngit fetch origin\ngit rebase origin/main\n\n# Merge sin conflictos\ngit checkout main\ngit merge --no-ff feature/sistema-calificaciones`},
        {type:"exercise", title:"Gitflow en práctica", prompt:"Describe paso a paso cómo usarías Git para agregar una nueva función a tu Generador de Planeaciones sin romper la versión en producción.", hint:"Piensa en ramas: main (producción), develop (desarrollo), feature/* (funciones nuevas).", solution:"1. git checkout develop\n2. git checkout -b feature/nueva-funcion\n3. [desarrollar y hacer commits frecuentes]\n4. git checkout develop\n5. git merge --no-ff feature/nueva-funcion\n6. [probar en staging]\n7. git checkout main\n8. git merge develop\n9. git tag v1.1.0"},
      ]},
      {id:"n3l6", title:"Testing y TDD", mins:35, xp:200,
        quiz:{question:"¿En qué orden se trabaja en TDD (Test Driven Development)?",options:["Código → Test → Refactorización","Test (falla) → Código mínimo que lo pasa → Refactorización","Test → Refactorización → Código","Diseño → Test → Código → Documentación"],correct:1,explanation:"El ciclo TDD es: Rojo (escribe un test que falla porque aún no hay código) → Verde (escribe el mínimo código para pasar el test) → Refactoriza. Esto garantiza que cada línea de código tiene una razón de ser y está cubierta por un test."},
        sections:[
        {type:"intro", title:"Código que se prueba a sí mismo", body:"El testing no es opcional — es lo que separa código amateur de código profesional. TDD (Test Driven Development) es escribir la prueba antes que el código. Suena raro, funciona increíble."},
        {type:"code", label:"Unit tests con pytest", lang:"python", code:`# calculadora.py\ndef sumar(a, b): return a + b\ndef dividir(a, b):\n    if b == 0: raise ValueError("No puedes dividir entre 0")\n    return a / b\n\n# test_calculadora.py\nimport pytest\nfrom calculadora import sumar, dividir\n\ndef test_sumar_positivos():\n    assert sumar(2, 3) == 5\n\ndef test_sumar_negativos():\n    assert sumar(-1, -1) == -2\n\ndef test_dividir_entre_cero():\n    with pytest.raises(ValueError):\n        dividir(10, 0)\n\n# Ejecutar: pytest test_calculadora.py`},
        {type:"exercise", title:"Tests para tu conversor", prompt:"Escribe al menos 4 pruebas pytest para la función celsius_a_fahrenheit que creaste en el Nivel 1.", hint:"Prueba casos normales (0°C, 100°C), extremos (-273°C que es el cero absoluto) y que el tipo de retorno sea correcto.", solution:`import pytest\n\ndef celsius_a_fahrenheit(c):\n    return (c * 9/5) + 32\n\ndef test_cero_grados():\n    assert celsius_a_fahrenheit(0) == 32.0\n\ndef test_ebullicion():\n    assert celsius_a_fahrenheit(100) == 212.0\n\ndef test_temperatura_corporal():\n    assert celsius_a_fahrenheit(37) == pytest.approx(98.6, 0.1)\n\ndef test_cero_absoluto():\n    assert celsius_a_fahrenheit(-273.15) == pytest.approx(-459.67, 0.1)`},
      ]},
      {id:"n3l7", title:"Clean Code y SOLID", mins:40, xp:250,
        quiz:{question:"¿Qué significa la 'S' en los principios SOLID?",options:["Security First (seguridad ante todo)","Single Responsibility — cada clase debe tener una sola razon para cambiar","Stateless Design (diseño sin estado)","Separation of Concerns (separacion de responsabilidades)"],correct:1,explanation:"Single Responsibility Principle: si tu clase Alumno maneja datos Y envía emails Y genera PDFs, viola SRP. Cuando cambia el formato del email, tienes que tocar la clase Alumno — eso no tiene sentido. Una clase, una responsabilidad, una razón para cambiar."},
        sections:[
        {type:"intro", title:"Código que otros pueden leer", body:"Un programa que funciona pero nadie puede leer es una deuda técnica. Clean Code es el arte de escribir código que se explica solo. SOLID son los 5 principios que hacen tu arquitectura resistente al tiempo."},
        {type:"code", label:"Antes y después — Clean Code", lang:"python", code:`# ❌ Código sucio\ndef f(x, y, z):\n    r = []\n    for i in range(len(x)):\n        if x[i] >= y: r.append(x[i])\n    return r[:z]\n\n# ✅ Clean Code\ndef filtrar_calificaciones_aprobatorias(\n    calificaciones: list[float],\n    minimo_aprobatorio: float,\n    limite: int\n) -> list[float]:\n    aprobadas = [c for c in calificaciones if c >= minimo_aprobatorio]\n    return aprobadas[:limite]`},
        {type:"exercise", lang:"python", title:"Refactoriza este código", prompt:"Refactoriza esta función: def p(d): return [x*2 for x in d if x>0 and x<100]. Dale nombre descriptivo, type hints, y un docstring.", hint:"Pregúntate: ¿qué hace esta función? ¿Qué significa cada parte? Nómbralo según lo que hace.", solution:`def duplicar_valores_validos(datos: list[float]) -> list[float]:\n    """\n    Duplica los valores de la lista que estén\n    en el rango válido (0 < valor < 100).\n    \n    Args:\n        datos: Lista de números a procesar\n    Returns:\n        Lista con los valores válidos duplicados\n    """\n    return [x * 2 for x in datos if 0 < x < 100]`},
      ]},
      {
        id:"n3cap", title:"Capstone: API REST con Tests", mins:75, xp:600,
        sections:[
          {type:"intro", title:"Backend profesional completo", body:"Integra algoritmos eficientes, SQL, APIs REST, Git profesional y testing. Construirás una API escolar con base de datos, pruebas automatizadas y stack dockerizado. Esto es lo que se espera de un desarrollador en un trabajo real."},
          {type:"capstone", title:"API Escolar con FastAPI + PostgreSQL + Tests",
            description:"Construye una API REST completa para gestionar alumnos y calificaciones. Debe seguir principios de Clean Code, tener tests con pytest y estar dockerizada para correr en cualquier servidor.",
            requirements:[
              "Endpoints REST: GET/POST /alumnos, GET/POST /calificaciones, GET /alumnos/{id}/promedio",
              "Base de datos PostgreSQL con las tablas diseñadas en la lección de SQL (alumnos, calificaciones)",
              "Repository Pattern para desacoplar la lógica de negocio del acceso a datos — la lógica no sabe si es Postgres o memoria",
              "Tests con pytest: mínimo 6 tests cubriendo casos normales (alumno creado, promedio correcto) y de error (alumno no existe)",
              "Dockerfile + docker-compose.yml para levantar el stack completo con un solo comando: docker-compose up",
            ],
            bonus:"Agrega autenticación JWT para que solo usuarios autorizados puedan crear/editar calificaciones — consultar sigue siendo público"},
        ]
      },
    ]
  },
  {
    id:"n4", num:"04", title:"Arquitecto", sub:"Sistemas, cloud y seguridad",
    color:"#c084fc", dark:"#c084fc18", border:"#c084fc30", glow:"0 0 40px #c084fc25",
    emoji:"🏗️", locked:true,
    lessons:[
      {id:"n4l1", title:"Patrones de diseño", mins:50, xp:300,
        quiz:{question:"¿Qué son los patrones de diseño de software?",options:["Plantillas de diseño grafico para interfaces de usuario","Soluciones probadas y reutilizables a problemas comunes de arquitectura de software","Librerias de codigo que se instalan con pip o npm","Reglas del linter para dar formato al codigo"],correct:1,explanation:"Los patrones no se instalan ni se copian — se aprenden y se aplican cuando reconoces el problema. Son el vocabulario compartido entre seniors: decir 'usemos el patrón Repository aqui' comunica una arquitectura completa en una sola frase."},
        sections:[
        {type:"intro", title:"Soluciones a problemas recurrentes", body:"Los patrones de diseño son soluciones probadas a problemas comunes. No los inventas — los reconoces y los aplicas. Son el lenguaje compartido entre developers senior."},
        {type:"code", label:"Patrón Repository", lang:"python", code:`from abc import ABC, abstractmethod\n\nclass AlumnoRepository(ABC):\n    @abstractmethod\n    def guardar(self, alumno): pass\n    @abstractmethod\n    def buscar_por_id(self, id): pass\n\nclass AlumnoMemoriaRepository(AlumnoRepository):\n    def __init__(self): self.datos = {}\n    def guardar(self, alumno):\n        self.datos[alumno.id] = alumno\n    def buscar_por_id(self, id):\n        return self.datos.get(id)\n\n# Puedes cambiar a SupabaseRepository sin cambiar la lógica de negocio`},
        {type:"exercise", lang:"javascript", title:"Patrón Observer", prompt:"Implementa el patrón Observer para un sistema de notificaciones: cuando un alumno sube su calificación, notifica automáticamente al maestro y al padre.", hint:"Crea una clase Alumno con suscribir(obs) y notificarTodos(). Cada observador tiene un método notificar(msg). Usa console.log para ver las notificaciones.", solution:`class Alumno {
  constructor(nombre) {
    this.nombre = nombre;
    this.calificacion = 0;
    this.observadores = [];
  }
  suscribir(obs) { this.observadores.push(obs); }
  actualizarCalificacion(cal) {
    this.calificacion = cal;
    this.observadores.forEach(obs =>
      obs.notificar(\`\${this.nombre} tiene nueva cal: \${cal}\`)
    );
  }
}

const maestro = { notificar: msg => console.log("Maestro:", msg) };
const padre   = { notificar: msg => console.log("Padre:", msg) };

const alumno = new Alumno("Danny");
alumno.suscribir(maestro);
alumno.suscribir(padre);
alumno.actualizarCalificacion(9.5);
alumno.actualizarCalificacion(10);`},
      ]},
      {id:"n4l2", title:"Docker y contenedores", mins:45, xp:280,
        quiz:{question:"¿Qué problema principal resuelve Docker?",options:["Hace el codigo mas seguro automaticamente contra hackers","Elimina el problema 'en mi maquina funciona' empaquetando la app con sus dependencias","Acelera el tiempo de compilacion del codigo","Reemplaza al sistema operativo del servidor"],correct:1,explanation:"Docker empaqueta tu app, su runtime, librerias y configuracion en un contenedor. Este contenedor corre exactamente igual en tu laptop, en el servidor de Render, en AWS. Sin Docker, un dep diferente entre entornos puede hacer fallar el deploy."},
        sections:[
        {type:"intro", title:"Tu app, en cualquier máquina", body:"Docker resuelve el problema clásico: 'en mi máquina funciona'. Un contenedor empaqueta tu app con todas sus dependencias. Corre igual en tu laptop, en el servidor de Render, en AWS — en cualquier lugar."},
        {type:"code", label:"Dockerfile para tu API Python", lang:"dockerfile", code:`FROM python:3.11-slim\n\nWORKDIR /app\n\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY . .\n\nEXPOSE 8000\n\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`},
        {type:"code", label:"docker-compose para stack completo", lang:"yaml", code:`version: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - "8000:8000"\n    environment:\n      - DATABASE_URL=postgresql://user:pass@db:5432/mydb\n    depends_on:\n      - db\n  \n  db:\n    image: postgres:15\n    environment:\n      - POSTGRES_DB=mydb\n      - POSTGRES_USER=user\n      - POSTGRES_PASSWORD=pass`},
        {type:"exercise", title:"Dockerizar tu Generador", prompt:"Escribe el Dockerfile y docker-compose.yml para tu Generador de Planeaciones (FastAPI + PostgreSQL). Incluye variables de entorno para la API key de Anthropic.", hint:"Nunca hardcodees API keys en el Dockerfile. Usa variables de entorno y un archivo .env.", solution:`# Dockerfile\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE 8000\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0"]\n\n# docker-compose.yml\nversion: '3.8'\nservices:\n  api:\n    build: .\n    ports: ["8000:8000"]\n    env_file: .env\n    depends_on: [db]\n  db:\n    image: postgres:15\n    env_file: .env\n\n# .env (nunca subir a git)\nANTHROPIC_API_KEY=sk-ant-...\nDATABASE_URL=postgresql://...`},
      ]},
      {id:"n4l3", title:"Bases de datos vectoriales y RAG", mins:50, xp:350,
        quiz:{question:"¿Qué hace RAG (Retrieval Augmented Generation)?",options:["Mejora la velocidad del modelo de IA","Reduce el costo de las llamadas a la API","Agrega informacion externa y especifica al contexto del LLM para que responda con tu conocimiento propio","Fine-tunea el modelo con tus datos de entrenamiento"],correct:2,explanation:"RAG no modifica el modelo — le da informacion relevante en el prompt. Buscas documentos similares a la pregunta en tu base vectorial y los incluyes en el contexto. El LLM responde basado en TU conocimiento sin necesidad de re-entrenarlo."},
        sections:[
        {type:"intro", title:"La memoria de tu IA", body:"Una base de datos vectorial convierte texto en números (vectores) y permite buscar por significado, no por palabras exactas. RAG (Retrieval Augmented Generation) le da a tu IA acceso a tu conocimiento propio."},
        {type:"code", label:"Embeddings con OpenAI + pgvector", lang:"python", code:`import anthropic\nfrom supabase import create_client\n\nclient = anthropic.Anthropic()\nsupabase = create_client(URL, KEY)\n\ndef crear_embedding(texto: str) -> list[float]:\n    # Convertir texto a vector numérico\n    response = client.embeddings.create(\n        model="voyage-3",\n        input=texto\n    )\n    return response.embeddings[0]\n\ndef guardar_en_bd(texto: str, embedding: list):\n    supabase.table("documentos").insert({\n        "contenido": texto,\n        "embedding": embedding\n    }).execute()`},
        {type:"code", label:"Búsqueda semántica RAG", lang:"python", code:`def buscar_contexto(pregunta: str, limite: int = 3):\n    # Convertir pregunta a vector\n    vector = crear_embedding(pregunta)\n    \n    # Buscar documentos similares en Supabase\n    resultado = supabase.rpc("match_documents", {\n        "query_embedding": vector,\n        "match_count": limite\n    }).execute()\n    \n    return resultado.data\n\n# El contexto encontrado lo incluyes en el prompt\n# y la IA responde con información de TU base de datos`},
        {type:"exercise", title:"RAG para tu escuela", prompt:"Diseña (no tienes que codear todo) el flujo completo de un RAG para que la IA del Colegio Mano Amiga responda preguntas basándose en los planes de estudio reales.", hint:"Piensa en: ¿qué documentos indexarías? ¿Cómo los cargarías? ¿Qué pregunta haría un maestro y qué debería responder la IA?", solution:"Flujo completo:\n1. INDEXACIÓN:\n   - Cargar PDFs de planes de estudio\n   - Dividir en chunks de ~500 tokens\n   - Crear embedding de cada chunk\n   - Guardar en Supabase con pgvector\n\n2. CONSULTA:\n   - Maestro escribe su pregunta\n   - Crear embedding de la pregunta\n   - Buscar los 3 chunks más similares\n   - Incluir chunks en el prompt\n\n3. GENERACIÓN:\n   - prompt = contexto + pregunta\n   - Claude genera respuesta basada en el contexto\n   - Respuesta siempre fundamentada en los planes reales"},
      ]},
      {id:"n4l4", title:"Seguridad en aplicaciones", mins:40, xp:260,
        quiz:{question:"¿Como se previene SQL Injection?",options:["Usando contrasenas muy largas en la base de datos","Cifrando toda la base de datos con AES","Usando consultas parametrizadas en lugar de concatenar el input del usuario directamente","Actualizando el servidor a la ultima version del OS"],correct:2,explanation:"SQL Injection ocurre cuando incluyes input del usuario directamente en la query: f\"SELECT * FROM users WHERE name = '{nombre}'\". Con nombre = \"'; DROP TABLE users; --\" borras la BD. La solucion: parametros (cursor.execute(query, (valor,))). El driver escapa automaticamente."},
        sections:[
        {type:"intro", title:"Seguridad no es opcional", body:"Un app insegura no es una app terminada. SQL Injection, XSS, APIs sin autenticación — estas vulnerabilidades han destruido empresas. Aprenderlas te protege a ti y a tus usuarios."},
        {type:"code", label:"SQL Injection — El ataque más común", lang:"python", code:`# ❌ VULNERABLE — nunca hagas esto\ndef buscar_usuario_inseguro(nombre):\n    query = f"SELECT * FROM usuarios WHERE nombre = '{nombre}'"\n    # Si nombre = "'; DROP TABLE usuarios; --"\n    # ¡Borras toda la base de datos!\n\n# ✅ SEGURO — usa parámetros\ndef buscar_usuario_seguro(nombre):\n    query = "SELECT * FROM usuarios WHERE nombre = %s"\n    cursor.execute(query, (nombre,))  # El driver escapa el input`},
        {type:"code", label:"JWT para autenticación de API", lang:"python", code:`import jwt\nfrom datetime import datetime, timedelta\n\nSECRET = "tu-clave-super-secreta"\n\ndef crear_token(user_id: int) -> str:\n    payload = {\n        "sub": user_id,\n        "exp": datetime.utcnow() + timedelta(hours=24)\n    }\n    return jwt.encode(payload, SECRET, algorithm="HS256")\n\ndef verificar_token(token: str) -> dict:\n    try:\n        return jwt.decode(token, SECRET, algorithms=["HS256"])\n    except jwt.ExpiredSignatureError:\n        raise Exception("Token expirado")`},
        {type:"exercise", title:"Auditoría de seguridad", prompt:"Lista 5 vulnerabilidades de seguridad que podrían afectar tu Generador de Planeaciones y cómo las mitigarías.", hint:"Piensa en: autenticación, datos que entra el usuario, API keys expuestas, rate limiting, HTTPS.", solution:"1. API key de Anthropic expuesta en frontend\n   → Nunca enviar al cliente, siempre usar backend\n\n2. Sin autenticación — cualquiera usa la API\n   → Implementar JWT o Supabase Auth\n\n3. Sin rate limiting — alguien puede agotar tus créditos\n   → Límite de X requests por usuario por día\n\n4. Input del usuario inyectado directo al prompt\n   → Sanitizar y validar antes de incluir en prompt\n\n5. CORS abierto — cualquier dominio puede llamar tu API\n   → Configurar CORS solo para tu dominio"},
      ]},
      {id:"n4l5", title:"CI/CD y DevOps básico", mins:35, xp:220,
        quiz:{question:"¿Qué significa CI/CD?",options:["Codigo Inteligente / Codigo Distribuido","Continuous Integration / Continuous Deployment — integracion y despliegue automatizados","Customer Interface / Customer Design","Central Index / Central Database"],correct:1,explanation:"CI ejecuta tus tests automaticamente en cada push (nadie olvida correr los tests). CD despliega automaticamente si los tests pasan. Juntos eliminan el deploy manual y garantizan que el codigo en produccion siempre paso las pruebas."},
        sections:[
        {type:"intro", title:"Automatiza todo lo que puedas", body:"CI/CD significa que cada vez que haces push a main, tu código se prueba y se despliega automáticamente. Sin intervención manual. Sin 'olvidé correr los tests'. Profesionalismo automatizado."},
        {type:"code", label:"GitHub Actions — Pipeline completo", lang:"yaml", code:`name: Deploy Generador\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-python@v4\n        with: {python-version: '3.11'}\n      - run: pip install -r requirements.txt\n      - run: pytest tests/ -v\n  \n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - name: Deploy a Render\n        run: curl -X POST \${{ secrets.RENDER_DEPLOY_HOOK }}`},
        {type:"exercise", title:"Tu primer pipeline", prompt:"Diseña un GitHub Actions workflow para tu app que: instale dependencias, corra tests, y si pasan, despliegue automáticamente a Render.", hint:"Usa jobs con 'needs' para encadenarlos. Las API keys van en GitHub Secrets, nunca en el YAML.", solution:"name: CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Setup Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.11'\n      - name: Instalar deps\n        run: pip install -r requirements.txt\n      - name: Correr tests\n        run: pytest\n        env:\n          DATABASE_URL: ${{ secrets.TEST_DB_URL }}\n  \n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - name: Deploy a Render\n        run: |\n          curl -X POST \"${{ secrets.RENDER_HOOK }}\""},
      ]},
      {
        id:"n4cap", title:"Capstone: IA Educativa con RAG", mins:90, xp:800,
        sections:[
          {type:"intro", title:"Tu primera IA con conocimiento propio", body:"Integra patrones de diseño, Docker, bases de datos vectoriales y seguridad. Construirás una IA que responde preguntas de maestros basándose en los documentos reales de tu escuela. Este es el nivel que diferencia a un arquitecto de un desarrollador."},
          {type:"capstone", title:"IA Educativa para Mano Amiga",
            description:"Construye un sistema RAG completo donde la IA responde preguntas de los maestros basándose en los planes de estudio del Colegio Mano Amiga. Incluye seguridad, rate limiting y dockerización.",
            requirements:[
              "Script de indexación: lee documentos PDF, divide en chunks de 500 tokens y crea embeddings en Supabase con pgvector",
              "API FastAPI con endpoint POST /pregunta que implemente el pipeline RAG completo (embedding → búsqueda → generación)",
              "Autenticación JWT: solo maestros autorizados con token válido pueden hacer preguntas",
              "Rate limiting: máximo 50 preguntas por usuario por día — guardar contador en base de datos",
              "Stack completo dockerizado: docker-compose con la API y Supabase local para desarrollo",
            ],
            bonus:"Agrega memoria de conversación: la IA recuerda el contexto de los últimos 5 mensajes de la sesión para respuestas más coherentes"},
        ]
      },
    ]
  },
  {
    id:"n5", num:"05", title:"Senior / IA", sub:"Machine Learning y tu IA propia",
    color:"#f87171", dark:"#f8717118", border:"#f8717130", glow:"0 0 40px #f8717125",
    emoji:"🧠", locked:true,
    lessons:[
      {id:"n5l1", title:"Fundamentos de Machine Learning", mins:60, xp:400,
        quiz:{question:"¿Cuál es la diferencia entre ML supervisado y no supervisado?",options:["El supervisado necesita mas memoria RAM","Supervisado aprende de datos etiquetados; no supervisado encuentra patrones sin etiquetas","El no supervisado siempre es mas preciso","Son lo mismo con diferente terminologia academica"],correct:1,explanation:"Supervisado: tienes emails etiquetados 'spam'/'no-spam' → el modelo aprende esa distincion. No supervisado: le das datos sin etiquetas → el modelo descubre agrupaciones por si solo. Para clasificacion de spam de tu escuela, usarias supervisado."},
        sections:[
        {type:"intro", title:"Cómo aprenden las máquinas", body:"Machine Learning es enseñarle a una computadora a aprender de ejemplos en lugar de programar reglas explícitas. En lugar de decirle 'si X entonces Y', le muestras miles de ejemplos y ella descubre el patrón."},
        {type:"code", label:"Tu primer modelo ML con scikit-learn", lang:"python", code:`from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Datos: horas de estudio → calificación\nhoras = np.array([[1],[2],[3],[4],[5],[6],[7],[8]])\ncalificaciones = np.array([4, 5, 6, 6.5, 7.5, 8, 9, 9.5])\n\n# Entrenar modelo\nmodelo = LinearRegression()\nmodelo.fit(horas, calificaciones)\n\n# Predecir\nprediccion = modelo.predict([[10]])\nprint(f"Con 10 horas de estudio: {prediccion[0]:.1f}")  # ~10 (no siempre 10 😄)`},
        {type:"exercise", lang:"python", title:"Clasificador de spam simple", prompt:"Implementa un clasificador de spam básico (sin ML externo) usando palabras clave ponderadas. Pruébalo con 3 mensajes: uno obvio spam, uno legítimo, y uno ambiguo.", hint:"Crea un diccionario de palabras spam con pesos. El score de un mensaje es la suma de pesos de palabras encontradas. Umbral > 2 = spam.", solution:`def clasificar_spam(mensaje):
    palabras_spam = {
        "gratis": 2, "gana": 2, "premio": 2,
        "urgente": 1.5, "oferta": 1.5, "dinero": 1.5,
        "click": 1, "descuento": 1, "100%": 1
    }
    texto = mensaje.lower()
    score = sum(peso for pal, peso in palabras_spam.items() if pal in texto)
    return "SPAM" if score >= 2 else "Legítimo", score

mensajes = [
    "GRATIS: Gana dinero urgente, click aquí!!!",
    "Hola Danny, mañana es la reunión de maestros a las 10am",
    "Oferta especial para el salón, no urgente"
]

for msg in mensajes:
    resultado, score = clasificar_spam(msg)
    print(f"[{resultado}] (score={score}) → {msg[:40]}...")`},
      ]},
      {id:"n5l2", title:"Cómo funcionan los LLMs por dentro", mins:60, xp:450,
        quiz:{question:"¿Qué son los embeddings en el contexto de los LLMs?",options:["Imagenes embebidas dentro del modelo de IA","Representaciones numericas (vectores) de texto que capturan su significado semantico","El proceso de comprimir el modelo para hacerlo mas pequeno","Los pesos entrenables del transformer"],correct:1,explanation:"Un embedding convierte 'rey' en [0.8, 0.2, 0.9...] (1536+ numeros). La magia: palabras con significado similar tienen vectores similares. Por eso matematicamente: rey - hombre + mujer ≈ reina. Son la base de toda busqueda semantica y de RAG."},
        sections:[
        {type:"intro", title:"La arquitectura Transformer", body:"Los LLMs (Claude, GPT, Gemini) están basados en la arquitectura Transformer (2017). Entender sus piezas — embeddings, atención, capas — te da el poder de usarlos, optimizarlos y eventualmente fine-tunearlos."},
        {type:"code", label:"Embeddings — Texto convertido a números", lang:"python", code:`# Un embedding convierte texto en un vector numérico\n# que captura el SIGNIFICADO semántico\n\n# Conceptualmente:\n"rey"  → [0.8, 0.2, 0.9, 0.1, ...] # 1536 números\n"reina"→ [0.7, 0.8, 0.9, 0.1, ...] # similar a rey\n"pizza"→ [0.1, 0.3, 0.1, 0.9, ...] # muy diferente\n\n# La magia: rey - hombre + mujer ≈ reina\n# Las operaciones matemáticas capturan relaciones semánticas\n\n# Con la API de Anthropic:\nimport anthropic\nclient = anthropic.Anthropic()\n\nresponse = client.messages.create(\n    model="claude-sonnet-4-20250514",\n    max_tokens=100,\n    messages=[{"role":"user","content":"¿Qué es un embedding?"}]\n)`},
        {type:"exercise", lang:"python", title:"Simulador de embeddings semánticos", prompt:"Simula cómo funcionan los embeddings usando distancia de coseno entre vectores simples. Implementa similitud_coseno(v1, v2) y compara pares de conceptos.", hint:"La similitud de coseno va de -1 a 1. Vectores similares tienen similitud cercana a 1. Usa listas de 3 dimensiones para representar conceptos.", solution:`import math

def similitud_coseno(v1, v2):
    dot = sum(a*b for a,b in zip(v1,v2))
    mag1 = math.sqrt(sum(a**2 for a in v1))
    mag2 = math.sqrt(sum(b**2 for b in v2))
    return dot / (mag1 * mag2) if mag1 and mag2 else 0

# Vectores simplificados de 3 dimensiones
# [educacion, tecnologia, naturaleza]
conceptos = {
    "maestro":     [0.9, 0.3, 0.1],
    "alumno":      [0.8, 0.2, 0.1],
    "programador": [0.2, 0.9, 0.0],
    "jardinero":   [0.1, 0.0, 0.9],
    "AI":          [0.3, 0.95, 0.0],
}

pares = [("maestro","alumno"), ("maestro","programador"),
         ("programador","AI"), ("jardinero","AI")]

for a, b in pares:
    sim = similitud_coseno(conceptos[a], conceptos[b])
    barra = "█" * int(sim * 10)
    print(f"{a:12} ↔ {b:12} {barra} {sim:.2f}")`},
      ]},
      {id:"n5l3", title:"Fine-tuning de modelos base", mins:70, xp:500,
        quiz:{question:"¿Qué es LoRA en el contexto del fine-tuning de modelos de lenguaje?",options:["Un framework de Python para entrenar modelos desde cero","Una tecnica eficiente que ajusta solo ~1% de los parametros del modelo agregando matrices pequenas","El nombre del modelo base de Meta","Una metrica para evaluar la calidad del fine-tuning"],correct:1,explanation:"LoRA (Low-Rank Adaptation) agrega matrices pequenas a las capas del transformer en lugar de actualizar todos los miles de millones de parametros. Resultado: fine-tuning con 10x menos GPU y tiempo, con resultados comparables al fine-tuning completo."},
        sections:[
        {type:"intro", title:"Personalizar una IA existente", body:"El fine-tuning toma un modelo base (LLaMA, Mistral) y lo especializa con tus propios datos. En lugar de entrenar desde cero (imposible sin millones de dólares), ajustas los parámetros del modelo para tu caso de uso específico."},
        {type:"code", label:"Fine-tuning con Hugging Face", lang:"python", code:`from transformers import AutoModelForCausalLM, AutoTokenizer\nfrom peft import LoraConfig, get_peft_model\n\n# Cargar modelo base\nmodelo = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-v0.1")\ntokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-v0.1")\n\n# LoRA: ajustar solo el 1% de parámetros (eficiente)\nconfig = LoraConfig(\n    r=16,           # rango de la adaptación\n    lora_alpha=32,\n    target_modules=["q_proj", "v_proj"],\n    lora_dropout=0.05,\n    task_type="CAUSAL_LM"\n)\n\nmodelo_lora = get_peft_model(modelo, config)\nmodelo_lora.print_trainable_parameters()\n# trainable params: 8,388,608 || all params: 7,250,442,240\n# = 0.12% de los parámetros — increíblemente eficiente`},
        {type:"exercise", title:"Dataset para tu IA", prompt:"Diseña el dataset de entrenamiento para una IA con tu personalidad y conocimientos. Define: formato, ejemplos de Q&A, y qué la haría única.", hint:"El formato más común es JSONL con pares prompt/completion. La calidad importa más que la cantidad.", solution:`# Formato del dataset (JSONL)\n{\n  "prompt": "¿Cómo se estructura una planeación de clase?\",\n  "completion": "Una planeación efectiva tiene...\"\n}\n\n# Tu IA única incluiría:\n# 1. Conocimiento de la Doctrina Social de la Iglesia\n# 2. Metodología pedagógica de Mano Amiga\n# 3. Contexto de Chalco y la comunidad\n# 4. Tu estilo de comunicación como maestro\n# 5. Ejemplos reales de tus clases\n\n# Mínimo recomendado: 100-500 ejemplos de alta calidad\n# Cuánto más específicos, mejor el resultado`},
      ]},
      {id:"n5l4", title:"RAG avanzado — Tu IA con memoria", mins:60, xp:480,
        quiz:{question:"En un pipeline RAG, ¿en qué orden ocurren los pasos en tiempo real?",options:["Generacion → Recuperacion → Embedding de pregunta","Embedding de pregunta → Busqueda semantica → Generacion con contexto","Indexacion → Pregunta del usuario → Fine-tuning del modelo","Base de datos → Modelo → Interfaz de usuario"],correct:1,explanation:"RAG en tiempo real: 1) conviertes la pregunta a vector (embedding), 2) buscas los documentos mas similares en tu BD vectorial (recuperacion), 3) incluyes esos documentos en el prompt (contexto), 4) el LLM genera una respuesta fundamentada en tu conocimiento."},
        sections:[
        {type:"intro", title:"Darle memoria a tu IA", body:"RAG (Retrieval Augmented Generation) es la técnica más práctica del mundo IA actual. Le da a cualquier LLM acceso a tu conocimiento propio sin necesidad de fine-tuning. Es lo que están usando el 90% de las startups de IA."},
        {type:"code", label:"Pipeline RAG completo", lang:"python", code:`import anthropic\nfrom supabase import create_client\n\nclient = anthropic.Anthropic()\nsupabase = create_client(SUPABASE_URL, SUPABASE_KEY)\n\ndef rag_completo(pregunta: str) -> str:\n    # 1. Convertir pregunta a embedding\n    emb_resp = client.messages.create(\n        model="claude-sonnet-4-20250514", max_tokens=10,\n        messages=[{"role":"user","content":pregunta}]\n    )\n    \n    # 2. Buscar documentos relevantes\n    docs = supabase.rpc("match_documents", {\n        "query_embedding": vector,\n        "match_count": 3\n    }).execute().data\n    \n    # 3. Construir prompt con contexto\n    contexto = "\\n".join([d["contenido"] for d in docs])\n    prompt = f"Contexto:\\n{contexto}\\n\\nPregunta: {pregunta}"\n    \n    # 4. Generar respuesta\n    respuesta = client.messages.create(\n        model="claude-sonnet-4-20250514",\n        max_tokens=1000,\n        messages=[{"role":"user","content":prompt}]\n    )\n    return respuesta.content[0].text`},
        {type:"exercise", title:"RAG para Doctrina Social", prompt:"Diseña el flujo RAG completo para que tu IA de Responsabilidad Social responda preguntas basándose en los documentos de la Doctrina Social de la Iglesia.", hint:"Piensa qué documentos indexarías (Laudato Si, Rerum Novarum, etc.), cómo los dividirías en chunks y cómo le darías el contexto correcto a Claude.", solution:"FASE 1 — INDEXACIÓN (se hace una vez):\n1. Descargar PDFs de documentos DSI\n2. Extraer texto con PyPDF2\n3. Dividir en chunks de 500 tokens con overlap de 50\n4. Crear embedding de cada chunk con Voyage AI\n5. Guardar en Supabase: {contenido, embedding, fuente, página}\n\nFASE 2 — CONSULTA (en tiempo real):\n1. Alumno pregunta: '¿Qué dice la Iglesia sobre el trabajo?'\n2. Crear embedding de la pregunta\n3. Búsqueda semántica → top 3 chunks relevantes\n4. System prompt: 'Eres maestro de Responsabilidad Social...'\n5. User prompt: 'Contexto: [chunks] Pregunta: [pregunta]'\n6. Claude responde citando fuentes específicas"},
      ]},
      {id:"n5l5", title:"Tu IA protagonista", mins:90, xp:1000,
        quiz:{question:"¿Cuál es la arquitectura base que usan todos los LLMs modernos (Claude, GPT, Gemini)?",options:["RNN — Redes Recurrentes Neuronales","CNN — Redes Convolucionales","Transformer, publicada en el paper 'Attention Is All You Need' (Google, 2017)","LSTM — Long Short-Term Memory"],correct:2,explanation:"'Attention Is All You Need' (Vaswani et al., Google, 2017) introdujo el Transformer. Reemplazó a las RNNs porque procesa toda la secuencia en paralelo y captura dependencias de largo alcance mediante el mecanismo de atencion — el 'alma' de Claude, GPT y Gemini."},
        sections:[
        {type:"intro", title:"La meta final", body:"Aquí construyes la IA que es 100% tuya. No una copia de ChatGPT. Una IA con tu conocimiento, tu personalidad, tus valores y tus protocolos. El resultado de todo el camino recorrido."},
        {type:"code", label:"Stack completo de tu IA", lang:"python", code:`# Tu IA protagonista — arquitectura completa\n\n# 1. CEREBRO: Mistral 7B fine-tuneado con tus datos\n# 2. MEMORIA: Supabase + pgvector con tu conocimiento\n# 3. PERSONALIDAD: System prompt con tus valores\n# 4. API: FastAPI + autenticación JWT\n# 5. INTERFAZ: React app personalizada\n# 6. DEPLOY: Docker + Railway/Render\n\nclass IaProtagonista:\n    def __init__(self):\n        self.nombre = "Tu nombre aquí"\n        self.valores = ["responsabilidad", "creatividad"]\n        self.conocimiento = SupabaseVectorStore()\n        self.modelo = tu_modelo_fine_tuneado()\n    \n    def responder(self, pregunta: str, contexto_usuario: dict) -> str:\n        # 1. Recuperar contexto relevante\n        docs = self.conocimiento.buscar(pregunta)\n        # 2. Construir prompt personalizado\n        prompt = self.construir_prompt(pregunta, docs, contexto_usuario)\n        # 3. Generar respuesta con tu modelo\n        return self.modelo.generar(prompt)`},
        {type:"insight", icon:"🏆", body:"Si llegaste hasta aquí, no eres el mismo dev que empezó este roadmap. Tienes los fundamentos, la arquitectura, el ML y las herramientas para construir cualquier cosa que imagines. Esta IA no es el destino — es el punto de partida."},
        {type:"exercise", title:"Especificación de tu IA", prompt:"Escribe la especificación completa de tu IA protagonista: nombre, personalidad, dominio de conocimiento, qué problemas resuelve, y cómo se diferencia de ChatGPT.", hint:"Sé específico y ambicioso. Esta es tu visión — no hay respuesta incorrecta.", solution:"Mi IA protagonista:\n\nNOMBRE: Danny (o el nombre que elijas)\n\nPERSONALIDAD:\n- Pedagógico y motivador como maestro\n- Conocedor de la Doctrina Social de la Iglesia\n- Contextualizado en la realidad de Chalco y México\n- Creativo y orientado a proyectos reales\n\nCONOCIMIENTO BASE:\n- Todos los documentos de la DSI\n- Planes de estudio de Mano Amiga\n- Proyectos y experiencia personal\n- Metodologías pedagógicas modernas\n\nPROBLEMAS QUE RESUELVE:\n- Generar planeaciones de clase alineadas a valores\n- Responder dudas de alumnos sobre RSE\n- Apoyar a maestros en evaluación y retroalimentación\n\nDIFERENCIA DE CHATGPT:\n- Conoce el contexto específico de tu escuela\n- Habla con los valores de la institución\n- Responde como TÚ responderías"},
      ]},
      {id:"n5l6", title:"System Design: arquitectura a escala", mins:70, xp:520,
        quiz:{question:"¿Qué problema resuelve un Load Balancer en un sistema con miles de usuarios concurrentes?",options:["Reduce el tiempo de escritura en la base de datos","Distribuye el tráfico entre múltiples servidores para que ninguno se sobrecargue","Comprime los archivos estáticos para descarga más rápida","Gestiona las sesiones de usuario entre peticiones HTTP"],correct:1,explanation:"Un Load Balancer actúa como director de tráfico: cuando 10,000 usuarios llegan simultáneamente, los distribuye entre varios servidores. Sin él, un solo servidor colapsaría bajo la carga. Es la primera pieza de arquitectura que se agrega cuando una app crece más allá de un servidor."},
        sections:[
          {type:"intro",title:"Pensar a escala — el salto al nivel senior",body:"Cualquier dev puede hacer una app que funciona para 10 usuarios. Un senior diseña sistemas que funcionan para 10,000 o 10,000,000. System Design no es sobre código — es sobre decisiones de arquitectura que aguantan el crecimiento real sin rehacerlo todo desde cero."},
          {type:"pillars",title:"Los 4 componentes de todo sistema escalable",note:"Cuando una app tiene problemas de escala, la solución siempre está en uno de estos cuatro:",items:[{i:"⚖️",t:"Load Balancer",d:"Distribuye tráfico entre múltiples servidores. Nginx y AWS ALB son los más usados."},{i:"⚡",t:"Cache (Redis)",d:"Guarda respuestas frecuentes en memoria. Si 1000 usuarios piden lo mismo, sirves desde cache — no la BD."},{i:"📨",t:"Message Queue",d:"Desacopla procesos lentos (email, PDF) del request del usuario. Celery + Redis en el stack Python."},{i:"🗄️",t:"Sharding BD",d:"Dividir la base de datos en fragmentos cuando una sola instancia no aguanta el volumen de datos."}]},
          {type:"code",label:"Arquitectura del sistema IA de Mano Amiga a escala",lang:"bash",code:`# Diseño de alto nivel — 500 maestros concurrentes\n\n[Usuario / Maestro]\n    ↓ HTTPS\n[Load Balancer — Nginx]\n    ↓ distribuye entre instancias\n[API FastAPI × 3 instancias — Railway / Render]\n    ↓ primero revisa\n[Cache Redis — respuestas frecuentes, TTL 1h]\n    ↓ si no está en cache\n[Supabase PostgreSQL — datos persistentes]\n    ↓ para contexto semántico\n[Supabase pgvector — embeddings RAG]\n    ↓ para generar respuesta\n[Claude API — Anthropic]\n    ↓ tareas asíncronas (logs, analytics)\n[Queue Celery + Redis — no bloquea el response]`},
          {type:"insight",icon:"🧠",body:"El Teorema CAP: en un sistema distribuido, solo puedes garantizar DOS de tres: Consistencia (todos ven lo mismo), Disponibilidad (siempre responde), Tolerancia a particiones (sobrevive fallos de red). Supabase elige CP — puede dejar de responder ante fallos de red para no devolver datos inconsistentes."},
          {type:"exercise",title:"Diseña tu sistema a escala",prompt:"Diseña la arquitectura completa para que la IA de Mano Amiga soporte 500 maestros simultáneos. Define: qué se cachea, qué va a la queue, cuántas instancias de API necesitas, y cuál es el punto más probable de fallo.",hint:"Traza el flujo de UNA petición de principio a fin. ¿Qué operaciones son lentas? ¿Qué datos se repiten entre usuarios? ¿Qué pasa si la base de datos cae 30 segundos?",solution:"ARQUITECTURA PARA 500 USUARIOS:\n1. Nginx Load Balancer → 3 instancias FastAPI\n2. Redis Cache (TTL 1h) para:\n   - Respuestas a preguntas frecuentes\n   - Contadores de rate limit por usuario\n3. Celery Queue para:\n   - Guardar log de conversaciones (async)\n   - Enviar reportes por email\n4. PostgreSQL con 1 read replica para analytics\n5. pgvector: NO se cachea — siempre búsqueda fresca\n\nPUNTO DE FALLO #1: Claude API (externo)\n  → Retry con exponential backoff\n  → Mensaje de error amigable si falla\nPUNTO DE FALLO #2: Base de datos\n  → Supabase tiene redundancia automática incluida"},
        ]},
      {id:"n5l7", title:"El dev senior: más allá del código", mins:60, xp:450,
        quiz:{question:"¿Cuál es el objetivo principal de una code review de calidad?",options:["Encontrar todos los bugs antes de que lleguen a producción","Demostrar que eres más inteligente que quien escribió el código","Compartir conocimiento, mejorar la calidad y alinear al equipo en estándares","Aprobar formalmente el código para hacer merge en main"],correct:2,explanation:"Una code review bien hecha transfiere conocimiento (el reviewer aprende del PR y el autor aprende del feedback), mejora la calidad detectando problemas de diseño (no solo bugs), y alinea al equipo en cómo hacer las cosas. Un senior da reviews que cambian cómo alguien piensa, no solo cómo escribe una línea."},
        sections:[
          {type:"intro",title:"El 20% que separa un mid de un senior",body:"Un mid developer escribe buen código. Un senior sabe cuándo NO escribir código, cómo comunicar decisiones técnicas, cómo hacer crecer a su equipo, y cómo estimar proyectos con honestidad. Estas habilidades no están en ningún tutorial — se desarrollan con intención y experiencia reflexiva."},
          {type:"pillars",title:"Las 4 habilidades del desarrollador senior",note:"Más allá de dominar lenguajes y frameworks, un senior es valorado por:",items:[{i:"🔍",t:"Code Review",d:"Dar feedback constructivo que mejora el código Y enseña al equipo a pensar mejor."},{i:"📝",t:"Decisiones documentadas",d:"Architecture Decision Records (ADR): escribir POR QUÉ se tomó cada decisión de diseño."},{i:"🎓",t:"Mentoring",d:"Hacer crecer a otros devs. El mejor senior convierte a mid developers en seniors."},{i:"📊",t:"Estimación honesta",d:"La regla del doble: tu estimación optimista × 2 suele ser más precisa en la realidad."}]},
          {type:"code",label:"Code review — de junior a senior",lang:"python",code:`# PR: función para validar emails (código del PR)\ndef validate(e):\n    return "@" in e\n\n# ❌ Review de junior:\n# "Funciona bien, LGTM 👍"\n\n# ❌ Review de mid mal enfocado:\n# "El nombre de la variable es confuso"\n\n# ✅ Review de senior — impacto + conocimiento + solución:\n# "Esta validación aprobaría 'usuario@@dominio' y '@' como válidos.\n# Una validación robusta necesita:\n#   1. Exactamente un '@'\n#   2. Dominio con al menos un punto después del '@'\n#   3. Caracteres válidos en local y dominio\n#\n# Considera usar 'email-validator' (pip install email-validator)\n# o el patrón regex RFC 5322 que ya usamos en el módulo de auth.\n# ¿Te paso el helper que tenemos reutilizable?"\n\n# La diferencia: el senior explica el IMPACTO y da la solución`},
          {type:"insight",icon:"📝",body:"Architecture Decision Records (ADR): cuando tomes una decisión de diseño importante, escríbela en docs/decisions/001-usar-fastapi-vs-django.md. Incluye: contexto del problema, decisión tomada, alternativas consideradas y consecuencias. En 6 meses ni tú recordarás por qué lo hiciste — el ADR te lo explica."},
          {type:"exercise",title:"Tu primera code review",prompt:"Escribe un comentario de code review al estilo senior para este código:\n\ndef get_users():\n    users = db.execute('SELECT * FROM users')\n    return users\n\ndef process(data):\n    for i in range(len(data)):\n        print(data[i])\n\nNo solo señales el problema — explica el impacto, el porqué, y sugiere la solución correcta.",hint:"Hay al menos 3 problemas: uno de seguridad potencial (SQL), uno de performance (SELECT *), y uno de estilo Python (loop con índice innecesario). Menciona el impacto real de cada uno.",solution:"COMENTARIOS DE CODE REVIEW AL ESTILO SENIOR:\n\n[REVISAR - Seguridad] db.execute con string directa:\nSi db.execute no usa parametrización internamente, esto es\nvulnerable a SQL Injection. Incluso si hoy no hay input\ndirecto, establece un patrón peligroso.\n→ Recomienda: ORM (SQLAlchemy) o queries parametrizadas.\n\n[PERFORMANCE] SELECT * en tabla users:\nTrae todas las columnas a memoria, incluyendo datos\nsensibles (password_hash, tokens). Si users tiene 50 cols\ny 100k filas, esto es costoso.\n→ Especifica solo las columnas necesarias: SELECT id, email\n\n[PYTHONIC] range(len(data)) con indexación:\nEn Python, iterar con índice cuando no lo necesitas es\nanti-pattern y menos legible.\n→ Usa: for user in data: print(user)\n   O si necesitas índice: for i, user in enumerate(data)"},
        ]},
      {
        id:"n5cap", title:"Capstone: Tu IA Protagonista", mins:120, xp:1500,
        sections:[
          {type:"intro", title:"El proyecto que define tu carrera", body:"Este es el proyecto final. Integra todo: Machine Learning, fine-tuning con LoRA, RAG avanzado, APIs seguras y deployment en producción. Al completarlo, tendrás una IA que es 100% tuya — con tu conocimiento, tu personalidad y tus valores."},
          {type:"capstone", title:"Tu IA Personal — Completa y Deployada",
            description:"Construye y despliega tu IA protagonista: un sistema completo accesible desde cualquier dispositivo, entrenado con tu conocimiento y capaz de responder como tú lo harías.",
            requirements:[
              "Modelo base fine-tuneado con LoRA usando mínimo 50 ejemplos Q&A de tu dominio (educación, Mano Amiga, DSI)",
              "Sistema RAG con documentos propios indexados en Supabase — el modelo responde con tu conocimiento específico",
              "API FastAPI completa: autenticación JWT, rate limiting, logging de conversaciones y endpoint de health check",
              "Interfaz web en React que permita conversar con tu IA, con historial de mensajes y indicador de fuentes usadas",
              "Deployado en producción: API en Render o Railway, frontend en Vercel — accesible desde cualquier dispositivo con una URL pública",
            ],
            bonus:"Integra analytics: guarda cada conversación en base de datos, analiza las preguntas más frecuentes y usa esos insights para mejorar tu sistema RAG cada mes"},
        ]
      },
    ]
  },
];

/* ================================================================
   STORAGE
================================================================ */
const STORAGE = "dpa_v2";
const loadP = () => { try { const s=localStorage.getItem(STORAGE); return s?JSON.parse(s):{done:{},xp:0,streak:0,lastVisit:null}; } catch{return{done:{},xp:0,streak:0,lastVisit:null};} };
const saveP = (p) => { try{localStorage.setItem(STORAGE,JSON.stringify(p));}catch{} };

const updateStreak = (p) => {
  const today = new Date().toDateString();
  if(p.lastVisit===today) return p;
  const yesterday = new Date(Date.now()-86400000).toDateString();
  const newStreak = p.lastVisit===yesterday ? (p.streak||0)+1 : 1;
  return{...p,streak:newStreak,lastVisit:today};
};

/* ================================================================
   ACHIEVEMENTS
================================================================ */
const ACHIEVEMENTS = [
  { id:"first_blood",  icon:"⚡", title:"Primera línea",      desc:"Completaste tu primera lección",              check: p => Object.keys(p.done).length >= 1 },
  { id:"n0_complete",  icon:"🛠️", title:"Setup completo",      desc:"Terminaste el Nivel 0",                      check: p => LEVELS[0].lessons.every(l=>p.done[l.id]) },
  { id:"n1_complete",  icon:"🌱", title:"Fundamentos sólidos", desc:"Terminaste el Nivel 1",                      check: p => LEVELS[1].lessons.every(l=>p.done[l.id]) },
  { id:"n2_complete",  icon:"🐍", title:"Pythonista",          desc:"Terminaste el Nivel 2",                      check: p => LEVELS[2].lessons.every(l=>p.done[l.id]) },
  { id:"n3_complete",  icon:"🔌", title:"Backend dev",         desc:"Terminaste el Nivel 3",                      check: p => LEVELS[3].lessons.every(l=>p.done[l.id]) },
  { id:"n4_complete",  icon:"🏗️", title:"Data engineer",       desc:"Terminaste el Nivel 4",                      check: p => LEVELS[4].lessons.every(l=>p.done[l.id]) },
  { id:"n5_complete",  icon:"🏆", title:"Senior dev",          desc:"Terminaste el Nivel 5 — el camino completo", check: p => LEVELS[5].lessons.every(l=>p.done[l.id]) },
  { id:"xp_500",       icon:"💎", title:"500 XP",              desc:"Acumulaste 500 puntos de experiencia",        check: p => p.xp >= 500 },
  { id:"xp_2000",      icon:"🔮", title:"2,000 XP",            desc:"Acumulaste 2,000 puntos de experiencia",      check: p => p.xp >= 2000 },
  { id:"xp_5000",      icon:"🌟", title:"5,000 XP",            desc:"Acumulaste 5,000 puntos de experiencia",      check: p => p.xp >= 5000 },
  { id:"streak_3",     icon:"🔥", title:"En racha",            desc:"3 días consecutivos de práctica",             check: p => (p.streak||0) >= 3 },
  { id:"streak_7",     icon:"🔥🔥", title:"Semana de fuego",   desc:"7 días consecutivos de práctica",             check: p => (p.streak||0) >= 7 },
  { id:"half_way",     icon:"🎯", title:"A mitad del camino",  desc:"Completaste 20 lecciones",                    check: p => Object.keys(p.done).length >= 20 },
  { id:"completionist",icon:"🎓", title:"Protagonista",        desc:"Completaste las 40 lecciones",                check: p => Object.keys(p.done).length >= 40 },
];

/* ================================================================
   LANG CONFIG — colores por lenguaje
================================================================ */
const LANG_CFG = {
  python:     { color:"#3b82f6", label:"Python"     },
  javascript: { color:"#f59e0b", label:"JavaScript" },
  kotlin:     { color:"#a855f7", label:"Kotlin"     },
  sql:        { color:"#06b6d4", label:"SQL"        },
  bash:       { color:"#10b981", label:"Bash"       },
  yaml:       { color:"#f87171", label:"YAML"       },
  dockerfile: { color:"#60a5fa", label:"Dockerfile" },
  pseudocódigo:{ color:"#94a3b8", label:"Pseudocódigo"},
};

/* ================================================================
   SUB COMPONENTS
================================================================ */
function Tag({color,children}){
  return(
    <span style={{
      fontSize:10, letterSpacing:3, color,
      fontFamily:"var(--font-mono)",
      background:`${color}15`,
      padding:"2px 8px", borderRadius:4,
      border:`1px solid ${color}30`,
    }}>{children}</span>
  );
}

function CodeBox({code,lang,label}){
  const [cp,setCp]=useState(false);
  const ref=useRef(null);
  const cfg=LANG_CFG[lang]||{color:"#64748b",label:lang||""};
  const lines=code.split("\n");

  useEffect(()=>{
    if(ref.current&&window.Prism){
      window.Prism.highlightElement(ref.current);
    }
  },[code,lang]);

  return(
    <div style={{margin:"22px 0",borderRadius:14,overflow:"hidden",border:"1px solid #0f1628",boxShadow:"0 4px 24px #00000060"}}>
      {/* Header */}
      <div style={{background:"#080c1a",padding:"10px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #0f1628"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {/* Semáforo decorativo */}
          <div style={{display:"flex",gap:5}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#ff5f56"}}/>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#ffbd2e"}}/>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#27c93f"}}/>
          </div>
          <span style={{fontSize:10,color:"#3a4060",letterSpacing:2,fontFamily:"var(--font-mono)"}}>{label||cfg.label}</span>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <span style={{fontSize:9,color:cfg.color,background:`${cfg.color}15`,border:`1px solid ${cfg.color}30`,padding:"2px 8px",borderRadius:4,fontFamily:"var(--font-mono)",letterSpacing:1}}>{cfg.label.toUpperCase()}</span>
          <button
            onClick={()=>{navigator.clipboard.writeText(code);setCp(true);setTimeout(()=>setCp(false),2000);}}
            style={{background:cp?"#00ffaa18":"transparent",border:`1px solid ${cp?"#00ffaa50":"#1e2440"}`,color:cp?"#00ffaa":"#3a4060",fontSize:9,padding:"4px 12px",borderRadius:5,cursor:"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)"}}>
            {cp?"✓ COPIADO":"COPIAR"}
          </button>
        </div>
      </div>
      {/* Cuerpo con números de línea */}
      <div style={{background:"#05070e",display:"flex",overflowX:"auto"}}>
        {/* Números de línea */}
        <div style={{padding:"18px 0",background:"#040609",borderRight:"1px solid #0f1628",userSelect:"none",flexShrink:0}}>
          {lines.map((_,i)=>(
            <div key={i} style={{padding:"0 14px",fontSize:12,lineHeight:1.8,color:"#1e2840",fontFamily:"var(--font-mono)",textAlign:"right",minWidth:36}}>
              {i+1}
            </div>
          ))}
        </div>
        {/* Código con highlighting */}
        <div style={{flex:1,overflow:"auto",padding:"18px 20px"}}>
          <pre style={{margin:0,padding:0,background:"transparent"}} className={`language-${lang==="pseudocódigo"?"":lang}`}>
            <code ref={ref} className={`language-${lang==="pseudocódigo"?"":lang}`} style={{fontFamily:"var(--font-mono)",fontSize:13,lineHeight:1.8,whiteSpace:"pre",display:"block"}}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   CODE EXECUTION — Python via Pyodide (lazy) y JavaScript via Function
================================================================ */
let _pyodide=null,_pyodideP=null;
async function loadPy(){
  if(_pyodide)return _pyodide;
  if(_pyodideP)return _pyodideP;
  _pyodideP=(async()=>{
    await new Promise((res,rej)=>{
      const sc=document.createElement('script');
      sc.src='https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      sc.onload=res;sc.onerror=rej;
      document.head.appendChild(sc);
    });
    _pyodide=await window.loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'});
    return _pyodide;
  })();
  return _pyodideP;
}
async function execPython(code){
  const py=await loadPy();
  let out='';
  py.setStdout({batched:s=>{out+=s;}});
  py.setStderr({batched:s=>{out+='⚠ '+s;}});
  try{await py.runPythonAsync(code);}
  catch(e){out+='❌ '+(e.message||String(e));}
  return out.trim()||'(sin salida)';
}
function execJS(code){
  let out='';
  const cap=(...a)=>{out+=a.map(x=>typeof x==='object'?JSON.stringify(x,null,2):String(x)).join(' ')+'\n';};
  const orig={log:console.log,error:console.error,warn:console.warn};
  console.log=cap;
  console.error=(...a)=>{out+='⚠ '+a.map(String).join(' ')+'\n';};
  console.warn=(...a)=>{out+='⚡ '+a.map(String).join(' ')+'\n';};
  try{new Function(code)();}
  catch(e){out+='❌ '+e.message;}
  finally{Object.assign(console,orig);}
  return out.trim()||'(sin salida)';
}

function ExBox({s,color}){
  const [ans,setAns]=useState("");
  const [hint,setHint]=useState(false);
  const [sol,setSol]=useState(false);
  const [focused,setFocused]=useState(false);
  const [output,setOutput]=useState(null);
  const [running,setRunning]=useState(false);
  const canRun=!!s.lang;

  const handleRun=async()=>{
    if(!ans.trim())return;
    setRunning(true);setOutput(null);
    try{
      const result=s.lang==='javascript'?execJS(ans):await execPython(ans);
      setOutput(result);
    }catch(e){setOutput('❌ Error: '+e.message);}
    setRunning(false);
  };

  return(
    <div style={{margin:"22px 0",border:`1px solid ${color}20`,borderRadius:14,overflow:"hidden",boxShadow:`0 2px 20px ${color}08`}}>
      <div style={{background:`${color}08`,padding:"16px 22px",borderBottom:`1px solid ${color}15`,display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:36,height:36,borderRadius:10,background:`${color}15`,border:`1px solid ${color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>✏️</div>
        <div>
          <Tag color={color}>EJERCICIO</Tag>
          <div style={{fontSize:16,fontWeight:700,color:"#1c1108",marginTop:5,fontFamily:"var(--font-sans)"}}>{s.title}</div>
        </div>
      </div>
      <div style={{padding:"20px 22px",background:"#ffffff"}}>
        <p style={{fontSize:14,color:"#5c4838",lineHeight:1.9,marginBottom:18,fontFamily:"var(--font-sans)"}}>{s.prompt}</p>
        <div style={{borderRadius:10,overflow:"hidden",border:`1px solid ${focused?color+"60":"#e4ddd4"}`,transition:"border-color .2s",boxShadow:focused?`0 0 0 3px ${color}10`:undefined}}>
          <div style={{background:"#040609",padding:"8px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #0f1628"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:"#1e2840"}}/>
              <span style={{fontSize:10,color:"#1e2840",fontFamily:"var(--font-mono)",letterSpacing:1}}>TU SOLUCIÓN</span>
            </div>
            {canRun&&<span style={{fontSize:9,color:`${color}80`,fontFamily:"var(--font-mono)",letterSpacing:1}}>{s.lang.toUpperCase()}</span>}
          </div>
          <textarea
            value={ans}
            onChange={e=>setAns(e.target.value)}
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            placeholder={s.lang==='javascript'?"// Escribe tu código aquí...":"# Escribe tu código aquí..."}
            style={{width:"100%",minHeight:130,background:"#040609",border:"none",padding:"16px 18px",color:"#a0b8d8",fontSize:13,fontFamily:"var(--font-mono)",resize:"vertical",boxSizing:"border-box",outline:"none",lineHeight:1.8,display:"block"}}
          />
        </div>
        <div style={{display:"flex",gap:8,marginTop:12,flexWrap:"wrap",alignItems:"center"}}>
          <button
            onClick={()=>setHint(prev=>!prev)}
            style={{background:hint?"#fef3c7":"#f3f0ea",border:`1px solid ${hint?"#fcd34d80":"#e4ddd4"}`,color:hint?"#d97706":"#8c7c6c",fontSize:10,padding:"7px 16px",borderRadius:7,cursor:"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)"}}>
            {hint?"OCULTAR PISTA":"💡 VER PISTA"}
          </button>
          <button
            onClick={()=>setSol(prev=>!prev)}
            style={{background:sol?`${color}12`:"#f3f0ea",border:`1px solid ${sol?color+"60":"#e4ddd4"}`,color:sol?color:"#8c7c6c",fontSize:10,padding:"7px 16px",borderRadius:7,cursor:"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)"}}>
            {sol?"OCULTAR SOLUCIÓN":"✓ VER SOLUCIÓN"}
          </button>
          {canRun&&(
            <button
              onClick={handleRun}
              disabled={running||!ans.trim()}
              style={{background:running?`${color}08`:`${color}18`,border:`1px solid ${color}${running?"20":"50"}`,color:running?`${color}60`:color,fontSize:10,padding:"7px 20px",borderRadius:7,cursor:running||!ans.trim()?"not-allowed":"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)",fontWeight:700,marginLeft:"auto"}}>
              {running?"⏳ EJECUTANDO...":"▶ EJECUTAR"}
            </button>
          )}
        </div>
        {hint&&(
          <div style={{marginTop:12,padding:"14px 18px",background:"#fbbf2408",borderRadius:9,border:"1px solid #fbbf2420",fontSize:13,color:"#8a7040",lineHeight:1.8,fontFamily:"var(--font-sans)"}}>
            <span style={{color:"#fbbf24",fontWeight:600}}>Pista: </span>{s.hint}
          </div>
        )}
        {output!==null&&(
          <div style={{marginTop:14,borderRadius:10,overflow:"hidden",border:`1px solid ${color}25`}}>
            <div style={{background:"#030508",padding:"8px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${color}18`}}>
              <span style={{fontSize:10,color:color,fontFamily:"var(--font-mono)",letterSpacing:1}}>▶ SALIDA</span>
              <button onClick={()=>setOutput(null)} style={{background:"none",border:"none",color:"#2a3050",cursor:"pointer",fontSize:14,padding:"0 4px",lineHeight:1}}>✕</button>
            </div>
            <pre style={{margin:0,padding:"14px 18px",background:"#030508",fontSize:12,color:output.startsWith("❌")?"#ff6868":output.includes("⚠")?"#fbbf24":"#7fba7f",lineHeight:1.8,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",wordBreak:"break-word",maxHeight:300,overflowY:"auto"}}>{output}</pre>
          </div>
        )}
        {sol&&(
          <div style={{marginTop:14}}>
            <Tag color={color}>SOLUCIÓN PROPUESTA</Tag>
            <div style={{marginTop:10,borderRadius:10,overflow:"hidden",border:`1px solid ${color}20`}}>
              <div style={{background:"#040609",padding:"8px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${color}15`}}>
                <span style={{fontSize:10,color:color,fontFamily:"var(--font-mono)",letterSpacing:1}}>SOLUCIÓN</span>
                <span style={{fontSize:10,color:"#2a3050",fontFamily:"var(--font-sans)"}}>Tu solución puede ser diferente y válida</span>
              </div>
              <pre style={{margin:0,padding:"16px 18px",background:"#05070e",fontSize:13,color:"#7090b0",lineHeight:1.8,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)"}}>{s.solution}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizSection({s,color}){
  const [sel,setSel]=useState(null);
  const done=sel!==null;
  const ok=sel===s.correct;
  return(
    <div className="section-enter" style={{margin:"22px 0",border:`1px solid ${color}30`,borderRadius:14,overflow:"hidden",boxShadow:`0 2px 16px ${color}10`}}>
      <div style={{background:`${color}08`,padding:"16px 22px",borderBottom:`1px solid ${color}18`,display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:38,height:38,borderRadius:11,background:`${color}15`,border:`1px solid ${color}35`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>🧠</div>
        <div style={{flex:1}}>
          <Tag color={color}>QUIZ</Tag>
          <div style={{fontSize:15,fontWeight:700,color:"#1c1108",marginTop:6,fontFamily:"var(--font-sans)",lineHeight:1.4}}>{s.question}</div>
        </div>
      </div>
      <div style={{padding:"18px 22px",background:"#ffffff",display:"flex",flexDirection:"column",gap:8}}>
        {s.options.map((opt,oi)=>{
          const isC=oi===s.correct, isSel=oi===sel;
          let bg="#ffffff",br="#e4ddd4",clr="#5c4838";
          if(done){
            if(isC){bg="#f0fdf4";br="#86efac";clr="#15803d";}
            else if(isSel){bg="#fef2f2";br="#fca5a5";clr="#dc2626";}
          }
          return(
            <button key={oi} onClick={()=>!done&&setSel(oi)}
              style={{background:bg,border:`1px solid ${br}`,borderRadius:9,padding:"11px 16px",textAlign:"left",cursor:done?"default":"pointer",color:clr,fontSize:13,fontFamily:"var(--font-sans)",lineHeight:1.5,transition:"all .2s",display:"flex",alignItems:"center",gap:10,width:"100%"}}
              onMouseEnter={e=>{if(!done)e.currentTarget.style.borderColor=`${color}50`;}}
              onMouseLeave={e=>{if(!done&&sel!==oi)e.currentTarget.style.borderColor="#e4ddd4";}}>
              <span style={{width:22,height:22,borderRadius:6,border:`1px solid ${done&&isC?"#86efac":done&&isSel?"#fca5a5":"#e4ddd4"}`,background:done&&isC?"#dcfce7":done&&isSel?"#fef2f2":"#f3f0ea",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontFamily:"var(--font-mono)",flexShrink:0,color:"inherit",fontWeight:700}}>{String.fromCharCode(65+oi)}</span>
              <span style={{flex:1}}>{opt}</span>
              {done&&isC&&<span style={{color:"#15803d",fontSize:15,flexShrink:0}}>✓</span>}
              {done&&isSel&&!isC&&<span style={{color:"#dc2626",fontSize:15,flexShrink:0}}>✗</span>}
            </button>
          );
        })}
        {done&&(
          <div style={{marginTop:4,padding:"12px 16px",background:ok?"#f0fdf4":"#fef2f2",border:`1px solid ${ok?"#bbf7d0":"#fecaca"}`,borderRadius:9,fontSize:13,color:ok?"#166534":"#991b1b",lineHeight:1.8,fontFamily:"var(--font-sans)"}}>
            <span style={{fontWeight:700,color:ok?"#15803d":"#dc2626"}}>{ok?"✓ Correcto — ":"✗ Incorrecto — "}</span>{s.explanation}
          </div>
        )}
      </div>
    </div>
  );
}

function renderSection(s, color, i){
  if(s.type==="intro") return(
    <div key={i} className="section-enter">
      <Tag color={color}>INTRODUCCIÓN</Tag>
      <h2 style={{fontSize:26,fontWeight:800,color:"#1c1108",margin:"14px 0 18px",lineHeight:1.2,fontFamily:"var(--font-sans)",letterSpacing:-0.5}}>{s.title}</h2>
      <p style={{fontSize:15,color:"#5c4838",lineHeight:2,fontFamily:"var(--font-sans)",margin:0}}>{s.body}</p>
    </div>
  );
  if(s.type==="analogy") return(
    <div key={i} className="section-enter" style={{background:"#ffffff",border:`1px solid ${color}25`,borderLeft:`3px solid ${color}`,borderRadius:12,padding:"20px 24px",margin:"22px 0",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"}}>
      <div style={{fontSize:10,color,letterSpacing:3,marginBottom:10,fontFamily:"var(--font-mono)",display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:18}}>{s.icon}</span>
        {(s.label||"ANALOGÍA").toUpperCase()}
      </div>
      <p style={{fontSize:14,color:"#5c4838",lineHeight:2,margin:0,fontFamily:"var(--font-sans)"}}>{s.body}</p>
    </div>
  );
  if(s.type==="insight") return(
    <div key={i} className="section-enter" style={{background:"#ffffff",border:"1px solid #38bdf830",borderLeft:"3px solid #38bdf8",borderRadius:12,padding:"20px 24px",margin:"22px 0",display:"flex",gap:14,alignItems:"flex-start",boxShadow:"0 2px 12px rgba(56,189,248,0.07)"}}>
      <span style={{fontSize:22,flexShrink:0,marginTop:2}}>{s.icon}</span>
      <p style={{fontSize:14,color:"#5c4838",lineHeight:2,margin:0,fontFamily:"var(--font-sans)"}}>{s.body}</p>
    </div>
  );
  if(s.type==="code") return <CodeBox key={i} code={s.code} lang={s.lang} label={s.label}/>;
  if(s.type==="exercise") return <ExBox key={i} s={s} color={color}/>;
  if(s.type==="pillars") return(
    <div key={i} className="section-enter" style={{margin:"22px 0"}}>
      <Tag color={color}>{(s.title||"").toUpperCase()}</Tag>
      {s.note&&<p style={{fontSize:13,color:"#8c7c6c",margin:"10px 0 18px",fontFamily:"var(--font-sans)",lineHeight:1.7}}>{s.note}</p>}
      <div className="pillars-grid" style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(s.items.length,3)},1fr)`,gap:12}}>
        {s.items.map((p,j)=>(
          <div key={j} style={{background:"#ffffff",border:"1px solid #e4ddd4",borderRadius:12,padding:"22px 16px",textAlign:"center",transition:"all .2s",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=`${color}45`;e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 20px ${color}12`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#e4ddd4";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.04)";}}>
            <div style={{fontSize:28,marginBottom:12}}>{p.i}</div>
            <div style={{fontSize:10,color,letterSpacing:2,marginBottom:8,fontFamily:"var(--font-mono)"}}>{p.t}</div>
            <div style={{fontSize:12,color:"#8c7c6c",lineHeight:1.7,fontFamily:"var(--font-sans)"}}>{p.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
  if(s.type==="quiz") return <QuizSection key={i} s={s} color={color}/>;
  if(s.type==="capstone") return(
    <div key={i} className="section-enter" style={{margin:"22px 0",border:`1px solid ${color}35`,borderRadius:16,overflow:"hidden",boxShadow:`0 4px 24px ${color}10`}}>
      <div style={{padding:"20px 24px",borderBottom:`1px solid ${color}20`,background:`${color}08`,display:"flex",alignItems:"center",gap:14}}>
        <div style={{fontSize:36,flexShrink:0}}>🏆</div>
        <div>
          <Tag color={color}>PROYECTO CAPSTONE</Tag>
          <div style={{fontSize:19,fontWeight:800,color:"#1c1108",marginTop:6,fontFamily:"var(--font-sans)",letterSpacing:-0.3}}>{s.title}</div>
        </div>
      </div>
      <div style={{padding:"22px 24px",background:"#ffffff"}}>
        <p style={{fontSize:14,color:"#5c4838",lineHeight:2,marginBottom:20,fontFamily:"var(--font-sans)"}}>{s.description}</p>
        {s.requirements&&(
          <div style={{marginBottom:18}}>
            <div style={{fontSize:9,color,letterSpacing:3,fontFamily:"var(--font-mono)",marginBottom:14}}>REQUERIMIENTOS</div>
            {s.requirements.map((req,j)=>(
              <div key={j} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid #ede8e2"}}>
                <div style={{width:24,height:24,borderRadius:7,border:`1px solid ${color}35`,background:`${color}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color,fontFamily:"var(--font-mono)",fontWeight:800,flexShrink:0,marginTop:1}}>{j+1}</div>
                <div style={{fontSize:13,color:"#5c4838",lineHeight:1.8,fontFamily:"var(--font-sans)"}}>{req}</div>
              </div>
            ))}
          </div>
        )}
        {s.bonus&&(
          <div style={{padding:"12px 16px",background:"#fef3c7",border:"1px solid #fcd34d50",borderRadius:9}}>
            <span style={{fontSize:9,color:"#d97706",letterSpacing:2,fontFamily:"var(--font-mono)"}}>⭐ BONUS  </span>
            <span style={{fontSize:13,color:"#92400e",fontFamily:"var(--font-sans)"}}>{s.bonus}</span>
          </div>
        )}
      </div>
    </div>
  );
  return null;
}

/* ================================================================
   LESSON VIEW
================================================================ */
function XpBurst({xp,color}){
  return(
    <div className="xp-burst" style={{color,textShadow:`0 0 20px ${color}`,top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
      +{xp} XP ✓
    </div>
  );
}

function LessonView({lesson,level,done,onComplete,onBack}){
  const [sec,setSec]=useState(0);
  const [burst,setBurst]=useState(false);
  const {color}=level;
  const steps=[...lesson.sections,...(lesson.quiz?[{type:"quiz",...lesson.quiz}]:[])];
  const total=steps.length;
  const isLast=sec===total-1;
  const pct=Math.round(((sec+1)/total)*100);

  // Keyboard navigation
  useEffect(()=>{
    const handler=(e)=>{
      if(e.target.tagName==="TEXTAREA") return;
      if(e.key==="ArrowRight"&&sec<total-1) setSec(s=>s+1);
      if(e.key==="ArrowLeft"&&sec>0) setSec(s=>s-1);
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[sec,total]);

  const handleComplete=()=>{
    if(!done){
      setBurst(true);
      setTimeout(()=>setBurst(false),1200);
    }
    onComplete(lesson.id,lesson.xp);
    onBack();
  };

  return(
    <div style={{display:"flex",flexDirection:"column",height:"100vh",background:"#f7f4ef",overflowY:"auto",position:"relative"}}>
      {burst&&<XpBurst xp={lesson.xp} color={color}/>}

      {/* Topbar */}
      <div style={{position:"sticky",top:0,zIndex:10,background:"rgba(247,244,239,0.93)",backdropFilter:"blur(16px)",borderBottom:"1px solid #e4ddd4",padding:"12px 24px",display:"flex",alignItems:"center",gap:14}}>
        <button onClick={onBack}
          style={{background:"#ffffff",border:"1px solid #e4ddd4",color:"#8c7c6c",width:34,height:34,borderRadius:9,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=color;e.currentTarget.style.color=color;}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#e4ddd4";e.currentTarget.style.color="#8c7c6c";}}>
          ←
        </button>
        <div style={{flex:1}}>
          <div style={{fontSize:9,color,letterSpacing:3,marginBottom:3,fontFamily:"var(--font-mono)"}}>NVL {level.num} · {level.title.toUpperCase()}</div>
          <div style={{fontSize:14,fontWeight:600,color:"#1c1108",fontFamily:"var(--font-sans)"}}>{lesson.title}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:11,color:"#b0a090",fontFamily:"var(--font-mono)"}}>{sec+1}/{total}</div>
          <div style={{fontSize:9,color,fontFamily:"var(--font-mono)"}}>{lesson.xp} XP</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{height:3,background:"#e8e2d8",flexShrink:0}}>
        <div style={{height:"100%",width:`${pct}%`,background:`linear-gradient(90deg,${color},${color}90)`,transition:"width .4s ease"}}/>
      </div>

      {/* Content */}
      <div style={{flex:1,padding:"clamp(16px,4vw,32px) clamp(14px,4vw,24px)",maxWidth:720,width:"100%",margin:"0 auto",boxSizing:"border-box"}}>
        {renderSection(steps[sec], color, sec)}
      </div>

      {/* Nav bar */}
      <div style={{position:"sticky",bottom:0,background:"rgba(247,244,239,0.93)",backdropFilter:"blur(16px)",borderTop:"1px solid #e4ddd4",padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
        <button onClick={()=>setSec(s=>Math.max(0,s-1))} disabled={sec===0}
          style={{background:"#ffffff",border:`1px solid ${sec===0?"#ede8e2":"#e4ddd4"}`,color:sec===0?"#d4ccc4":"#8c7c6c",fontSize:11,padding:"9px 20px",borderRadius:9,cursor:sec===0?"not-allowed":"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)",boxShadow:sec===0?"none":"0 1px 3px rgba(0,0,0,0.05)"}}>
          ← <span className="nav-btn-text">ATRÁS</span>
        </button>

        {/* Dots */}
        <div style={{display:"flex",gap:5,alignItems:"center"}}>
          {steps.map((_,i)=>(
            <div key={i} onClick={()=>setSec(i)}
              style={{width:i===sec?18:6,height:6,borderRadius:3,background:i<sec?`${color}60`:i===sec?color:"#d4ccc4",transition:"all .3s ease",cursor:"pointer"}}/>
          ))}
        </div>

        {isLast?(
          <button onClick={handleComplete}
            style={{background:done?"#f0fdf4":`${color}12`,border:`1px solid ${done?"#bbf7d0":color+"50"}`,color:done?"#15803d":color,fontSize:11,padding:"9px 22px",borderRadius:9,cursor:"pointer",letterSpacing:1,transition:"all .2s",fontWeight:700,fontFamily:"var(--font-mono)"}}>
            {done?"✓ COMPLETADA":`COMPLETAR +${lesson.xp}XP`}
          </button>
        ):(
          <button onClick={()=>setSec(s=>Math.min(total-1,s+1))}
            style={{background:`${color}12`,border:`1px solid ${color}45`,color,fontSize:11,padding:"9px 22px",borderRadius:9,cursor:"pointer",letterSpacing:1,transition:"all .2s",fontFamily:"var(--font-mono)"}}>
            <span className="nav-btn-text">SIGUIENTE</span> →
          </button>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   LEVEL VIEW
================================================================ */
function LevelView({level,progress,onLesson,onBack}){
  const done=level.lessons.filter(l=>progress.done[l.id]).length;
  const total=level.lessons.length;
  const pct=total?Math.round((done/total)*100):0;
  const {color}=level;

  return(
    <div style={{display:"flex",flexDirection:"column",height:"100vh",background:"#f7f4ef"}}>
      {/* Header */}
      <div style={{background:"rgba(247,244,239,0.93)",backdropFilter:"blur(16px)",borderBottom:"1px solid #e4ddd4",padding:"20px 24px"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:18}}>
          <button onClick={onBack}
            style={{background:"#ffffff",border:"1px solid #e4ddd4",color:"#8c7c6c",width:34,height:34,borderRadius:9,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=color;e.currentTarget.style.color=color;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#e4ddd4";e.currentTarget.style.color="#8c7c6c";}}>
            ←
          </button>
          <div style={{flex:1}}>
            <div style={{fontSize:9,color,letterSpacing:3,marginBottom:4,fontFamily:"var(--font-mono)"}}>NIVEL {level.num}</div>
            <div style={{fontSize:22,fontWeight:800,color:"#1c1108",fontFamily:"var(--font-sans)",letterSpacing:-0.5}}>{level.title}</div>
            <div style={{fontSize:12,color:"#8c7c6c",fontFamily:"var(--font-sans)",marginTop:2}}>{level.sub}</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"var(--font-pct)",fontWeight:900,color,lineHeight:1,fontFamily:"var(--font-mono)"}}>{pct}%</div>
            <div style={{fontSize:9,color:"#b0a090",letterSpacing:1,fontFamily:"var(--font-mono)",marginTop:2}}>{done}/{total} lecciones</div>
          </div>
        </div>
        <div style={{height:3,background:"#e8e2d8",borderRadius:2}}>
          <div style={{height:"100%",width:`${pct}%`,background:`linear-gradient(90deg,${color},${color}90)`,borderRadius:2,transition:"width .5s ease"}}/>
        </div>
      </div>

      {/* Lessons list */}
      <div style={{flex:1,overflowY:"auto",padding:"var(--pad-section)",display:"flex",flexDirection:"column",gap:10}}>
        {level.locked?(
          <div style={{textAlign:"center",padding:"80px 20px"}}>
            <div style={{fontSize:52,marginBottom:16}}>🔒</div>
            <div style={{fontSize:15,color:"#8c7c6c",fontFamily:"var(--font-sans)"}}>Completa el nivel anterior para desbloquear</div>
          </div>
        ):level.lessons.length===0?(
          <div style={{textAlign:"center",padding:"80px 20px"}}>
            <div style={{fontSize:44,marginBottom:12}}>🚧</div>
            <div style={{fontSize:14,color:"#8c7c6c",fontFamily:"var(--font-sans)"}}>Lecciones en construcción</div>
          </div>
        ):(
          level.lessons.map((lesson,i)=>{
            const isDone=!!progress.done[lesson.id];
            const prevOk=i===0||!!progress.done[level.lessons[i-1].id];
            return(
              <div key={lesson.id}
                onClick={()=>prevOk&&onLesson(lesson)}
                style={{background:"#ffffff",border:`1px solid ${isDone?color+"50":prevOk?"#e4ddd4":"#ede8e2"}`,borderRadius:13,padding:"18px 20px",cursor:prevOk?"pointer":"not-allowed",opacity:prevOk?1:0.4,transition:"all .2s",display:"flex",alignItems:"center",gap:16,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
                onMouseEnter={e=>{if(prevOk){e.currentTarget.style.borderColor=isDone?color+"80":`${color}50`;e.currentTarget.style.transform="translateX(3px)";e.currentTarget.style.boxShadow=`0 4px 16px ${color}12`;}}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=isDone?color+"50":prevOk?"#e4ddd4":"#ede8e2";e.currentTarget.style.transform="translateX(0)";e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.04)";}}>
                {/* Index badge */}
                <div style={{width:40,height:40,borderRadius:11,background:isDone?`${color}12`:"#f3f0ea",border:`1px solid ${isDone?color+"50":"#e4ddd4"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:isDone?color:"#8c7c6c",fontWeight:800,flexShrink:0,fontFamily:"var(--font-mono)"}}>
                  {isDone?"✓":String(i+1).padStart(2,"0")}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:15,fontWeight:600,color:prevOk?"#1c1108":"#b0a090",marginBottom:4,fontFamily:"var(--font-sans)"}}>{lesson.title}</div>
                  <div style={{fontSize:11,color:"#b0a090",fontFamily:"var(--font-mono)",display:"flex",gap:12}}>
                    <span>⏱ {lesson.mins} min</span>
                    <span style={{color:isDone?color:"#b0a090"}}>◆ {lesson.xp} XP</span>
                  </div>
                </div>
                <div style={{fontSize:isDone?10:18,color:isDone?color:"#d4ccc4",letterSpacing:isDone?2:0,fontFamily:isDone?"var(--font-mono)":undefined}}>
                  {isDone?`+${lesson.xp}XP`:prevOk?"→":"🔒"}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

/* ================================================================
   ACHIEVEMENTS PANEL
================================================================ */
function AchievementsPanel({progress,onClose}){
  const unlocked=ACHIEVEMENTS.filter(a=>a.check(progress));
  const locked=ACHIEVEMENTS.filter(a=>!a.check(progress));
  const color="#f59e0b";

  return(
    <div style={{position:"fixed",inset:0,zIndex:50,background:"rgba(28,17,8,0.55)",backdropFilter:"blur(4px)",display:"flex",alignItems:"flex-end",justifyContent:"center"}}
      onClick={onClose}>
      <div style={{background:"#f7f4ef",borderRadius:"20px 20px 0 0",width:"100%",maxWidth:560,maxHeight:"80vh",overflowY:"auto",padding:"24px var(--pad-page) 32px"}}
        onClick={e=>e.stopPropagation()}>
        <div style={{width:40,height:4,background:"#d4ccc4",borderRadius:2,margin:"0 auto 20px"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <div>
            <div style={{fontSize:9,color:"#b0a090",letterSpacing:3,fontFamily:"var(--font-mono)",marginBottom:4}}>LOGROS</div>
            <div style={{fontSize:20,fontWeight:800,color:"#1c1108",fontFamily:"var(--font-sans)",letterSpacing:-0.5}}>
              {unlocked.length} / {ACHIEVEMENTS.length}
            </div>
          </div>
          <button onClick={onClose}
            style={{background:"#ffffff",border:"1px solid #e4ddd4",color:"#8c7c6c",width:34,height:34,borderRadius:9,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>
            ✕
          </button>
        </div>

        {unlocked.length>0&&(
          <>
            <div style={{fontSize:9,color,letterSpacing:3,fontFamily:"var(--font-mono)",marginBottom:12}}>DESBLOQUEADOS</div>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
              {unlocked.map(a=>(
                <div key={a.id} style={{background:"#ffffff",border:`1px solid ${color}40`,borderLeft:`3px solid ${color}`,borderRadius:10,padding:"12px 16px",display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:24,flexShrink:0}}>{a.icon}</span>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:"#1c1108",fontFamily:"var(--font-sans)"}}>{a.title}</div>
                    <div style={{fontSize:11,color:"#8c7c6c",fontFamily:"var(--font-sans)",marginTop:2}}>{a.desc}</div>
                  </div>
                  <div style={{marginLeft:"auto",fontSize:9,color,letterSpacing:2,fontFamily:"var(--font-mono)"}}>✓ LOGRADO</div>
                </div>
              ))}
            </div>
          </>
        )}

        {locked.length>0&&(
          <>
            <div style={{fontSize:9,color:"#b0a090",letterSpacing:3,fontFamily:"var(--font-mono)",marginBottom:12}}>PENDIENTES</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {locked.map(a=>(
                <div key={a.id} style={{background:"#f3f0ea",border:"1px solid #e4ddd4",borderRadius:10,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,opacity:0.6}}>
                  <span style={{fontSize:24,flexShrink:0,filter:"grayscale(1)"}}>{a.icon}</span>
                  <div>
                    <div style={{fontSize:13,fontWeight:600,color:"#8c7c6c",fontFamily:"var(--font-sans)"}}>{a.title}</div>
                    <div style={{fontSize:11,color:"#b0a090",fontFamily:"var(--font-sans)",marginTop:2}}>{a.desc}</div>
                  </div>
                  <div style={{marginLeft:"auto",fontSize:9,color:"#d4ccc4",letterSpacing:2,fontFamily:"var(--font-mono)"}}>🔒</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   HOME
================================================================ */
function Home({curriculum,progress,onLevel}){
  const [showAch,setShowAch]=useState(false);
  const totalL=curriculum.reduce((a,l)=>a+l.lessons.length,0);
  const doneL=Object.keys(progress.done).length;
  const gPct=totalL?Math.round((doneL/totalL)*100):0;
  const totalXp=curriculum.reduce((a,l)=>a+l.lessons.reduce((b,ls)=>b+ls.xp,0),0);

  return(
    <div style={{minHeight:"100vh",background:"#f7f4ef",display:"flex",flexDirection:"column"}}>
      {/* Hero */}
      <div style={{padding:"var(--pad-page)",position:"relative",overflow:"hidden"}}>
        {/* Dot pattern decorativo */}
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(#d4ccc460 1px,transparent 1px)",backgroundSize:"24px 24px",pointerEvents:"none"}}/>
        {/* Warm orb */}
        <div style={{position:"absolute",top:-80,left:"50%",transform:"translateX(-50%)",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,#f59e0b08 0%,transparent 65%)",pointerEvents:"none",filter:"blur(20px)"}}/>

        <div style={{position:"relative"}}>
          <div style={{fontSize:9,letterSpacing:5,color:"#b0a090",marginBottom:12,fontFamily:"var(--font-mono)"}}>DEV PROTAGONIST · DANNY · CHALCO MX</div>

          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28}}>
            <div>
              <h1 style={{fontSize:"var(--font-hero)",fontWeight:900,margin:0,color:"#1c1108",letterSpacing:-2,lineHeight:1,fontFamily:"var(--font-sans)"}}>
                DEV PROTAGONIST
                <br/>
                <span style={{color:"#059669"}}>ACADEMY</span>
                <span style={{color:"#059669",fontFamily:"var(--font-mono)"}}>_</span>
              </h1>
              <div style={{fontSize:12,color:"#8c7c6c",marginTop:10,fontFamily:"var(--font-sans)"}}>De cero absoluto hasta construir tu propia IA</div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:9,color:"#b0a090",letterSpacing:3,marginBottom:6,fontFamily:"var(--font-mono)"}}>XP ACUMULADO</div>
              <div style={{fontSize:"var(--font-xp)",fontWeight:900,color:"#1c1108",lineHeight:1,fontFamily:"var(--font-mono)"}}>{progress.xp.toLocaleString()}</div>
              <div style={{fontSize:9,color:"#b0a090",marginTop:4,fontFamily:"var(--font-mono)"}}>/ {totalXp.toLocaleString()} XP</div>
              {(progress.streak||0)>0&&(
                <div style={{fontSize:11,color:"#fb923c",marginTop:8,fontFamily:"var(--font-mono)"}}>🔥 {progress.streak} {progress.streak===1?"día":"días"}</div>
              )}
            </div>
          </div>

          {/* Stats row */}
          <div style={{display:"flex",gap:"clamp(8px,3vw,16px)",marginBottom:20}}>
            {[
              {label:"LECCIONES",val:`${doneL}/${totalL}`,color:"#059669"},
              {label:"COMPLETADO",val:`${gPct}%`,color:"#0369a1"},
              {label:"NIVELES",val:`${curriculum.filter(l=>!l.locked).length}/6`,color:"#7c3aed"},
              {label:"LOGROS",val:`${ACHIEVEMENTS.filter(a=>a.check(progress)).length}/${ACHIEVEMENTS.length}`,color:"#f59e0b",onClick:()=>setShowAch(true)},
            ].map(stat=>(
              <div key={stat.label} onClick={stat.onClick}
                style={{flex:1,background:"#ffffff",border:"1px solid #e4ddd4",borderRadius:10,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",cursor:stat.onClick?"pointer":"default",transition:"all .2s"}}
                onMouseEnter={e=>{if(stat.onClick){e.currentTarget.style.borderColor="#fcd34d80";e.currentTarget.style.boxShadow="0 4px 12px #f59e0b12";}}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e4ddd4";e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.04)";}}>
                <div style={{fontSize:9,color:"#b0a090",letterSpacing:2,marginBottom:6,fontFamily:"var(--font-mono)"}}>{stat.label}</div>
                <div style={{fontSize:20,fontWeight:800,color:stat.color,fontFamily:"var(--font-mono)"}}>{stat.val}</div>
              </div>
            ))}
          </div>

          {/* Barra global */}
          <div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"#b0a090",letterSpacing:2,marginBottom:8,fontFamily:"var(--font-mono)"}}>
              <span>PROGRESO GLOBAL</span>
              <span>{gPct}%</span>
            </div>
            <div style={{height:5,background:"#e8e2d8",borderRadius:3,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${gPct}%`,background:"linear-gradient(90deg,#059669,#0369a1,#7c3aed)",borderRadius:3,transition:"width .8s ease"}}/>
            </div>
          </div>
        </div>
      </div>

      {/* Level cards */}
      <div style={{flex:1,overflowY:"auto",padding:`4px var(--pad-page) var(--pad-page)`,display:"flex",flexDirection:"column",gap:12}}>
        {curriculum.map((lvl)=>{
          const lDone=lvl.lessons.filter(l=>progress.done[l.id]).length;
          const lTotal=lvl.lessons.length;
          const lPct=lTotal?Math.round((lDone/lTotal)*100):0;
          const active=!lvl.locked;

          return(
            <div key={lvl.id}
              onClick={()=>active&&onLevel(lvl)}
              style={{background:"#ffffff",border:`1px solid ${active?lvl.border:"#ede8e2"}`,borderLeft:`4px solid ${active?lvl.color:"#e4ddd4"}`,borderRadius:14,padding:"20px 22px",cursor:active?"pointer":"not-allowed",opacity:active?1:0.4,transition:"all .25s",position:"relative",overflow:"hidden",boxShadow:"0 1px 6px rgba(0,0,0,0.05)"}}
              onMouseEnter={e=>{if(active){e.currentTarget.style.borderColor=lvl.color+"60";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 8px 28px ${lvl.color}14`;}}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=active?lvl.border:"#ede8e2";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 1px 6px rgba(0,0,0,0.05)";}}>

              <div style={{display:"flex",alignItems:"center",gap:16,position:"relative"}}>
                {/* Emoji badge */}
                <div style={{width:52,height:52,borderRadius:15,background:active?`${lvl.color}10`:"#f3f0ea",border:`1px solid ${active?lvl.border:"#e4ddd4"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>
                  {lvl.locked?"🔒":lvl.emoji}
                </div>

                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5,flexWrap:"wrap"}}>
                    <span style={{fontSize:9,color:lvl.color,letterSpacing:3,fontFamily:"var(--font-mono)"}}>NIVEL {lvl.num}</span>
                    {lPct===100&&(
                      <span style={{fontSize:8,color:lvl.color,background:`${lvl.color}12`,border:`1px solid ${lvl.border}`,padding:"2px 9px",borderRadius:10,fontFamily:"var(--font-mono)",letterSpacing:1}}>✓ COMPLETADO</span>
                    )}
                  </div>
                  <div style={{fontSize:17,fontWeight:700,color:active?"#1c1108":"#b0a090",marginBottom:3,fontFamily:"var(--font-sans)",letterSpacing:-0.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{lvl.title}</div>
                  <div style={{fontSize:12,color:"#8c7c6c",fontFamily:"var(--font-sans)"}}>{lvl.sub}</div>
                </div>

                <div style={{textAlign:"right",flexShrink:0}}>
                  {lTotal>0&&<div style={{fontSize:26,fontWeight:900,color:lvl.color,lineHeight:1,fontFamily:"var(--font-mono)"}}>{lPct}%</div>}
                  <div style={{fontSize:9,color:"#b0a090",marginTop:3,fontFamily:"var(--font-mono)"}}>{lTotal>0?`${lDone}/${lTotal} lec`:"Próx."}</div>
                </div>
              </div>

              {/* Barra de nivel */}
              {lTotal>0&&active&&(
                <div style={{marginTop:14,height:2,background:"#e8e2d8",borderRadius:1,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${lPct}%`,background:`linear-gradient(90deg,${lvl.color},${lvl.color}80)`,transition:"width .6s ease"}}/>
                </div>
              )}

              {/* Dots de lecciones */}
              {lTotal>0&&active&&(
                <div style={{marginTop:10,display:"flex",gap:5,flexWrap:"wrap"}}>
                  {lvl.lessons.map(l=>(
                    <div key={l.id} style={{width:8,height:8,borderRadius:"50%",background:progress.done[l.id]?lvl.color:"#e4ddd4",transition:"all .3s"}}/>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Meta final */}
        <div style={{border:"1px dashed #d4ccc4",borderRadius:16,padding:"28px",textAlign:"center",marginTop:4,background:"#ffffff",boxShadow:"0 1px 4px rgba(0,0,0,0.03)"}}>
          <div style={{fontSize:36,marginBottom:10}}>🤖</div>
          <div style={{fontSize:9,color:"#0369a1",letterSpacing:3,marginBottom:8,fontFamily:"var(--font-mono)"}}>META FINAL</div>
          <div style={{fontSize:13,color:"#5c4838",lineHeight:1.8,fontFamily:"var(--font-sans)"}}>
            Una IA con tu personalidad, tu conocimiento<br/>y tus protocolos — <span style={{color:"#0369a1"}}>100% tuya</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{padding:"14px var(--pad-page)",borderTop:"1px solid #e4ddd4",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#ffffff",flexWrap:"wrap",gap:8}}>
        <span style={{fontSize:9,color:"#b0a090",letterSpacing:2,fontFamily:"var(--font-mono)"}}>DEV PROTAGONIST ACADEMY v2</span>
        <span style={{fontSize:10,color:"#8c7c6c",fontFamily:"var(--font-sans)"}}>© {new Date().getFullYear()} H. D. Halliwell. Todos los derechos reservados. Genius Cooper™</span>
      </div>

      {showAch&&<AchievementsPanel progress={progress} onClose={()=>setShowAch(false)}/>}
    </div>
  );
}

/* ================================================================
   APP ROOT
================================================================ */
export default function App(){
  const [progress,setProgress]=useState(loadP);
  const [view,setView]=useState("home");
  const [selLevel,setSelLevel]=useState(null);
  const [selLesson,setSelLesson]=useState(null);

  useEffect(()=>{ setProgress(p=>updateStreak(p)); },[]);
  useEffect(()=>saveP(progress),[progress]);

  // Unlock levels dynamically
  const curriculum=LEVELS.map((lvl,i)=>{
    if(i<=1) return{...lvl,locked:false};
    const prev=LEVELS[i-1];
    const prevDone=prev.lessons.length>0&&prev.lessons.every(l=>progress.done[l.id]);
    return{...lvl,locked:!prevDone};
  });

  const handleComplete=(id,xp)=>{
    setProgress(p=>{
      if(p.done[id]) return p;
      return{...p,done:{...p.done,[id]:true},xp:p.xp+xp};
    });
  };

  if(view==="lesson"&&selLesson&&selLevel){
    return <LessonView lesson={selLesson} level={selLevel} done={!!progress.done[selLesson.id]} onComplete={handleComplete} onBack={()=>setView("level")}/>;
  }
  if(view==="level"&&selLevel){
    const enriched=curriculum.find(l=>l.id===selLevel.id);
    return <LevelView level={enriched} progress={progress} onLesson={l=>{setSelLesson(l);setView("lesson");}} onBack={()=>setView("home")}/>;
  }
  return <Home curriculum={curriculum} progress={progress} onLevel={l=>{setSelLevel(l);setView("level");}}/>;
}

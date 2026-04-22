# CI/CD Demo Exposición

Un proyecto simple en Node.js para demostrar **Integración Continua (CI)** y **Despliegue Continuo (CD)** usando GitHub Actions y Railway.

---

## ¿Qué es CI/CD?

### CI - Integración Continua
Es la práctica de integrar cambios de código a un repositorio compartido frecuentemente. Cada integración se verifica automáticamente con tests para detectar errores rápidamente.

### CD - Despliegue Continuo
Es la automatización del proceso de despliegue. El código que pasa todas las pruebas se despliega automáticamente a producción.

---

## Estructura del Proyecto

```
.
├── .github/workflows/ci.yml    # Pipeline de CI/CD
├── index.js                    # Servidor HTTP
├── sum.js                      # Función de suma
├── sum.test.js                 # Tests con Jest
├── sum-buggy.js                # Versión con error (para demo)
├── package.json                # Configuración del proyecto
└── README.md                   # Este archivo
```

---

## Cómo Funciona el Pipeline

El pipeline de CI se ejecuta automáticamente en cada `push` a la rama `main`:

1. **Checkout**: Descarga el código del repositorio
2. **Setup Node.js**: Instala Node.js v18
3. **Install**: Instala las dependencias (`npm ci`)
4. **Test**: Ejecuta los tests con Jest

Si todos los tests pasan ✅, el código está listo para desplegarse.

---

## Ejecutar Localmente

### Requisitos
- Node.js v18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/sergiovillalobosalejandro-bit/ci-cd-demo-exposicion.git
cd ci-cd-demo-exposicion

# 2. Instalar dependencias
npm install

# 3. Ejecutar tests
npm test

# 4. Iniciar el servidor
npm start
```

El servidor estará disponible en `http://localhost:3000`

---

## Despliegue en Railway

Railway detecta automáticamente proyectos Node.js y usa el script `start` definido en `package.json`.

### Pasos para desplegar:

1. Crea una cuenta en [Railway](https://railway.app)
2. Haz clic en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Conecta tu cuenta de GitHub y selecciona este repositorio
5. Railway detectará automáticamente:
   - Node.js como runtime
   - El comando `npm start` para iniciar
6. Clic en "Deploy"

**Railway automáticamente:**
- Detecta que es un proyecto Node.js
- Instala dependencias con `npm install`
- Ejecuta `npm start` usando el puerto dinámico asignado
- Provee una URL pública

---

## Demo: Romper el Pipeline Intencionalmente

Para demostrar cómo CI detecta errores, incluimos `sum-buggy.js`:

```javascript
// Versión con BUG: suma 1 extra
function sum(a, b) {
  return a + b + 1;  // ERROR: +1 no debería estar aquí
}

module.exports = sum;
```

### Para romper el pipeline en vivo:

1. Copia el contenido de `sum-buggy.js` y pégalo en `sum.js`
2. Haz commit y push:
   ```bash
   git add sum.js
   git commit -m "Demo: Introduciendo bug intencional"
   git push origin main
   ```
3. Ve a la pestaña **Actions** en GitHub
4. Verás el pipeline fallando ❌
5. El error mostrará: `Expected: 3, Received: 4`

### Para arreglarlo:

1. Revertir el cambio o restaurar la versión correcta de `sum.js`
2. Commit y push:
   ```bash
   git add sum.js
   git commit -m "Fix: Corregido bug en función sum"
   git push origin main
   ```
3. El pipeline pasará nuevamente ✅

---

## Comandos Git Útiles

```bash
# Inicializar repositorio local
git init

# Agregar remote
git remote add origin https://github.com/sergiovillalobosalejandro-bit/ci-cd-demo-exposicion.git

# Agregar archivos al staging
git add .

# Crear commit
git commit -m "Mensaje descriptivo"

# Subir cambios
git push origin main

# Ver estado
git status

# Ver historial
git log --oneline
```

---

## Tecnologías Usadas

- **Node.js**: Runtime de JavaScript
- **Jest**: Framework de testing
- **GitHub Actions**: Plataforma de CI/CD
- **Railway**: Plataforma de hosting

---

## Autor

Creado para una demostración de CI/CD.

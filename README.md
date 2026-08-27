# Desarrollo de una SPA con React y TypeScript

Debes construir una aplicación de página única (SPA) que gestione un catálogo de productos. La aplicación debe permitir a los usuarios ver, agregar y eliminar productos. Los productos tienen atributos como nombre, precio, descripción y categoría. Debes asegurarte de que los nombres de los productos sean únicos y que los precios no sean negativos. La aplicación debe ser robusta y manejar correctamente los errores y casos límite del dominio.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React TypeScript |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del proyecto y estructura básica

**Objetivo:** Configurar el proyecto de React con TypeScript y establecer la estructura básica de la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura un proyecto de React con TypeScript.
- Define la estructura básica de la aplicación con componentes para la lista de productos y el formulario de producto.

**Entregable:** Proyecto de React con TypeScript configurado y estructura básica de componentes.

<details>
<summary>Pistas de conocimiento</summary>

- Usa TypeScript para definir interfaces y tipos para los productos.
- Organiza los componentes en carpetas lógicas.

</details>

### Fase 2: Implementación de la lógica de productos

**Objetivo:** Implementar la lógica para mostrar, agregar y eliminar productos, asegurando la unicidad de nombres y la validación de precios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa la lógica para mostrar la lista de productos.
- Crea un formulario para agregar nuevos productos, asegurando que los nombres sean únicos y los precios no sean negativos.
- Implementa la funcionalidad para eliminar productos.

**Entregable:** Aplicación que muestra, agrega y elimina productos con validaciones de unicidad y precios.

<details>
<summary>Pistas de conocimiento</summary>

- Usa hooks de React para manejar el estado de los productos.
- Implementa validaciones en el formulario para asegurar la unicidad de nombres y la validación de precios.

</details>

### Fase 3: Mejoras y refactorización

**Objetivo:** Refactorizar el código para mejorar la legibilidad y mantenibilidad, y agregar funcionalidades adicionales como la búsqueda de productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Refactoriza el código para mejorar la legibilidad y mantenibilidad.
- Agrega una funcionalidad de búsqueda para filtrar productos por nombre o categoría.

**Entregable:** Aplicación refactorizada con funcionalidad de búsqueda de productos.

<details>
<summary>Pistas de conocimiento</summary>

- Usa la Context API para gestionar el estado global de los productos.
- Implementa la funcionalidad de búsqueda usando hooks y la Context API.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un hook en React y para qué se usa?
- **paraQueSirve**: ¿Para qué sirve la Context API en React?
- **comoSeUsa**: ¿Cómo se usa TypeScript para definir interfaces y tipos en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al validar datos en un formulario de React y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de una funcionalidad de búsqueda en una aplicación de React?

## Criterios de Evaluacion

- Configurar correctamente un proyecto de React con TypeScript.
- Implementar la lógica para mostrar, agregar y eliminar productos con validaciones.
- Refactorizar el código para mejorar la legibilidad y mantenibilidad.
- Agregar una funcionalidad de búsqueda para filtrar productos.

---

*Reto generado automaticamente por Challenge Generator - Pragma*

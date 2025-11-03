# 📋 TaskBoard - Lista de Tareas Colaborativa

Aplicación web de gestión de tareas desarrollada con **React** y **Redux** como proyecto para el examen parcial de Programación Web.

![TaskBoard Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📚 Descripción del Proyecto

TaskBoard es una aplicación de gestión de tareas que permite a los usuarios crear, completar y eliminar tareas de manera intuitiva. El proyecto fue desarrollado como parte del examen parcial de Programación Web, enfocándose en el uso de **Redux** para el manejo del estado global en aplicaciones React.

## 🎯 Objetivos del Examen

### Sección I - Conceptos Fundamentales

**1. ¿Qué es Redux y su ventaja principal?**
- Redux es una biblioteca de gestión de estado predecible para JavaScript
- **Ventaja principal**: Centraliza el estado en un store global accesible desde cualquier componente, evitando el "prop drilling" y facilitando el debugging

**2. Tres componentes fundamentales de Redux:**
- **Store**: Contenedor único del estado global de la aplicación
- **Actions**: Objetos que describen QUÉ sucedió en la aplicación
- **Reducers**: Funciones puras que determinan CÓMO cambia el estado

**3. Papel del Reducer:**
El reducer es una función pura que recibe el estado actual y una acción, retornando un nuevo estado. Nunca muta el estado directamente, siempre retorna una copia nueva con los cambios aplicados.

**4. Acciones síncronas vs asíncronas:**
- **Síncronas**: Retornan un objeto action inmediatamente (dispatch directo)
- **Asíncronas**: Utilizan middleware como `createAsyncThunk` para manejar operaciones asíncronas (llamadas API) antes de despachar la acción

### Sección III - Extensión

**1. ✅ Tareas completadas al final:** Implementado mediante ordenamiento con `Array.sort()`

**2. ✅ Contador global:** Muestra "Tareas completadas: X de Y"


## 🚀 Características Implementadas

- ✅ **Agregar tareas**: Crear nuevas tareas con un título
- ✅ **Marcar como completadas**: Toggle del estado de completado
- ✅ **Eliminar tareas**: Remover tareas de la lista
- ✅ **Ordenamiento automático**: Las tareas completadas se muestran al final
- ✅ **Contador de progreso**: Visualización de tareas completadas vs totales
- ✅ **Gestión de estado con Redux**: Todo el estado se maneja exclusivamente con Redux
- ✅ **Interfaz responsive**: Diseño adaptable a diferentes dispositivos

## 📁 Estructura del Proyecto
```
taskboard/
├── src/
│   ├── components/
│   │   ├── TaskList.jsx      # Lista de tareas con ordenamiento
│   │   ├── TaskForm.jsx       # Formulario para agregar tareas
│   │   └── TaskItem.jsx       # Componente individual de tarea
│   ├── redux/
│   │   ├── actions.js         # Action creators
│   │   ├── reducer.js         # Reducer con lógica de estado
│   │   └── store.js           # Configuración del store
│   ├── App.jsx                # Componente principal
│   ├── App.css                # Estilos de la aplicación
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── public/                    # Archivos estáticos
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **Redux 5.0.1** - Gestión de estado global
- **React-Redux 9.1.2** - Integración de Redux con React
- **Vite 7.1.12** - Build tool y servidor de desarrollo
- **JavaScript (ES6+)** - Lenguaje de programación

## 📦 Instalación y Ejecución

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/taskboard.git
cd taskboard
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### Compilar para producción
```bash
npm run build



## 📊 Componentes Principales

### TaskForm.jsx
- Formulario controlado para agregar nuevas tareas
- Usa `useDispatch` para despachar la acción `ADD_TASK`
- Validación básica de input vacío
- Reset automático del formulario después de agregar

### TaskList.jsx
- Obtiene las tareas del store con `useSelector`
- Implementa ordenamiento: tareas pendientes primero, completadas al final
- Calcula y muestra el contador de tareas completadas
- Renderiza mensaje cuando no hay tareas

### TaskItem.jsx
- Representa una tarea individual
- Checkbox para toggle del estado completado
- Botón de eliminar con confirmación visual
- Estilos dinámicos según el estado de la tarea

## 🎨 Características de UI/UX

- **Feedback visual**: Las tareas completadas cambian de color y se tachan
- **Ordenamiento inteligente**: Las tareas completadas automáticamente van al final
- **Contador en tiempo real**: Muestra progreso de tareas completadas
- **Diseño limpio**: Interfaz minimalista y fácil de usar
- **Responsive**: Se adapta a diferentes tamaños de pantalla

## 👨‍💻 Autor
- Universidad: Da Vinci de Guatemala
- Curso: Programación Web
- Fecha: Noviembre 2025







---



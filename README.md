# TODO List App

## Descripción

Esta es una aplicación sencilla y funcional para gestionar tareas (TODO list) desarrollada con **React.js**. Su interfaz es minimalista y permite a los usuarios:

- Agregar nuevas tareas.
- Editar tareas existentes.
- Eliminar tareas completadas o no deseadas.

Ideal para quienes desean una herramienta ligera para organizar sus actividades diarias.

---

## Características Principales

1. **Agregar Tareas**:
   - Escribe una tarea en el campo de entrada y presiona el botón "Add".
   - La tarea se agregará a la lista y el campo de entrada se limpiará automáticamente.

2. **Editar Tareas**:
   - Haz clic en el ícono de edición (✏️) junto a cualquier tarea.
   - La tarea se cargará en el campo de entrada para que puedas modificarla.

3. **Eliminar Tareas**:
   - Haz clic en el ícono de eliminación (🗑️) para borrar una tarea de la lista.

4. **Persistir en localStorage**:
   - Utiliza localStorage para guardar la data de las tareas creadas y eliminadas.

---

## Tecnologías Utilizadas

- **React.js**: Biblioteca para construir la interfaz de usuario.
- **CSS**: Para el estilo visual de los componentes.
- **FontAwesome**: Para los íconos de edición y eliminación.

---

## Estructura del Proyecto

```
/src
 |-- App.jsx            # Componente principal de la aplicación
 |-- components
      |-- TodoInput.jsx  # Componente para la entrada de nuevas tareas
      |-- TodoList.jsx   # Componente para listar las tareas
      |-- TodoCard.jsx   # Componente individual para cada tarea
```

### Detalles de los Componentes

#### **App.jsx**
El componente principal que maneja el estado de la aplicación:
- Almacena las tareas en una lista.
- Proporciona funciones para agregar, editar y eliminar tareas.
- Utiliza localStorage para el manejo de la data-}.

#### **TodoInput.jsx**
Formulario para agregar nuevas tareas:
- Controla el valor del campo de entrada mediante `useState`.
- Llama a `handleAddTodo` para enviar la nueva tarea al componente principal.

#### **TodoList.jsx**
Muestra la lista completa de tareas:
- Itera sobre las tareas y las representa mediante el componente `TodoCard`.

#### **TodoCard.jsx**
Componente individual para cada tarea:
- Muestra el contenido de la tarea.
- Incluye botones para editar o eliminar la tarea.

---

## Cómo Usar

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/todo-list-app.git
   cd todo-list-app
   ```

2. **Instalar Dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar la Aplicación**:
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:3000`.

---

## Estilo y Personalización

- **Colores y Diseño**: Los estilos actuales son simples y funcionales, pero puedes personalizarlos en los archivos CSS según tus preferencias.
- **Íconos**: Se utilizan íconos de FontAwesome, que puedes reemplazar o ampliar según tus necesidades.

---

## Autor
Creado por Guido Espinoza como un proyecto de aprendizaje en React.js. 

---

¡Gracias por probar esta aplicación! Si tienes alguna sugerencia o encuentras algún problema, no dudes en compartirlo. 🚀

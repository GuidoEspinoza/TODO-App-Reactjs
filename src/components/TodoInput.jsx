import React from 'react';

const TodoInput = ({ todoValue, setTodoValue, handleAddTodo }) => {
  // * Maneja el cambio de texto en el input
  const handleInputChange = (e) => {
    setTodoValue(e.target.value); // * Actualiza el estado con el valor del input
  };

  // * Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // * Evita que la página se recargue
    if (todoValue.trim()) { // * Verifica que el input no esté vacío
      handleAddTodo(todoValue); // * Llama a la función para agregar el todo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de entrada controlado por el estado todoValue */}
      <input
        type="text"
        placeholder="Agrega una nueva tarea..."
        value={todoValue} // * Conecta el valor del input al estado
        onChange={handleInputChange} // * Maneja los cambios en el input
      />
      {/* Botón para agregar un nuevo todo */}
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  // * Estado para almacenar la lista de todos
  const [todos, setTodos] = useState([]);
  // * Estado para manejar el valor actual del input
  const [todoValue, setTodoValue] = useState("");

  // * Función para agregar un nuevo todo a la lista
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // * Agrega el nuevo todo a la lista existente
    setTodoValue(""); // * Limpia el valor del input
  };

  // * Función para eliminar un todo según su índice
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index)); // * Filtra la lista excluyendo el índice dado
  };

  // * Función para editar un todo
  const handleEditTodo = (index) => {
    setTodoValue(todos[index]); // * Carga el valor del todo en el input
    handleDeleteTodo(index); // * Elimina el todo de la lista para evitar duplicados
  };

  return (
    <>
      {/* Componente de entrada para agregar nuevos todos */}
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodo={handleAddTodo} 
      />
      {/* Componente que lista los todos existentes */}
      <TodoList 
        todos={todos} 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
      />
    </>
  );
};

export default App;

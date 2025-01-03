import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  // * Estado para almacenar la lista de todos
  const [todos, setTodos] = useState([]);
  // * Estado para manejar el valor actual del input
  const [todoValue, setTodoValue] = useState("");

  // * Función para persistir la lista de todos en el localStorage
  const persistData = (newList) => {
      localStorage.setItem("todos", JSON.stringify({ todos: newList })); // * Persiste la lista en el localStorage
  }

  // * Función para agregar un nuevo todo a la lista
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // * Agrega el nuevo todo a la lista existente
    persistData([...todos, newTodo]); // * Persiste la lista en el localStorage
    setTodoValue(""); // * Limpia el valor del input
  };

  // * Función para eliminar un todo según su índice
  const handleDeleteTodo = (index) => {
    persistData(todos.filter((_, todoIndex) => todoIndex !== index)); // * Persiste la lista en el localStorage
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index)); // * Filtra la lista excluyendo el índice dado
  };

  // * Función para editar un todo
  const handleEditTodo = (index) => {
    setTodoValue(todos[index]); // * Carga el valor del todo en el input
    handleDeleteTodo(index); // * Elimina el todo de la lista para evitar duplicados
  };

  // * Efecto para cargar los todos desde el localStorage
  useEffect(() => {
    if (!localStorage) { // * Verifica si el localStorage está disponible
      return;
    }

    let localTodos = localStorage.getItem("todos"); // * Obtiene la lista de todos del localStorage
    if (!localTodos) { // * Verifica si la lista de todos existe
      return;
    }
    localTodos = JSON.parse(localTodos).todos; // * Parsea la lista de todos a JSON
    setTodos(localTodos); // * Carga la lista de todos en el estado

  }, [])

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

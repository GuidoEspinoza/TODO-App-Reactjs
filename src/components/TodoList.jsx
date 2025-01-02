import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleEditTodo, handleDeleteTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        // * Itera sobre la lista de todos y crea un TodoCard para cada elemento
        <TodoCard
          key={index} // * Clave única para cada elemento
          index={index} // * Pasa el índice del todo como prop
          handleEditTodo={handleEditTodo} 
          handleDeleteTodo={handleDeleteTodo}
        >
          {/* Contenido del todo */}
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;

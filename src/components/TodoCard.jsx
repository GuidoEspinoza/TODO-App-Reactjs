import React from "react";

const TodoCard = ({ children, handleEditTodo, handleDeleteTodo, index }) => {
  return (
    <li className="todoItem">
      {/* Contenido dinámico del todo */}
      {children}
      <div className="actionsContainer">
        {/* Botón para editar el todo */}
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        {/* Botón para eliminar el todo */}
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;

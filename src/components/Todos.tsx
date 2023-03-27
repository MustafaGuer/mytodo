import React from "react";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todos = [
    { id: "t1", text: "Coden" },
    { id: "t2", text: "Lesen" },
    { id: "t3", text: "Gym" },
  ];

  return (
    <ul className="musg-flex musg-gap-5 musg-flex-wrap musg-mt-10">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;

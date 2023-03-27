import React, { useState } from "react";
import Todo from "@/models/todo";

type TodosContextObj = {
  items: Todo[];
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
});

const TodosContextProvider = () => {
  return <div>TodosContextProvider</div>;
};

export default TodosContextProvider;

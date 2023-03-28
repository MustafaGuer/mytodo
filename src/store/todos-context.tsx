import React, { useState } from "react";
import Todo from "@/models/todo";
import axios from "axios";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  getTodos: () => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  getTodos: () => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodosHandler = async () => {
    const res = await axios.get("http://localhost:3000/api/new-todo");

    setTodos(res.data);
  };

  const addTodoHandler = async (text: string) => {
    const newTodo = new Todo(text);

    const res = await axios.post("http://localhost:3000/api/new-todo", newTodo);
    
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });

  };

  const removeTodoHandler = async (id: string) => {
    await axios.delete(`http://localhost:3000/api/new-todo`, {
      data: id,
    });
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    getTodos: getTodosHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

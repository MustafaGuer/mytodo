import { TodosContext } from "@/store/todos-context";
import { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import axios from "axios";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api/new-todo");

      setTodos(res.data);
      
    };
    fetchData();
  }, []);

  return (
    <ul className="musg-flex musg-gap-5 musg-flex-wrap musg-mt-10">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;


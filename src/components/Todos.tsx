import { TodosContext } from "@/store/todos-context";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className="musg-flex musg-gap-5 musg-flex-wrap musg-mt-10">
      {todosCtx.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)} />
      ))}
    </ul>
  );
};

export default Todos;

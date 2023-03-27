const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li
      className="musg-p-4 musg-bg-zinc-400 musg-rounded-xl musg-shadow musg-shadow-zinc-700
          musg-font-bold musg-text-zinc-200 hover:musg-shadow-xl musg-cursor-pointer"
      onClick={props.onRemoveTodo}
    >
      {props.text}
    </li>
  );
};

export default TodoItem;

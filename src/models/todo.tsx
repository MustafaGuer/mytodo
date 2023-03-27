import { nanoid } from "nanoid";

class Todo {
  id: string;
  todo: string;
  constructor(todoText: string) {
    this.id = nanoid();
    this.todo = todoText;
  }
}

export default Todo;

import { nanoid } from "nanoid";

class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.id = nanoid();
    this.text = todoText;
  }
}

export default Todo;

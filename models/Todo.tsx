import mongoose from "mongoose";

const TodoScheme = new mongoose.Schema({
  text: {
    type: String,
  },
  id: {
    type: String,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoScheme);

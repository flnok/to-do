import { Todo } from '@/interfaces/todos.interface';
import { model, Schema, Document } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    title: String,
    description: String,
    isDone: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const todoModel = model<Todo & Document>('Todo', todoSchema);

export default todoModel;

import { CreateTodoDto } from '@dtos/todos.dto';
import { HttpException } from '@exceptions/HttpException';
import { Todo } from '@interfaces/todos.interface';
import todoModel from '@models/todos.model';
import { isEmpty } from '@utils/util';

class TodosService {
  public Todo = todoModel;

  public async findAllTodos(): Promise<Todo[]> {
    const Todo: Todo[] = await this.Todo.find();
    return Todo;
  }

  public async findTodoById(todoId: string): Promise<Todo> {
    if (isEmpty(todoId)) throw new HttpException(400, 'TodoId is empty');

    const findTodo: Todo = await this.Todo.findOne({ _id: todoId });
    if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

    return findTodo;
  }

  public async createTodo(todoData: CreateTodoDto): Promise<Todo> {
    if (isEmpty(todoData)) throw new HttpException(400, 'todoData is empty');

    const findTodo: Todo = await this.Todo.findOne({ title: todoData.title });
    if (findTodo) throw new HttpException(409, `This title ${todoData.title} already exists`);

    const createTodoData: Todo = await this.Todo.create({ ...todoData });

    return createTodoData;
  }

  public async updateTodo(todoId: string, todoData: CreateTodoDto): Promise<Todo> {
    if (isEmpty(todoData)) throw new HttpException(400, 'todoData is empty');

    if (todoData.title) {
      const findTodo: Todo = await this.Todo.findOne({ title: todoData.title });
      if (findTodo?._id != todoId) throw new HttpException(409, `This title ${todoData.title} already exists`);
    }

    const updateTodoById: Todo = await this.Todo.findByIdAndUpdate(todoId, { todoData });
    if (!updateTodoById) throw new HttpException(409, "Todo doesn't exist");

    return updateTodoById;
  }

  public async deleteTodo(todoId: string): Promise<Todo> {
    const deleteTodoById: Todo = await this.Todo.findByIdAndDelete(todoId);
    if (!deleteTodoById) throw new HttpException(409, "Todo doesn't exist");

    return deleteTodoById;
  }
}

export default TodosService;

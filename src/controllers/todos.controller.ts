import { CreateTodoDto } from '@dtos/todos.dto';
import { Todo } from '@/interfaces/todos.interface';
import todosService from '@services/todos.service';
import { NextFunction, Request, Response } from 'express';

class TodosController {
  public todosService = new todosService();

  public getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTodoData: Todo[] = await this.todosService.findAllTodos();

      res.status(200).json({ data: findAllTodoData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const findOneTodoData: Todo = await this.todosService.findTodoById(todoId);

      res.status(200).json({ data: findOneTodoData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoData: CreateTodoDto = req.body;
      const createTodoData: Todo = await this.todosService.createTodo(todoData);

      res.status(201).json({ data: createTodoData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const todoData: CreateTodoDto = req.body;
      const updateTodoData: Todo = await this.todosService.updateTodo(todoId, todoData);

      res.status(200).json({ data: updateTodoData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId: string = req.params.id;
      const deleteTodoData: Todo = await this.todosService.deleteTodo(todoId);

      res.status(200).json({ data: deleteTodoData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default TodosController;

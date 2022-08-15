import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;
}

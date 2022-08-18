import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  public title: String;

  @IsString()
  public description: String;

  @IsBoolean()
  public isDone: Boolean;
}

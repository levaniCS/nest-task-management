import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
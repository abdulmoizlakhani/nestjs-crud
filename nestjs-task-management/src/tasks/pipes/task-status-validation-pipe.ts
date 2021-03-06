import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatusList = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) throw new BadRequestException(`${value} is invalid status!`);

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatusList.indexOf(status);
    return idx !== -1;
  }
}

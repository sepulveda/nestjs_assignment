import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Task, Prisma } from '../../../generated/prisma/client';
@Injectable()
export class TasksService {
    constructor(private repository: TasksRepository){}

    async createTask(body:{title: Task['title'],description:Task['description'],status:Task['status'],priority:Task['priority']}) {
    const { title,description,status,priority } = body;

    // call repository layer
    const task = await this.repository.createTask({
      data: {
        title,
        description,
        status,
        priority
      },
    });


    return task;
  }

  async getTask() {
    const tasks = await this.repository.getTask({});
    return tasks;
  }

}
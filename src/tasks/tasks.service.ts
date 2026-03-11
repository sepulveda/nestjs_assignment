import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const data: Prisma.TaskCreateInput = {
      title: createTaskDto.title,
      description: createTaskDto.description,
      priority: createTaskDto.priority as any,
      status: createTaskDto.status as any,
    };

    return this.prisma.task.create({ data });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.findOne(id);
    const data: Prisma.TaskUpdateInput = { ...(updateTaskDto as any) };
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Task> {
    await this.findOne(id);
    return this.prisma.task.delete({ where: { id } });
  }
}

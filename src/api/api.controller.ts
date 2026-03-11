import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from 'src/modules/tasks/task.service';
@Controller('api')
export class ApiController {
    constructor(private readonly taskService: TasksService){}

    @Post(`tasks`)
    async createTasks(@Body() data: { title: string, description: string, status: string, priority: string }) {
        const { title, description, status, priority } = data;
        return this.taskService.createTask({
        title, description, status, priority
        });
    }

    @Get('tasks')
    getTweets() {
        return this.taskService.getTask();
    }
    }

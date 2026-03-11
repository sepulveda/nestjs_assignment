import { Module } from '@nestjs/common';
import { TasksModule } from 'src/modules/tasks/tasks.module';
import { ApiController } from './api.controller';

@Module({
    imports:[TasksModule],
    exports:[ApiController]
})
export class ApiModule {}

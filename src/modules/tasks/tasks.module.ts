import { Module } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { TasksService } from './task.service';
@Module({
    imports: [PrismaModule],
    providers:[TasksRepository],
    exports:[TasksService]
})
export class TasksModule {}

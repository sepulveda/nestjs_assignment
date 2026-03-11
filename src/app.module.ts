import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Dynamically set the path based on NODE_ENV (e.g., '.env.development')
      envFilePath: `.env.${process.env.NODE_ENV}`,
      // Ignore the default .env file if the environment-specific file is found
      ignoreEnvFile: false,
      isGlobal: true, // Makes ConfigService available globally
    }),
    TasksModule,
  
    // ... other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

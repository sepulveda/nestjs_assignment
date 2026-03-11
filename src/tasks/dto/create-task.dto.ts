import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum Status {
	PENDING = 'pending',
	IN_PROGRESS = 'in progress',
	DONE = 'done',
}

export enum Priority {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
}

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsEnum(Priority)
	priority: Priority;

	@IsOptional()
	@IsEnum(Status)
	status?: Status;
}

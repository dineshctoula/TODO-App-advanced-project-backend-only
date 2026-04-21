import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { AuthModule } from '../auth/auth.module';


@Module({
   imports: [AuthModule], // ✅ ADD THIS
  providers: [TodoService],
  controllers: [TodoController]

  
})
export class TodoModule {}

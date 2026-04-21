import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 

@Controller('todos')
@UseGuards(JwtAuthGuard)
// valit jwt token only allowed  
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(@Req() req: any) {
    return this.todoService.findAll(req.user.userId);
  }

  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.todoService.create(body.title, req.user.userId);
  }

  @Post(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.todoService.toggle(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(Number(id));
  }
}
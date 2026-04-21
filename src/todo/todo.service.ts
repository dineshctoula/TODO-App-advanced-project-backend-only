import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(title: string, userId: number) {
    return this.prisma.todo.create({
      data: { title, userId },
    //   create a new data in database and save it 
    });
  }

  findAll(userId: number) {
    return this.prisma.todo.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    //   ordering chae descending order ma hunxa  
    });
  }

  toggle(id: number) {
    return this.prisma.todo.update({
      where: { id },
      data: { completed: true },
    });
  }

  delete(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
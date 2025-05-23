import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TeacherService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createTeacherDto: CreateTeacherDto) {
    return this.teacher.create({
      data: {
        idUser: createTeacherDto.idUser,
        especialidad: createTeacherDto.especialidad,
        disponibilidad: createTeacherDto.disponibilidad,
      },
    });
  }

  findAll() {
    return this.teacher.findMany();
  }

  findOne(id: string) {
    return this.teacher.findUnique({ where: { id } });
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  remove(id: string) {
    return this.teacher.delete({ where: { id } });
  }
}
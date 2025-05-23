import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StudentService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createStudentDto: CreateStudentDto) {
    return this.student.create({
      data: {
        idUser: createStudentDto.idUser,
        programa: createStudentDto.programa,
        semestre: createStudentDto.semestre,
      },
    });
  }

  findAll() {
    return this.student.findMany();
  }

  findOne(id: string) {
    return this.student.findUnique({ where: { id } });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  remove(id: string) {
    return this.student.delete({ where: { id } });
  }
}
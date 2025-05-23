import { BadRequestException, Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
 findByEmail(email: string) {
  return this.user.findUnique({
    where: { email },
  });
}

  async onModuleInit() {
    await this.$connect();
    console.log("Conexión con la base de datos establecida.");
  }

  // Lógica de login
  async login(email: string, password: string, role: string) {
    console.log("Intentando login con email:", email, "y rol:", role);

    const user = await this.user.findUnique({ where: { email } });

    if (!user) {
      console.error("Error: Usuario no encontrado.");
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    console.log("Usuario encontrado:", user);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Comparación de contraseñas:", { ingresada: password, almacenada: user.password, resultado: isPasswordValid });

    if (!isPasswordValid) {
      console.error("Error: Contraseña incorrecta.");
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    if (user.role !== role) {
      console.error("Error: El rol no coincide. Se esperaba:", user.role, "pero se recibió:", role);
      throw new UnauthorizedException('El rol no coincide');
    }

    console.log("Login exitoso para:", email);
    const { password: _, ...userData } = user;
    return userData;
  }

  // Registro de usuario
  async create(createUserDto: CreateUserDto) {
    console.log("Intentando crear usuario con datos:", createUserDto);

    const existingUser = await this.user.findUnique({ where: { email: createUserDto.email } });

    if (existingUser) {
      console.error("Error: El correo ya está registrado.");
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    console.log("Contraseña original:", createUserDto.password);
    console.log("Contraseña encriptada antes de guardar:", hashedPassword);

    const newUser = await this.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    console.log("Usuario creado con éxito:", newUser);
    return newUser;
  }

  findAll() {
    console.log("Buscando todos los usuarios en la base de datos...");
    return this.user.findMany({ orderBy: { createdAt: 'desc' } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.log("Actualizando usuario con ID:", id, "con datos:", updateUserDto);
    return this.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: string) {
    console.log("Eliminando usuario con ID:", id);
    return this.user.delete({ where: { id } });
  }
}
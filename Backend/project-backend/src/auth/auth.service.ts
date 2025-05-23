import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from '../user/dto/loguin-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginUserDto: LoginUserDto) {
    const { email, password, role } = loginUserDto;

    const user = await this.userService.findByEmail(email);

    if (!user || user.password !== password || user.role !== role) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    return {
      message: 'Inicio de sesión exitoso',
      user,
    };
  }
}

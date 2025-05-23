import { IsEmpty, IsString, IsNotEmpty, IsEmail} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    secondName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @IsNotEmpty()
    @IsString()
    secondLastName: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    role: string;

}

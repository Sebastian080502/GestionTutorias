import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeacherDto {

    idUser:string;
    @IsString()
    @IsNotEmpty()
    especialidad:string;
    @IsString()
    @IsNotEmpty()
    disponibilidad:string;
}

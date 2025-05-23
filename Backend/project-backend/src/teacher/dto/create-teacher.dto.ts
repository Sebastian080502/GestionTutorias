import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateTeacherDto {
    @IsUUID()
    @IsNotEmpty()
    idUser:string;
    @IsString()
    @IsNotEmpty()
    especialidad:string;
    @IsString()
    @IsNotEmpty()
    disponibilidad:string;
}

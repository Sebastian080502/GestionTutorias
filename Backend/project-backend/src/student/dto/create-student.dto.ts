import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateStudentDto {
    @IsUUID()
    @IsNotEmpty()
    idUser:string;
    @IsString()
    @IsNotEmpty()
    programa:string;
    @IsString()
    @IsNotEmpty()
    semestre:string;
}

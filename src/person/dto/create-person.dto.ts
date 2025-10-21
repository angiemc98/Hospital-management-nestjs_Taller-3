import { IsDateString, IsEmail, IsOptional, IsString, Length } from "class-validator";




export class CreatePersonDto {

    @IsString()
    @Length(2, 100)
    name: string;

    @IsString()
    @Length(2, 100)
    lastname: string;

    @IsString()
    document: string;

    @IsDateString()
    birthDate: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(2, 100)
    phone: string;

    role: string;

    @IsString()
    @IsOptional()
    gender: string;

}
import { IsDateString, IsEmail, IsOptional, IsString, Length } from "class-validator";
import { CreatePersonDto } from "./create-person.dto";
import { PartialType } from "@nestjs/mapped-types";




export class UpdatePersonDto extends PartialType(CreatePersonDto) {

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

    @IsString()
    role: string;

    @IsString()
    @IsOptional()
    gender: string;

}
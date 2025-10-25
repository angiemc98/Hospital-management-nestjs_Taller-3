import { IsInt, IsString, IsNotEmpty, Length } from "class-validator";



export class CreatePatientDto {

    @IsInt()
    @IsNotEmpty()
    personId: number;

    @IsString()
    @IsNotEmpty()
    @Length(2, 10)
    bloodType?: string;

    @IsString()
    @IsNotEmpty()
    medicalHistory: string;

}
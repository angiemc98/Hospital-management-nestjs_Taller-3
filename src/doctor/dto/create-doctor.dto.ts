import { IsInt, IsString, Length } from "class-validator";



export class CreateDoctorDto {

    @IsInt()
    personaId: number;

    @IsInt()
    specialtyId: number;

    @IsString()
    @Length(2, 100)
    licenseNumber: string;
}
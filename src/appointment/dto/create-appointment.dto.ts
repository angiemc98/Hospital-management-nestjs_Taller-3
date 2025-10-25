import { IsDateString, IsInt, IsOptional, IsString } from "class-validator";



export class CreateAppointmentDto {

    @IsDateString()
    date: Date;

    @IsString()
    @IsOptional()
    reason?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsString()
    @IsOptional()
    status?: string;

    @IsInt()
    doctorId: number;

    @IsInt()
    patientId: number;
    /*
    @IsInt()
    officeId: number;
    */
}

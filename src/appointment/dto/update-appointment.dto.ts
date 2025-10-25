import { IsDateString, IsInt, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {

    @IsInt()
    id: number;

    @IsInt()
    doctorId: number;

    @IsInt()
    patientId: number;  
    /*
    @IsInt()
    officeId: number;
    */
    @IsString()
    status: string;

    @IsDateString()
    date: Date;

    @IsString()
    reason: string;

    @IsString()
    notes: string;
}

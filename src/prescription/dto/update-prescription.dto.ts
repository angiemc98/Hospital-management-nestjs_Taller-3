import { PartialType } from '@nestjs/mapped-types';
import { CreatePrescriptionDto } from './create-prescription.dto';
import  { IsInt, IsString } from "class-validator";
export class UpdatePrescriptionDto extends PartialType(CreatePrescriptionDto) {
    @IsInt()
    id: number;

    @IsInt()
    doctorId: number;
    
    @IsInt()
    patientId: number;
    
    @IsString()
    observations: string;

    @IsInt()
    quantity: number;

    @IsInt()
    duration: number;

}

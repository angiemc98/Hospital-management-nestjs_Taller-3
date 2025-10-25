import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, ValidateNested, IsArray } from "class-validator";
import { CreatePrescriptionDetailDto } from "../../prescription-detail/dto/create-prescription-detail.dto";



export class CreatePrescriptionDto {

    @IsInt()
    doctorId: number;

    @IsInt()
    patientId: number;

    @IsString()
    @IsOptional()
    observations: string;

    @IsInt()
    quantity: number;

    @IsInt()
    duration: number;

    
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreatePrescriptionDetailDto)
    details: CreatePrescriptionDetailDto[];
    
}

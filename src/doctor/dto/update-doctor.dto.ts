import { PartialType } from "@nestjs/mapped-types";
import { CreateDoctorDto } from "./create-doctor.dto";
import { IsString } from "class-validator";


export class UpdateDoctorDto extends PartialType(CreateDoctorDto) { 
    
    // Update licenseNumber of Doctor
    @IsString()
    licenseNumber: string;

}
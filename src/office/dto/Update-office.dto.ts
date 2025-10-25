import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsInt, IsPositive } from 'class-validator';
import { CreateOfficeDto } from './create-office.dto';


export class UpdateOfficeDto extends PartialType(CreateOfficeDto) {
    @IsInt()
    @IsPositive()
    num_consultorio: number;

    @IsInt()
    piso: number;

    @IsBoolean()
    disponible: boolean;
}
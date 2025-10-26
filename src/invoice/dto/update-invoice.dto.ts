import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {

    @IsNumber()
    total: number;

    @IsString()
    metodo_pago: string;
    
    @IsString()
    @IsOptional()
    estado_pago?: string;   

    @IsNumber()
    id_factura: number;
}

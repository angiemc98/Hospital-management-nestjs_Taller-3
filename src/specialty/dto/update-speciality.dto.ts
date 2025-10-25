import { IsOptional, IsString, Length } from "class-validator";



export class UpdateSpecialtyDto {
    
    @IsString()
    @Length(2, 100)
    name: string;

    @IsString()
    @Length(2, 100)
    @IsOptional()
    description: string;

}
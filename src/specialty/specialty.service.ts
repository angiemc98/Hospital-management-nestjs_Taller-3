import { InjectRepository } from "@nestjs/typeorm";
import { Specialty } from "./specialty.entity";
import { Repository } from "typeorm";
import { CreateSpecialtyDto } from "./dto/create-specialty.dto";
import { UpdateSpecialtyDto } from "./dto/update-speciality.dto";


export class SpecialtyService {
    constructor(
        @InjectRepository(Specialty)
        private readonly specialtyRepository: Repository<Specialty>,
    ) {}

    async create(dtospecialty: CreateSpecialtyDto){
        const specialty = this.specialtyRepository.create(dtospecialty);
        return  this.specialtyRepository.save(specialty);
    }

    findAll(){
        return this.specialtyRepository.find({relations: ['propety_doctor']});
    }

    async findOne(id: number) {
    const specialty = await this.specialtyRepository.findOne({
        where: { id_especialidad: id }
    });
    if (!specialty) throw new Error('Specialty not found');
    return specialty;
    }

    async update(id: number, dtospecialty: UpdateSpecialtyDto){
        const specialty = await this.specialtyRepository.findOne({where: {id_especialidad: id}});
        if (!specialty) {
            throw new Error('Specialty not found');
        }
        specialty.name = dtospecialty.name;
        specialty.description = dtospecialty.description;
        return this.specialtyRepository.save(specialty);
    }

    async delete(id: number){
        const specialty = await this.specialtyRepository.findOne({where: {id_especialidad: id}});
        if (!specialty) {
            throw new Error('Specialty not found');
        }
        await this.specialtyRepository.delete(specialty);
    }
}

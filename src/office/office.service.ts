import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/Update-office.dto';

@Injectable()
export class OfficeService {

    constructor(
        @InjectRepository(Office)
        private readonly officeRepository: Repository<Office>,
    ) {}

    async create(createOfficeDto: CreateOfficeDto) {
        const office = this.officeRepository.create(createOfficeDto);
        return this.officeRepository.save(office);
    }

    findAll() {
        return this.officeRepository.find( {relations: ['property_cita']});
    }

    async findOne(id: number) {
        const office = await this.officeRepository.findOne({where: {id_consultorio: id}, relations: ['property_cita']});
        if (!office) throw new Error('Office not found');
        return office;
    }

    async update(id: number, updateOfficeDto: UpdateOfficeDto) {
        const office = await this.findOne(id);
        Object.assign(office, updateOfficeDto);
        return this.officeRepository.save(office);
    }   

    remove(id: number) {
        return this.officeRepository.delete(id);
    }
}

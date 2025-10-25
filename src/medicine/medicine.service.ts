import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './medicine.entity';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(Medicine)
        private readonly medicineRepository: Repository<Medicine>,
    ) {}
    create(medicineDto: CreateMedicineDto) {
        const medicine = this.medicineRepository.create(medicineDto);
        return this.medicineRepository.save(medicine);
    }

    findAll() {
        return this.medicineRepository.find();
    }

    findOne(id: number) {
        return this.medicineRepository.findOne({where: {id}});
    }

    async update(id: number, medicineDto: UpdateMedicineDto) {
        await this.medicineRepository.update(id, medicineDto);
        return this.findOne(id);
    }

    remove(id: number) {
        return this.medicineRepository.delete(id);
    }
}


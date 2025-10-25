import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDetailDto } from './dto/create-prescription-detail.dto';
import { UpdatePrescriptionDetailsDto } from './dto/update-prescription-details.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrescriptionDetail } from './prescription-detail.entity';
import { Medicine } from 'src/medicine/medicine.entity';
import { Prescription } from 'src/prescription/prescription.entity';

@Injectable()
export class PrescriptionDetailService {
    constructor(
    @InjectRepository(PrescriptionDetail)
    private readonly detailRepository: Repository<PrescriptionDetail>,
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,
) {}

async create (dto: CreatePrescriptionDetailDto & { prescriptionId?: number, medicineId: number }) {
    const detail = this.detailRepository.create({
    dose: dto.dose,
    duration: dto.duration,
    instrucitons: dto.instrucitons,
    });
    if (dto.prescriptionId) {
    const prescription = await this.prescriptionRepository.findOneBy({id: dto.prescriptionId});
    if (!prescription) {
        throw new Error('Prescription not found');
    }
    detail.prescription = prescription;
    }
    const medicine = await this.medicineRepository.findOneBy({id: dto.medicineId});
    if (!medicine) {
    throw new Error('Medicine not found');
    }
    detail.medicine = medicine;
    return this.detailRepository.save(detail);
}
async findAll () {
    return this.detailRepository.find({relations:['prescription', 'medicine']});
}
findOne(id: number) {
    return this.detailRepository.findOneBy({id});
}
async update(id: number, dto: UpdatePrescriptionDetailsDto) {
    await this.detailRepository.update(id, dto);
    return this.findOne(id);
}
remove(id: number) {
    return this.detailRepository.delete(id);
}
}

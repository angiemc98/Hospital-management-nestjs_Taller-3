import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from './prescription.entity';
import { Doctor } from 'src/doctor/doctor.entity';
import { Patient } from 'src/patient/patient.entity';
import { Medicine } from 'src/medicine/medicine.entity';

@Injectable()
export class PrescriptionService {

  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,

    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,

    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,

    /*
    @InjectRepository(PrescriptionDetails)
    private readonly prescriptionDetailRepository: Repository<Prescription>,
    */

    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
  ) { }

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const doctor = await this.doctorRepository.findOneBy({id: createPrescriptionDto.doctorId});
    const patient = await this.patientRepository.findOneBy({id: createPrescriptionDto.patientId});
  
    if (!doctor || !patient) {
      throw new Error('Doctor or patient not found');
    }
    const prescription = this.prescriptionRepository.create({
      date: new Date(),
      doctor: doctor,
      patient: patient,
      observations: createPrescriptionDto.observations,
      quantity: createPrescriptionDto.quantity,
      duration: createPrescriptionDto.duration,
    });
    return this.prescriptionRepository.save(prescription);
  }

  findAll() {
    return this.prescriptionRepository.find({
      relations: ['doctor', 'patient', 'medicine'],
    });
  }

  findOne(id: number) {
    return this.prescriptionRepository.findOne({where: {id}, relations: ['doctor', 'patient', 'medicine']});
  }

  async update(id: number, updatePrescriptionDto: UpdatePrescriptionDto) {
    await this.prescriptionRepository.update(id, updatePrescriptionDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.prescriptionRepository.delete(id);
  }
}

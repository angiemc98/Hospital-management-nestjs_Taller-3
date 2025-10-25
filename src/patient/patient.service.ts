import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { Person } from '../person/person.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) {}

    async createPatient(Patientdto: CreatePatientDto) {
        const person = await this.personRepository.findOneBy({id: Patientdto.personId});
        
        if (!person) {
            throw new Error('Person not found');
        }
        const patient = this.patientRepository.create({
            person,
            bloodType: Patientdto.bloodType,
            medicalHistory: Patientdto.medicalHistory
        });
        return this.patientRepository.save(patient);
    }

    findAll() {
        return this.patientRepository.find({relations: ['person']});
    }

    findOne(id: number) {
        return this.patientRepository.findOne({where: {id}, relations: ['person']});
    }

    async update(id: number, Patientdto: UpdatePatientDto) {
        await this.patientRepository.update(id, Patientdto);
        return this.findOne(id);
    }

    remove(id: number) {
        return this.patientRepository.delete(id);
    }

}


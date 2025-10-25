import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Person } from 'src/person/person.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Specialty } from 'src/specialty/specialty.entity';

@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>,
        @InjectRepository(Person) private readonly personRepository: Repository<Person>,
        @InjectRepository(Specialty) private readonly specialtyRepository: Repository<Specialty>,
) {}
async create (dto:CreateDoctorDto) {
    const person = await this.personRepository.findOneBy({id: dto.personaId});
    if (!person) {
        throw new Error('Person not found');
    }
    const specialty = await this.specialtyRepository.findOneBy({id_especialidad: dto.specialtyId});
    if (!specialty) {
        throw new Error('Specialty not found');
    }
    const doctor = this.doctorRepository.create({person, specialty, licenseNumber: dto.licenseNumber});
    return this.doctorRepository.save(doctor);
}
findAll() {
    return this.doctorRepository.find({relations: ['person']});
}
findOne(id: number) {
    return this.doctorRepository.findOne({where: {id}, relations: ['person']});
}

async update(id: number, dto: UpdateDoctorDto) {
    const doctor = await this.doctorRepository.findOne({
        where: { id },
        relations: ['person', 'specialty'],
    });

    if (!doctor) {
        throw new Error('Doctor not found');
    }

    // Si envía un nuevo personId, actualiza la relación
    if (dto.personaId) {
        const person = await this.personRepository.findOneBy({ id: dto.personaId });
        if (!person) throw new Error('Person not found');
        doctor.person = person;
    }

    // Si envía un nuevo specialtyId, actualiza la relación
    if (dto.specialtyId) {
        const specialty = await this.specialtyRepository.findOneBy({
        id_especialidad: dto.specialtyId,
        });
        if (!specialty) throw new Error('Specialty not found');
        doctor.specialty = specialty;
    }

    // Actualiza los campos simples
    if (dto.licenseNumber) {
        doctor.licenseNumber = dto.licenseNumber;
    }

    // Guarda los cambios
    return this.doctorRepository.save(doctor);
}

remove(id: number) {
    return this.doctorRepository.delete(id);    
}    

}
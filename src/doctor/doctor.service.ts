import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Person } from 'src/person/person.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>,
        @InjectRepository(Person) private readonly personRepository: Repository<Person>
) {}
async create (dto:CreateDoctorDto) {
    const person = await this.personRepository.findOneBy({id: dto.personaId});
    if (!person) {
        throw new Error('Person not found');
    }
    const doctor = this.doctorRepository.create({person, licenseNumber: dto.licenseNumber});
    return this.doctorRepository.save(doctor);
}
findAll() {
    return this.doctorRepository.find({relations: ['person']});
}
findOne(id: number) {
    return this.doctorRepository.findOne({where: {id}, relations: ['person']});
}

async update (id: number, dto: UpdateDoctorDto) {
    await this.doctorRepository.update(id, dto);
    return this.findOne(id);
}

remove(id: number) {
    return this.doctorRepository.delete(id);    
}    

}
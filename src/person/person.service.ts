import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository: Repository<Person>) {}

    // Create a person with the correct relations
    create(createPersonDto: CreatePersonDto) {
        const person = this.personRepository.create(createPersonDto);
        return this.personRepository.save(person);
    }    

    // Find all persons with relations doctor and patient
    findAll() {
        return this.personRepository.find();
    }

    // Find persons with role
    findByrole(role: string) {
        return this.personRepository.find({ where: { role } });
    }

    // Find one person with id
    findOne(id: number) {
        return this.personRepository.findOne({ where: { id } });
    }

    // Update person with correct relations
    async update(id: number, updatePersonDto: UpdatePersonDto) {
        await this.personRepository.update(id, updatePersonDto);
        return this.personRepository.findOne({ where: { id } });
    }

    // Delete person by id
    remove(id: number) {
        return this.personRepository.delete(id);
    }
}


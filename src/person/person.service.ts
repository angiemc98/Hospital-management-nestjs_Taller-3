import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository: Repository<Person>) {}

    create(createPersonDto: CreatePersonDto) {
        const person = this.personRepository.create(createPersonDto);
        return this.personRepository.save(person);
    }    

    findAll() {
        return this.personRepository.find();
    }

    findByrole(role: string) {
        return this.personRepository.find({ where: { role } });
    }

    findOne(id: number) {
        return this.personRepository.findOne({ where: { id } });
    }

    async update(id: number, updatePersonDto: UpdatePersonDto) {
        await this.personRepository.update(id, updatePersonDto);
        return this.personRepository.findOne({ where: { id } });
    }

    remove(id: number) {
        return this.personRepository.delete(id);
    }
}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Injectable()
export class PersonService {
    constructor(@InjectRepository(Person) private readonly personRepository: Repository<Person>) {}

    private personas = [
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            document: '123456789',
            birthDate: '1990-01-01',
            email: 'juanperez@gmail.com',
            phone: '123456789',
            role: 'Doctor',
        },
        {
            id: 2,
            name: 'Maria',
            lastName: 'Perez',
            document: '123456788',
            birthDate: '1990-01-01',
            email: 'mariaperez@gmail.com',
            phone: '31258698',
            role: 'Patient',

        }
    ];

    create(createPersonDto: CreatePersonDto) {
        // Normalize DTO fields to match the in-memory persona shape (lastName is required, ignore extra fields like gender)
        const new_person = {
            id: this.nextId(),
            name: (createPersonDto as any).name,
            lastName: (createPersonDto as any).lastName ?? (createPersonDto as any).lastname ?? '',
            document: (createPersonDto as any).document,
            birthDate: (createPersonDto as any).birthDate,
            email: (createPersonDto as any).email,
            phone: (createPersonDto as any).phone,
            role: (createPersonDto as any).role,
        };
        this.personas.push(new_person);
        return new_person;
    }

    nextId() {
        return this.personas.length + 1;

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


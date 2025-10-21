import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Person } from "../person/person.entity";



@Entity('doctor')
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {length: 50, type: 'varchar'}
    )
    licenseNumber: string;

    //Relationships
    @OneToOne(() => Person, (person) => person.doctor, {cascade: true})
    person: Person;
}
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Person } from "../person/person.entity";



@Entity('patient')
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;


    //Relationships
    @OneToOne(() => Person, (person) => person.patient, {cascade: true})
    person: Person;
}
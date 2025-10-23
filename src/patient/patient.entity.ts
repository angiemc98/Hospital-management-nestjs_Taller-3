import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Person } from "../person/person.entity";



@Entity('patient')
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    bloodType: string;

    @Column({type: 'text', nullable: true})
    medicalHistory: string;

    //Relationships
    @OneToOne(() => Person, (person) => person.patient, {cascade: true})
    @JoinColumn({name:'person_id'})
    person: Person;
}
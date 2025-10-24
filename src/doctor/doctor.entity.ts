import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Person } from "../person/person.entity";
import { Appointment } from "../appointment/appointment.entity";
import { Prescription } from "../prescription/prescription.entity";


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
    @JoinColumn({name:'person_id'})
    person:Person;
    
    /*
    @ManyToOne(() => Specialty, (specialty) => specialty.doctors, {cascade: true})
    @JoinColumn({name:'specialty_id'})
    specialty:Specialty; */

    
    @OneToMany(() => Appointment, (appointment) => appointment.doctor, {cascade: true})
    appointments:Appointment[];

    
    @OneToMany(() => Prescription, (prescription => prescription.doctor)
        ,{cascade: true})
        prescription: Prescription[];
}
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Appointment } from "../appointment/appointment.entity";
import { Person } from "../person/person.entity";
import { Prescription } from "../prescription/prescription.entity";
import { Invoice } from "../invoice/invoice.entity";



@Entity('patient')
export class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    bloodType: string;

    @Column({enum: ['contributive', 'subsidized', 'free']})
    insurance: string;

    @Column({type: 'text', nullable: true})
    medicalHistory: string;

    //Relationships
    @OneToOne(() => Person, (person) => person.patient, {cascade: true})
    @JoinColumn({name:'person_id'})
    person: Person;

    @OneToMany (() => Appointment, (appointment) => appointment.patient, {cascade: true})
    @JoinColumn({name: 'patient_id'})
    appointments: Appointment[];

    @OneToMany(() => Prescription, (prescription) => prescription.patient, {cascade: true})
    prescription: Prescription[];

    @OneToMany(() => Invoice, (invoice) => invoice.propety_patient, {cascade: true})
    invoices: Invoice[];
}
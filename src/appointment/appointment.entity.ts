import { Doctor } from "src/doctor/doctor.entity";
import { Invoice } from "src/invoice/invoice.entity";
import { Patient } from "src/patient/patient.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from "typeorm";


@Entity('appointment')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp'})
    date: Date;

    @Column({type: 'text', nullable: true})
    reason: string;

    @Column({type: 'text', nullable: true})
    notes: string;

    @Column({default: 'scheduled'})
    status: string; // scheduled, completed, canceled


    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    @JoinColumn({name: 'doctor_id'})
    doctor: Doctor;
    
    
    @ManyToOne(() => Patient, patient => patient.appointments)
    @JoinColumn({name: 'patient_id'})
    patient: Patient;
    
    /*
    @ManyToOne(() => Office, office => ofice.appointments)
    @JoinColumn({name: 'office_id'})
    office: Office;
    */
    /*
    @OneToOne(() => Invoice, invoice => invoice.appointment)
    invoice: Invoice;
    */
}

import { Doctor } from "src/doctor/doctor.entity";
import { Patient } from "src/patient/patient.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Medicine } from "src/medicine/medicine.entity";
import { PrescriptionDetail } from "src/prescription-detail/prescription-detail.entity";


@Entity('prescription')
export class Prescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    date: Date;

    @Column({type: 'text', nullable: true})
    observations: string;

    @Column({type: 'int', default: 0})
    quantity: number;

    @Column({type: 'int', default: 0})
    duration: number;

    @ManyToOne( () => Doctor, doctor => doctor.prescription)
    @JoinColumn({name: 'doctor_id'})
    doctor: Doctor;

    @ManyToOne(() => Patient, patient => patient.prescription)
    @JoinColumn({name: 'patient_id'})
    patient: Patient;

    @ManyToOne(() => Medicine, medicine => medicine.prescription)
    @JoinColumn({name: 'medicine_id'})
    medicine: Medicine;
    
    @OneToMany(() => PrescriptionDetail, prescriptionDetail => prescriptionDetail.prescription)
    details: PrescriptionDetail[];
}

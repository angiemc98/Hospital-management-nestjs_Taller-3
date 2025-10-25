import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Prescription } from "src/prescription/prescription.entity";
import { Medicine } from "src/medicine/medicine.entity";


@Entity('prescription_detail')
export class PrescriptionDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    dose: string;

    @Column({type: 'int'})
    duration: number;

    @Column({type: 'text'})
    instrucitons: string;

    @ManyToOne(() => Prescription, (prescription) => prescription.details, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'prescription_id'})
    prescription: Prescription;

    @ManyToOne(() => Medicine, (medicine) => medicine.details)
    @JoinColumn({name: 'medicine_id'})
    medicine: Medicine;
    
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Medicine } from "src/medicine/medicine.entity";
import { PrescriptionDetail } from "src/prescription-detail/prescription-detail.entity";
import { Appointment } from "src/appointment/appointment.entity";


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

    @ManyToOne(() => Appointment, appointment => appointment.prescription)
    @JoinColumn({name: 'appointment_id'})
    appointment: Appointment;

    @ManyToOne(() => Medicine, medicine => medicine.prescription)
    @JoinColumn({name: 'medicine_id'})
    medicine: Medicine;
    
    @OneToMany(() => PrescriptionDetail, prescriptionDetail => prescriptionDetail.prescription)
    details: PrescriptionDetail[];
}

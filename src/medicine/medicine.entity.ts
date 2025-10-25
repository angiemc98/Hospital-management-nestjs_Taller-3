import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Prescription } from "src/prescription/prescription.entity";
import { PrescriptionDetail } from "src/prescription-detail/prescription-detail.entity";


@Entity('medicine')
export class Medicine {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'varchar', length: 50})
    type: string; //tablet, pill, liquid, injection

    @Column({type: 'varchar', length: 50})
    presentation: string; // 500mg, 100ml, etc

    @Column({type: 'int', default: 0})
    stock: number;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'varchar', length: 50})
    price: string;

    @OneToMany(() => Prescription, (prescription) => prescription.medicine)
    prescription: Prescription[];
    
    @OneToMany(() => PrescriptionDetail, (prescription) => prescription.medicine)
    details: PrescriptionDetail[];
    
}
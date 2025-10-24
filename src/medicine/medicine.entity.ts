import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


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

    /*
    @OneToMany(() => PrescriptionDetail, (prescription) => prescription.medicine)
    prescriptions: PrescriptionDetail[];
    */
}
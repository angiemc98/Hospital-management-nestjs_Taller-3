import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from '../doctor/doctor.entity';
import { Patient } from '../patient/patient.entity';



@Entity('person')
export class Person {
    // Primary key of the person
    @PrimaryGeneratedColumn()
    id: number;

    // Name of the person
    // Is required, length between 2 and 100
    @Column(
    {length: 100}
    )
    name: string;

    // Last name of the person
    // Is required, length between 2 and 100
    @Column(
    {length:100}
    )
    lastName: string;

    // Document of the person
    // Is required, unique
    @Column(
    {unique: true}
    )
    document: string;

    // Birth date of the person
    // Is required
    @Column()
    birthDate: Date;

    // Email of the person
    // Is required, unique
    @Column(
    {unique: true}
    )
    email: string;

    // Phone of the person
    // Is unique
    @Column(
    {unique: true}
    )
    phone: string;

    // Role of the person
    @Column({
    type: 'enum',
    enum: [ 'Doctor', 'Patient']
    })
    role: string;

    //Relationships

    // Relation Doctor > Person, a Person can have many doctors
    @OneToOne(
    () => Doctor,
    (doctor) => doctor.person
    )    
    doctor: Doctor;

    // Relation Patient > Person, a Person can have many patients
    @OneToOne(
    () => Patient,
    (patient) => patient.person
    )
    patient: Patient;

}


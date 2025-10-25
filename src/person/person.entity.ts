import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from '../doctor/doctor.entity';
import { Patient } from '../patient/patient.entity';



@Entity('person')
export class Person {
@PrimaryGeneratedColumn()
id: number;

@Column(
    {length: 100}
)
name: string;

@Column(
    {length:100}
)
lastName: string;

@Column(
    {unique: true}
)
document: string;

@Column()
birthDate: Date;

@Column(
    {unique: true}
)
email: string;

@Column(
    {unique: true}
)
phone: string;

@Column({
    type: 'enum',
    enum: [ 'Doctor', 'Patient']
})
role: string;

//Relationships
@OneToOne(
    () => Doctor,
    (doctor) => doctor.person
)    
doctor: Doctor;

@OneToOne(
    () => Patient,
    (patient) => patient.person
)
patient: Patient;

}


import { Appointment } from "src/appointment/appointment.entity"; 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('consultorio')
export class Office{
    @PrimaryGeneratedColumn()
    id_consultorio: number;
    
    @Column({unique: true})
    num_consultorio: number;

    @Column()
    piso: number;

    // El tipo de dato es booleano siendo el estado del consultorio Disponible = true y Ocupado = false 
    @Column({type: 'boolean', default: true})
    disponible: boolean

    // relacion consultorio - Cita Uno a muchos 'Un consultorio puede tener muchas citas'   
    @OneToMany(() => Appointment, (Cita) => Cita.office, {cascade: true})
    property_cita: Appointment[];
}
// Importacion de la clase doctor para usar la entidad y hacer la relacion en la BD 
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('especialidades')
export class Specialty{
    @PrimaryGeneratedColumn('increment')
    id_especialidad: number;

    // No pueden haber especialidades repetidas
    @Column({unique: true})
    nombre: string;

    // Permiso de que la columna pueda estar vacía 
    @Column({nullable: true})
    descripcion: string;

    // Relacion especialidad > medico 'Varios medicos pueden tener una especialidad' Uno a Muchos
    @OneToMany(() => Doctor, (Doctor_Alias) => Doctor_Alias.propety_especialidad)
    propety_doctor: Doctor[];
}
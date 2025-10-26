import { Appointment } from "src/appointment/appointment.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "src/patient/patient.entity";



@Entity('factura')
export class Invoice {
    // el tipo de uuid se centra en un identificador unico universal es una cadena de caracteres como id unico 
    @PrimaryGeneratedColumn()
    id_factura: number;

    // el tipo timestamp guarda la fecha y hora exacta en un formato yy/mm/dd y h/m/s y el default: CURRENT_TIMESTAMP quiere decir que en caso de no llenar este campo por defecto se colocara la fecha y la hora actual del servidor
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;

    // atributos precision = 'numero de digitos max' y scale 'max digitos despues del punto decimal'
    @Column({type: 'decimal', precision: 10, scale: 2})
    total: number;

    // tipo de dato varchar y cantidad max de caracteres 50 
    @Column({type: 'varchar', length: 50})
    metodo_pago: string;

    // Van a hacer varios metodos de pago (pendiente, pagado, fallido) y va a tener un valor por defecto PENDIENTE 
    @Column({type: 'varchar', length: 50, default: 'Pendiente'})
    estado_pago: string;

    // relacion factura > cita Uno a muchos 'Varias facturas pueden pertenecer a una cita' onDelete: 'CASCADE' (Si se elimina una cita se eliminan todas las facturas de esa cita)
    @ManyToOne(() => Appointment, (Cita) => Cita.invoice, {onDelete: 'CASCADE'})
    // llave foranea id_cita JoinColumn = Define el nombre de la columna de la llave foranea en la table factura
    @JoinColumn({name: 'id_cita'})
    propety_cita: Appointment;

    // relacion factura > paciente Uno a muchos 'Varias facturas pueden pertenecer a un paciente' onDelete: 'CASCADE' (Si se elimina un paciente se eliminan todas las facturas de ese paciente)
    @ManyToOne(() => Patient, (paciente) => paciente.invoices, {onDelete: 'CASCADE'})
    // llave foranea id_paciente JoinColumn = Define el nombre de la columna de la llave foranea en la table factura
    @JoinColumn({name: 'id_paciente'})
    propety_patient: Patient;
}

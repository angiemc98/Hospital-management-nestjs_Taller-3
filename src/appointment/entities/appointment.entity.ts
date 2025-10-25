/*
import { Invoice } from "src/invoice/invoice.entity";
import { Office } from "src/office/entities/office.entity";
import { Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('cita')
export class Appointment {
    // Atributos de la cita ....

    // Relacion uno a muchos CITA - FACTURA 'Una cita puede tener muchas facturas'
    @OneToMany(() => Invoice, (Factura) => Factura.propety_cita)
    propety_factura: Invoice[];

    // Relacion uno a mucho CITA - CONSULTORIO 'una cita solo puedes pertenecer a un consultorio' si se elimina una cita se elimina el uso de los consultorios
    @ManyToOne(() => Office, (Consultorio) => Consultorio.property_cita, {onDelete: 'CASCADE'})
    propety_consultorio: Office;
}
*/
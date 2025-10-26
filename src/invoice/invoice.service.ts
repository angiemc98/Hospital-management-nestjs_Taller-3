import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoice.entity';
import { Appointment } from 'src/appointment/appointment.entity';
import { Patient } from 'src/patient/patient.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(dto: CreateInvoiceDto) {
  const appointment = await this.appointmentRepository.findOne({
    where: { id: dto.id_cita },
  });
  if (!appointment) throw new Error('Appointment not found');

  const patient = await this.patientRepository.findOne({
    where: { id: dto.id_paciente },
  });
  if (!patient) throw new Error('Patient not found');

  // Crear la factura con las relaciones correctas
  const invoice = this.invoiceRepository.create({
    total: dto.total,
    metodo_pago: dto.metodo_pago,
    estado_pago: dto.estado_pago || 'Pendiente',
    propety_cita: appointment,
    propety_patient: patient,
  });

  return this.invoiceRepository.save(invoice);
}



  findAll() {
    return this.invoiceRepository.find({
      relations: ['propety_cita', 'propety_patient'],
    });
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepository.findOne({
      where: { id_factura: id },
      relations: ['propety_cita', 'propety_patient'],
    });
    if (!invoice) throw new Error('Invoice not found');
    return invoice;
  }

  async update(id: number, dto: UpdateInvoiceDto) {
    const invoice = await this.findOne(id);

    if (dto.id_cita) {
      const appointment = await this.appointmentRepository.findOne({
        where: { id: dto.id_cita },
      });
      if (!appointment) throw new Error('Appointment not found');
      invoice.propety_cita = appointment;
    }

    if (dto.id_paciente) {
      const patient = await this.patientRepository.findOne({
        where: { id: dto.id_paciente },
      });
      if (!patient) throw new Error('Patient not found');
      invoice.propety_patient = patient;
    }

    Object.assign(invoice, dto);
    return this.invoiceRepository.save(invoice);
  }

  async remove(id: number) {
    const invoice = await this.findOne(id);
    await this.invoiceRepository.remove(invoice);
    return { message: `Invoice with id ${id} deleted successfully` };
  }
}
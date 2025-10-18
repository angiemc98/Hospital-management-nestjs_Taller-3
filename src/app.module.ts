import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicineModule } from './medicine/medicine.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { InvoiceModule } from './invoice/invoice.module';
import { OfficeModule } from './office/office.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { PrescriptionDetailModule } from './prescription-detail/prescription-detail.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PersonModule, DoctorModule, PatientModule, AppointmentModule, MedicineModule, PrescriptionModule, InvoiceModule, OfficeModule, SpecialtyModule, PrescriptionDetailModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

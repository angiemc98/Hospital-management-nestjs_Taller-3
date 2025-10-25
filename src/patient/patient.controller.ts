import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientService } from './patient.service';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  
  @Post()
  create(@Body() patientDto: CreatePatientDto) {
    return this.patientService.createPatient(patientDto);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() patientDto: UpdatePatientDto) {
    return this.patientService.update(+id, patientDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.patientService.remove(+id);
  }
}

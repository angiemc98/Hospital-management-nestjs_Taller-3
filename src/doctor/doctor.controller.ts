import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() dto: CreateDoctorDto) {
    return this.doctorService.create(dto);
  }

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param(('id')) id: number) {
    return this.doctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateDoctorDto) {
    return this.doctorService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.doctorService.remove(+id);
  }
}

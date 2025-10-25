import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/person/person.entity';
import { Doctor } from './doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Person])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}

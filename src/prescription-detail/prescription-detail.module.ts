import { Module } from '@nestjs/common';
import { PrescriptionDetailService } from './prescription-detail.service';
import { PrescriptionDetailController } from './prescription-detail.controller';

@Module({
  controllers: [PrescriptionDetailController],
  providers: [PrescriptionDetailService],
})
export class PrescriptionDetailModule {}

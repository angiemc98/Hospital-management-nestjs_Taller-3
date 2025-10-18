import { Controller } from '@nestjs/common';
import { PrescriptionDetailService } from './prescription-detail.service';

@Controller('prescription-detail')
export class PrescriptionDetailController {
  constructor(private readonly prescriptionDetailService: PrescriptionDetailService) {}
}

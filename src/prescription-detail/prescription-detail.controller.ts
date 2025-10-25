import { Body, Controller, Get, Inject, Patch, Post, Param, Delete } from '@nestjs/common';
import { CreatePrescriptionDetailDto } from './dto/create-prescription-detail.dto';
import { PrescriptionDetailService } from './prescription-detail.service';
import { UpdatePrescriptionDetailsDto } from './dto/update-prescription-details.dto';


@Controller('prescription-detail')
export class PrescriptionDetailController {
    constructor(private readonly detailRepository: PrescriptionDetailService){}

    @Post()
    create(@Body() createPrescriptionDetailDto: CreatePrescriptionDetailDto) {
        return this.detailRepository.create(createPrescriptionDetailDto);
    }

    @Get()
    findAll() {
        return this.detailRepository.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.detailRepository.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePrescriptionDetailsDto: UpdatePrescriptionDetailsDto) {
        return this.detailRepository.update(id, updatePrescriptionDetailsDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.detailRepository.remove(id);
    }

}



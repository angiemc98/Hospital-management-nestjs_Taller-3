import { Controller, Patch, Get, Post, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { OfficeService } from './office.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/Update-office.dto';

@Controller('office')
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}

  @Post()
  create(@Body() dto: CreateOfficeDto) {
    return this.officeService.create(dto);
  }

  @Get()
  findAll() {
    return this.officeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.officeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateOfficeDto,
  ) {
    return this.officeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Body('id', ParseIntPipe) id: number) {
    return this.officeService.remove(id);
  }

}

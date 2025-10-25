import { Body, Controller, Get, Patch, Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-speciality.dto';

@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Post()
  create(@Body()dto: CreateSpecialtyDto) {
    return this.specialtyService.create(dto);
  }

  @Get()
  findAll() {
    return this.specialtyService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.specialtyService.findOne(id);
    }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSpecialtyDto,
  ) {
    return this.specialtyService.update(id, dto);
  }

  @Delete(':id')
  delete(@Body('id') id: number) {
    return this.specialtyService.delete(+id);
  }
}

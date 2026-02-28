import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubs: ClubsService) {}

  @Post()
  create(@Body() dto: CreateClubDto) {
    return this.clubs.create(dto);
  }

  @Get()
  findAll() {
    return this.clubs.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubs.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClubDto) {
    return this.clubs.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubs.remove(id);
  }
}

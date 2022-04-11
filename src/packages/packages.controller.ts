import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './schemas/packages.schema';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  async create(@Body() createPackageDto: CreatePackageDto) {
    await this.packagesService.create(createPackageDto);
  }

  @Get()
  async findAll(): Promise<Package[]> {
    return this.packagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Package> {
    return this.packagesService.findOne(id);
  }
}

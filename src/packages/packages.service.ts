import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package, PackageDocument } from './schemas/packages.schema';

@Injectable()
export class PackagesService {
  constructor(
    @InjectModel(Package.name) private readonly packageModel: Model<PackageDocument>,
  ) {}

  async create(createPackageDto: CreatePackageDto): Promise<Package> {
    const createdPackage = await this.packageModel.create(CreatePackageDto);
    return createdPackage;
  }

  async findAll(): Promise<Package[]> {
    return this.packageModel.find().exec();
  }

  async findOne(id: string): Promise<Package> {
    return this.packageModel.findOne({ _id: id }).exec();
  }
}

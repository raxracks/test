import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PackageDocument = Package & Document;

@Schema()
export class Package {
  @Prop()
  name: string;

  @Prop()
  user: string;

  @Prop()
  repo: string;
}

export const PackageSchema = SchemaFactory.createForClass(Package);

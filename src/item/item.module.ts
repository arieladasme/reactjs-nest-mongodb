import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

import { MorganModule } from 'nest-morgan';






@Module({
  imports: [
    MorganModule.forRoot(),
    // Defino un nuevo schema
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
  ],
  providers: [ItemService],
  controllers: [ItemController]
})

export class ItemModule { }

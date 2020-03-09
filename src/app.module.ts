import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/items-nest', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

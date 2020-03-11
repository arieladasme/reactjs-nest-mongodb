import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { CreateItemDTO } from './dto/item.dto';


@Injectable()
export class ItemService {

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {
  }

  // Get items
  async getItems(): Promise<Item[]> {
    const items = await this.itemModel.find(); // busca en itemModel
    return items;
  }

  // Get Item
  async getItem(itemID: string): Promise<Item> {
    const item = await this.itemModel.findById(itemID);
    return item;
  }

  // Post
  async createItem(createItemDTO: CreateItemDTO): Promise<Item> {
    const newItem = new this.itemModel(createItemDTO); // creo objeto a guardar
    return await newItem.save(); // guardo createItemDTO
  }

  // Delete
  async deleteItem(itemID: string): Promise<Item> { // o  Promise<any>
    const deletedItem = await this.itemModel.findByIdAndDelete(itemID); // elimina por id
    return deletedItem;
  }

  // Put
  async updateItem(itemID: string, createItemDTO: CreateItemDTO): Promise<Item> {
    const updatedItem = await this.itemModel
      .findByIdAndUpdate(itemID, createItemDTO, { new: true }); //new: true = devuelve el ojb actualizado
    return updatedItem;
  }

}

import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { ItemService } from "./item.service";
import { MorganInterceptor } from 'nest-morgan';
import { CreateItemDTO } from "./dto/item.dto";

@Controller('item')
export class ItemController {

    constructor(private itemService: ItemService) { }

    // Get Items /item
    // @Get('/list')
    @Get('/')
    async getItems(@Res() res) {
        const items = await this.itemService.getItems();
        return res.status(HttpStatus.OK).json(items);
    }

    // GET single item:  /item/123jhn1i23jhb
    @Get('/:itemID') // Recibo un parametro con el siguiente nombre
    async getItem(@Res() res, @Param('itemID') itemID) {
        const item = await this.itemService.getItem(itemID);
        if (!item) throw new NotFoundException('Item does not exist!');
        return res.status(HttpStatus.OK).json(item);
    }

    // Create Item: /item/create
    @Post('/create')
    async createItem(@Res() res, @Body() createItemDTO: CreateItemDTO) {

        const item = await this.itemService.createItem(createItemDTO);

        //if(!item) throw new NotFoundException('El item no existe!');

        console.log(createItemDTO);
        return res.status(HttpStatus.OK).json({
            message: ' Item created !',
            item
        }); 

    }


    // Delete Item: /delete?itemID=j34n3io5rn34iuj
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteItem(@Res() res, @Query('itemID') itemID) { // @Query: obtengo consultas en los parametros
        const itemDeleted = await this.itemService.deleteItem(itemID);
        if (!itemDeleted) throw new NotFoundException('El item no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Item Eliminado',
            itemDeleted
        });
    }

    // Update Item: /update?itemID=4ojnt4iu4i5
    @Put('/update')
    async updateItem(@Res() res, @Body() createItemDTO: CreateItemDTO, @Query('itemID') itemID) {
        const updatedItem = await this.itemService.updateItem(itemID, createItemDTO);
        if (!updatedItem) throw new NotFoundException('El item no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Item Updated Successfully',
            updatedItem 
        });
    }

}

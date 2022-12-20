import { Body, Controller, Get, Param, Post, Query, Res, Put, Delete } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {

  @Get('filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Producto = ${productId}`
    }
  }  

  @Get('')
  getProducts(
    @Query('limit') limit: number = 1,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ) {
    return {
      message: `limit = ${limit} | Offset = ${offset} | brand = ${brand}`
    };    
  }


  @Post()
  create(@Res() res: Response, @Body() payload: any) {    
    return res.status(201).json({
      message: 'Add a new product',
      payload,
    });
  }

  @Put(':id')
  update(@Res() res: Response, @Param() id: number, @Body() payload: any) {
    return res.status(200).json({
      id,
      payload
    })
  }

  @Delete(':id')
  delete(@Res() res: Response, @Param() id: number) {
    return res.status(200).json({
      message: 'Elimina producto',
      id
    });
  }

}

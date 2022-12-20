import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
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


  @Post('')
  postProducto(@Res() res: Response, @Body() payload: any) {
    console.log('res');
    console.log(res);
    
    return res.status(201).json({
      msg: 'Add a new product',
      payload,
    });
  }

}

import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get('filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): string {
    return `Producto = ${productId}`;
  }  

  @Get('')
  getProducts(
    @Query('limit') limit: number = 1,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ) {
    return `limit = ${limit} | Offset = ${offset} | brand = ${brand}`;
  }

}

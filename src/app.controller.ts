import { Controller, Get, Query } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return 'Hola mundirijillo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `Producto = ${productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategories(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string
  ): string {
    return `Category = ${categoryId} | Producto = ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 1,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ) {
    return `limit = ${limit} | Offset = ${offset} | brand = ${brand}`;
  }



}

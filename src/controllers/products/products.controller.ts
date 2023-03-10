import { Body, 
  Controller, 
  Get, 
  Param, 
  Post, 
  Query, 
  Res, 
  Put, 
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe
} from '@nestjs/common';
import { Response } from 'express';

//import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { ProductService } from '../../services/product.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';
import { Product } from '../../entities/product.entity';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductService){}

  @Get('filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  get(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    const product = this.productService.findOne(id);
    return res.json(product);
  }  

  @Get('')
  getProducts(
    @Query('limit') limit: number = 1,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ) {
    return this.productService.findAll();  
  }


  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Res() res: Response, @Body() payload: CreateProductDto) {   
    console.log(payload);     
    return res.json({count: this.productService.create(payload)});
  }

  @Put(':id')
  update(@Res() res: Response, @Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    /*return res.status(200).json({
      id,
      payload
    })*/    
    return res.json(this.productService.update(id, payload));
  }

  @Delete(':id')
  delete(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    /*return res.status(200).json({
      message: 'Elimina producto',
      id
    });*/
    return res.json(this.productService.delete(id))
  }

}

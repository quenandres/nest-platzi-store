import { Controller, Get, Param, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller('categories')
export class CategoriesController {

    @Get(':categoryId/products/:productId')
    getCategories(
        @Param('categoryId') categoryId: string,
        @Param('productId') productId: string
    ): string {
        return `Category = ${categoryId} | Producto = ${productId}`;
    }

    @Post('')
    create(@Res() res: Response, @Body() payload: any ) {
        return res.status(201).json({
            message: 'Creacion de categoria',
            body: payload
        })
    }
}

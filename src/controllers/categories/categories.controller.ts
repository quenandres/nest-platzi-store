import { Controller, Get, Param, Post, Res, Body, Put, Delete } from '@nestjs/common';
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

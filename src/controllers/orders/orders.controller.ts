import { Body, Controller, Post, Param, Put, Res, Delete } from '@nestjs/common';
import { Response } from 'express';

@Controller('orders')
export class OrdersController {

    @Post('')
    create(@Res() res: Response, @Body() payload: any) {
        return res.status(201).json({
            message: 'Crea order',
            payload
        })
    }

    @Put(':id')
    update(@Res() res: Response, @Param() id: number, @Body() payload: any) {
        return res.status(200).json({
        message: 'actualiza order',
        id,
        payload
        })
    }

    @Delete(':id')
    delete(@Res() res: Response, @Param() id: number) {
        return res.status(200).json({
        message: 'Elimina order',
        id
        });
    }
}

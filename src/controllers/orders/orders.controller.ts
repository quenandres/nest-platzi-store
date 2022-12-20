import { Body, Controller, Post } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
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
}

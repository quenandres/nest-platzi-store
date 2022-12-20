import { Controller, Put, Param, Delete, Body, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('costumers')
export class CostumersController {

    @Post('')
    create(@Res() res: Response, @Body() payload: any) {
        return res.status(201).json({
            message: 'Crear costumer',
            payload
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

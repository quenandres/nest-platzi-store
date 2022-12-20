import { Controller } from '@nestjs/common';
import { Body, Post, Res } from '@nestjs/common/decorators';
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
}

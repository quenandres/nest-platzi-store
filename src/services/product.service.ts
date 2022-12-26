import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductService {
    private counterId: number = 1;
    private products: Product[] = [
        {
            id:1,
            name:'test',
            description: 'blabla bla',
            image: 'adwawdadw',
            price: 123123,
            stock: 12
        }
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find( (item) => item.id === id );
        if( !product ) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {        
        this.counterId++;
        const newProduct: Product = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct);
        return this.products.length;
    }

    update(id: number, payload: UpdateProductDto) {
        const current = this.findOne(id);
        if( current ) {
            const index = this.products.findIndex(item => item.id === id );
            
            this.products[index] = {
                ...current,
                ...payload,
                id
            }       

            return this.products[index];
        }
        return null;
    }

    delete(id: number) {
        const product = this.findOne(id);
        if ( !product ) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        this.products = this.products.filter(item => item.id !== id);
        return `#${id} Producto eliminado`;
    }
}

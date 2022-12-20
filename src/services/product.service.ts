import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
    private counterId: number = 1;
    private products: Product[] = [
        {
            id:1,
            name: 'Producto 1 memoria',
            description: 'Texto de descripcion',
            price: 11200,
            image: '',
            stock: 1500
        }
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find(item => item.id === id);
    }

    create(payload: any) {
        this.counterId++;
        const newProduct: Product = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: Product) {
        const current = this.findOne(id);
        if( current ) {
            const index = this.products.findIndex(item => item.id === id );
            this.products[index] = {
                ...current,
                ...payload,
                id
            }

            return current;
        }
        return null;
    }
}

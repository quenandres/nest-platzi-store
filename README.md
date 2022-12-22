# NestJS

Es un framework sobre abstracciones.
- SOLID
- TS
- POO
- Programacion funcional
- Programacion reactiva

Esta basado en contradores,servicios, modelos y acceso a modelos.

## 3/23 Estructura de aplicaciones en NestJS
Nest utiliza ts por defecto

## 4/23 Presentación del proyecto: Platzi Store

## 5/23 Repaso a TypeScript: tipos y POO

## 6/23 Introducción a controladores
Los controladores se encargan de recibir las request.
- Reciben los request
- Manipulan los request
- Validan permisos
- Validan valores
- Conecta los servicios
Manejo de decoradores, para que nest le diga a una clase de ts como comportarse para el funcionamiento de nest.

#### _Arquitectura de una aplicación_
<img src="./src/image/arquitectura_de_una_aplicacion.png">

## 7/23 GET: cómo recibir parámetros

```ts
@Get('products/:productId')
getProduct(@Param('productId') productId:string ): string {
  return `Producto = ${productId}`;
}

@Get('categories/:categoryId/products/:productId')
getCategories(@Param('categoryId') categoryId:string, @Param('productId') productId:string ): string {
  return `Category = ${categoryId} | Producto = ${productId}`;
}
```

## 8/23 GET: parámetros query

```ts
@Get('products')
getProducts(
  @Query('limit') limit: number = 1,
  @Query('offset') offset: number = 0,
  @Query('brand') brand: string
) {
  return `limit = ${limit} | Offset = ${offset} | brand = ${brand}`;
}
```
>Es recomendado poner rutas estaticas primero que las rutas dinamicas, para evitar errores.

## 9/23 Separación de responsabilidades
La _S_ en los principios _SOLID_.
```ts
  @Get('categories/filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }
```
>
```ts
@Controller('categories')
```
Con esta especificación del controller no es necesario poner la ruta completa en cada _*@Get()*_
```ts
  @Get('filter')
  getProductFilter(): string {
    return `Yo soy un filter`;
  }
```


## 11/23 Qué es el método POST
@Post: Decorador para solicitudes post.
>
@Body: Decorador cuerpo de las solicitudes.
>
@Res: Decorador de respuesta.
```ts
@Post('')
create(@Res() res: Response, @Body() payload: any ) {
    return res.status(201).json({
        message: 'Creacion de categoria',
        body: payload
    })
}
```

## 12/23 Métodos PUT y DELETE para editar y eliminar

```ts
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
```

## 13/23 Códigos de estado o HTTP response status codes
- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

En nest podremos decidir si por debajo queremos usar Express o algun otro framework.

```ts
@HttpCode(HttpStatus.CREATED) // 201
```

## 14/23 Introducción a servicios: crea tu primer servicio
Los servicios tienen un decorador especial
```ts
@Injectable()
```
El cual utiliza un patrón llamado inyección de dependencias.

> Comando
```bash
nest g s services/product --flat
```
El __--flat__ lo utilizamos para que no nos cree una subcarpeta.

#### Creación de entidad
Entidad:
```ts
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
}
```

Servicio:
```ts
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
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
}
```

## 15/23 Implementando servicios en tu controlador

_@ParseIntPipe_: Este decorador transforma los valores a entero para evitar errores al transformar el ts en js.
```ts
get(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
  const product = this.productService.findOne(id)
  return res.json(product);
}  
```

Al invocar el decorador _@Res()_ le estamos diciendo a nest que vamos a utilizar este metodo para retornar los valores.

## 16/23 Manejo de errores con throw y NotFoundException
*NotFoundException* Para manejo de errores desde el servicio.

# 17/23 Introducción a pipes: usa tu primer pipe
Los pipes tienen dos funciones principales validar y transformar.
*transformación*: transforma los datos de entrada a la forma deseada (por ejemplo, de cadena a entero).
*validación*: evalúe los datos de entrada y, si son válidos, simplemente páselos sin cambios; de lo contrario, lanza una excepción cuando los datos son incorrectos.




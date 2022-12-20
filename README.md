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

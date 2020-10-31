import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

interface ProductInterface {
  readonly data: {
    readonly products: Product[];
    readonly length: number;
  };
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add-product')
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): { id: string } {
    const createdProductId = this.productsService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return { id: createdProductId };
  }

  @Get()
  getProducts(): ProductInterface {
    const products = this.productsService.getProducts();
    return {
      data: {
        products,
        length: products.length,
      },
    };
  }

  @Get(':id')
  getProduct(@Param('id') productId: string): { data: Product } {
    const product = this.productsService.getProductById(productId);
    return {
      data: product,
    };
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): { data: Product } {
    const product = this.productsService.updateProductById(
      productId,
      productTitle,
      productDescription,
      productPrice,
    );
    return {
      data: product,
    };
  }

  @Delete(':id')
  removeProduct(@Param('id') productId: string): { data: Product } {
    const product = this.productsService.removeProductById(productId);
    return {
      data: product,
    };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = uuidv4();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductById(productId): Product {
    const product = this.findProductById(productId)[0];
    return { ...product };
  }

  removeProductById(productId): Product {
    const [product, productIndex] = this.findProductById(productId);
    this.products.splice(productIndex, 1);
    return { ...product };
  }

  updateProductById(
    productId: string,
    productTitle: string,
    productDescription: string,
    productPrice: number,
  ): Product {
    const [product, productIndex] = this.findProductById(productId);
    const updatedProduct = { ...product };

    if (productTitle) {
      updatedProduct['title'] = productTitle;
    }
    if (productDescription) {
      updatedProduct['description'] = productDescription;
    }
    if (productPrice) {
      updatedProduct['price'] = productPrice;
    }

    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  private findProductById(id: string): [Product, number] {
    const productIndex = this.products.findIndex(
      product => product['id'] === id,
    );
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product with this id does not exist!');
    }
    return [product, productIndex];
  }
}

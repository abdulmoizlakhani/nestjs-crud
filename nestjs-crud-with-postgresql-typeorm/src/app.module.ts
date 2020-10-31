import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from "./orm.config";

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ProductsModule]
})
export class AppModule { }

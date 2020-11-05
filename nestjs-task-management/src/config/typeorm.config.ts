import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '<username>',
  password: '<password>',
  database: '<database-name>',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
};

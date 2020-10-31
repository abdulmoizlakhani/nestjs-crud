import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: '<database-name>',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
    username: '<username>',
    password: '<password>'
}
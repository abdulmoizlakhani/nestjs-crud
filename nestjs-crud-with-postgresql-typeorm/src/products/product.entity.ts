import { Entity, CreateDateColumn, UpdateDateColumn, Generated, Column, PrimaryColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryColumn({ type: 'text', unique: true })
    @Generated('uuid')
    productId: string;

    @Column()
    productName: string;

    @Column()
    quantity: number;

    @Column()
    amount: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
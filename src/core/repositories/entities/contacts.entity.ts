import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactsEntityModel } from "src/core/models/contactsEntity.model";

@Entity('contacts')
export class Contacts implements ContactsEntityModel{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({name:'phone-number'})
    phoneNumber: string;
    @CreateDateColumn({name:'create-date'})
    createDate: Date;
    @UpdateDateColumn({name:'updated-date'})
    updatedDate: Date;
}


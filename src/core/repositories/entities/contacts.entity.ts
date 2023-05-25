import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { contactsEntityModel } from "src/core/models/contactsEntity.interface";

@Entity('contacts')
export class contacts implements contactsEntityModel{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({name:'phone-number'})
    phoneNumber: string;
}


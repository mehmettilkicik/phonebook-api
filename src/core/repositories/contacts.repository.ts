import { Injectable } from "@nestjs/common";
import { ContactsRepositoryModel } from "../models/contactsRepository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { ContactsEntity } from "./entities/contacts.entity";
import { Repository } from "typeorm";
import { ContactsEntityModel } from "../models/contactsEntity.model";

@Injectable()
export class ContactsRepository implements ContactsRepositoryModel{
    constructor(
        @InjectRepository(ContactsEntity)
        private readonly contactsEntityRepository: Repository<ContactsEntity>,
    ) {}
    async insert(contacts: ContactsEntity): Promise<void> {
        await this.contactsEntityRepository.insert(contacts);
    }
    
    async findAll(): Promise<ContactsEntityModel[]> {
        return await this.contactsEntityRepository.find()
    }
    async findByName(name: string): Promise<ContactsEntityModel> {
        return await this.contactsEntityRepository.findOneBy({name:name});
    }
    async findByNumber(phoneNumber: string): Promise<ContactsEntityModel> {
        return await this.contactsEntityRepository.findOneBy({phoneNumber:phoneNumber});
    }
    async updateNumber(name: string,phoneNumber:string): Promise<void> {
        await this.contactsEntityRepository.update({name : name},{phoneNumber : phoneNumber});
    }
    async deleteByNumber(phoneNumber:string): Promise<void> {
        await this.contactsEntityRepository.delete({phoneNumber:phoneNumber});
    }

}
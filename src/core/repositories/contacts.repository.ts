import { Injectable } from "@nestjs/common";
import { contactsRepositoryModel } from "../models/contactsRepository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Contacts } from "./entities/contacts.entity";
import { Repository } from "typeorm";
import { ContactsEntityModel } from "../models/contactsEntity.model";

@Injectable()
export class contactsRepository implements contactsRepositoryModel{
    constructor(
        @InjectRepository(Contacts)
        private readonly contactsEntityRepository: Repository<Contacts>,
    ) {}
    async insert(contacts: ContactsEntityModel): Promise<void> {
        const contactsEntity = await this.toContactsEntity(contacts);
        await this.contactsEntityRepository.insert(contactsEntity);
    }
    
    async findall(): Promise<ContactsEntityModel[]> {
        throw new Error("Method not implemented.");
    }
    async findByName(name: string): Promise<ContactsEntityModel> {
        throw new Error("Method not implemented.");
    }
    async findByNumber(phoneNumber: string): Promise<ContactsEntityModel> {
        throw new Error("Method not implemented.");
    }
    async updateNumber(name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteByNumber(phoneNumber: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
    private toContacts(contactsEntity: Contacts): ContactsEntityModel{
        const contacts: ContactsEntityModel = new ContactsEntityModel();

        contacts.id = contactsEntity.id;
        contacts.name = contactsEntity.name;
        contacts.phoneNumber = contactsEntity.phoneNumber;
        contacts.createDate = contactsEntity.createDate;
        contacts.updatedDate = contactsEntity.updatedDate;



        return contacts;
    }
    
    private toContactsEntity(contacts : ContactsEntityModel): Contacts{
        const contactsEntity: Contacts = new Contacts();

        contactsEntity.id = contacts.id;
        contactsEntity.name = contacts.name;
        contactsEntity.phoneNumber = contacts.phoneNumber;


        return contactsEntity;
    }
   
}
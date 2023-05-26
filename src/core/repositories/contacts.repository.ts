import { Injectable } from "@nestjs/common";
import { contactsRepositoryModel } from "../models/contactsRepository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Contacts } from "./entities/contacts.entity";
import { Repository } from "typeorm";
import { ContactsEntityModel } from "../models/contactsEntity.model";

@Injectable()
export class ContactsRepository implements contactsRepositoryModel{
    constructor(
        @InjectRepository(Contacts)
        private readonly contactsEntityRepository: Repository<Contacts>,
    ) {}
    async insert(contacts: ContactsEntityModel): Promise<void> {
        const contactsEntity = await this.toContactsEntity(contacts);
        await this.contactsEntityRepository.insert(contactsEntity);
    }
    
    async findAll(): Promise<ContactsEntityModel[]> {
        const allcontactsEntity = await this.contactsEntityRepository.find();
        return allcontactsEntity.map((contactsEntity) => this.toContacts(contactsEntity));
    }
    async findByName(name: string): Promise<ContactsEntityModel> {
        const contactsEntity = await this.contactsEntityRepository.findOneByName(name);
        return this.toContacts(contactsEntity);
    }
    async findByNumber(phoneNumber: string): Promise<ContactsEntityModel> {
        const contactsEntity = await this.contactsEntityRepository.findOneByPhoneNumber(phoneNumber);
        return this.toContacts(contactsEntity);
    }
    async updateNumber(name: string,phoneNumber:string): Promise<void> {
        await this.contactsEntityRepository.update({name : name},{phoneNumber : phoneNumber});
    }
    async deleteByNumber(phoneNumber: string): Promise<void> {
        await this.contactsEntityRepository.delete({phoneNumber:phoneNumber});
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

        contactsEntity.name = contacts.name;
        contactsEntity.phoneNumber = contacts.phoneNumber;


        return contactsEntity;
    }
   
}
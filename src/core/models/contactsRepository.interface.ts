import { ContactsEntityModel } from "./contactsEntity.model";
export interface ContactsRepositoryModel{
    insert(contacts:ContactsEntityModel):Promise<void>;
    findAll(): Promise<ContactsEntityModel[]>;
    findByName(name:string): Promise<ContactsEntityModel>;
    findByNumber(phoneNumber:number): Promise<ContactsEntityModel>;
    updateNumber(name:string,phoneNumber:number): Promise<void>;
    deleteByNumber(phoneNumber:number): Promise<void>;
}
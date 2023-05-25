import { ContactsEntityModel } from "./contactsEntity.model";
export interface contactsRepositoryModel{
    insert(contacts:ContactsEntityModel):Promise<void>;
    findall(): Promise<ContactsEntityModel[]>;
    findByName(name:string): Promise<ContactsEntityModel>;
    findByNumber(phoneNumber:string): Promise<ContactsEntityModel>;
    updateNumber(name:string): Promise<void>;
    deleteByNumber(phoneNumber:string): Promise<void>;
}
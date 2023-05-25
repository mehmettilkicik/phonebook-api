import { contactsEntityModel } from "./contactsEntity.interface";
export interface contactsRepositoryModel{
    insert(contacts:contactsEntityModel):Promise<void>;
    findall(): Promise<contactsEntityModel[]>;
    findByName(name:string): Promise<contactsEntityModel>;
    findByNumber(phoneNumber:string): Promise<contactsEntityModel>;
    updateNumber(name:string): Promise<void>;
    deleteByNumber(phoneNumber:string): Promise<void>;
}
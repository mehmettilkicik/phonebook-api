import { Inject, Injectable } from '@nestjs/common';
import { ContactsEntityModel } from 'src/core/models/contactsEntity.model';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class GetAllContactsUsecase {
    constructor(private readonly contactsRepository: ContactsRepository){}
    
    async execute():Promise<ContactsEntityModel[]>{
        return await this.contactsRepository.findAll();
    }
}


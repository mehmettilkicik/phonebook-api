import { Inject, Injectable } from '@nestjs/common';
import { ContactsEntityModel } from 'src/core/models/contactsEntity.model';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class GetContactsByNameUsecase {
    constructor(private readonly contactsRepository: ContactsRepository){}
    
    async execute(name:string):Promise<ContactsEntityModel>{
        return await this.contactsRepository.findByName(name);
    }
}


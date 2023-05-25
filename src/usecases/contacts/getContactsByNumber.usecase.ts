import { Inject, Injectable } from '@nestjs/common';
import { ContactsEntityModel } from 'src/core/models/contactsEntity.model';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class getContactsByNumberUsecase {
    constructor(private readonly contactsRepository: ContactsRepository){}

    async execute(phoneNumber:string):Promise<ContactsEntityModel>{
        return await this.contactsRepository.findByNumber(phoneNumber);
    }
}


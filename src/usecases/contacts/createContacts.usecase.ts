import { Inject, Injectable } from '@nestjs/common';
import { ContactsEntityModel } from 'src/core/models/contactsEntity.model';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class CreateContactsUsecase {
    constructor(private readonly contactsRepository: ContactsRepository){}
    
    
    async execute(name:string,phoneNumber:number): Promise<void> {
      const contacts = new ContactsEntityModel();
      contacts.name = name;
      contacts.phoneNumber = phoneNumber;
      await this.contactsRepository.insert(contacts);
      }
    }


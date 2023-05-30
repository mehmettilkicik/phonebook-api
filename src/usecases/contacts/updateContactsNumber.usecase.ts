import { Inject, Injectable } from '@nestjs/common';
import { ContactsEntityModel } from 'src/core/models/contactsEntity.model';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class UpdateContactsNumberUsecase {
    constructor(private readonly contactsRepository: ContactsRepository){}
    
    
    async execute(name:string, phoneNumber:number): Promise<void> {
        await this.contactsRepository.updateNumber(name, phoneNumber); 
      }
    }


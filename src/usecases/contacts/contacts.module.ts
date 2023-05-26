import { Module } from '@nestjs/common';
import { CreateContactsUsecase } from './createContacts.usecase';
import { DeleteContactsUsecase } from './deleteContacts.usecase';
import { GetAllContactsUsecase } from './getAllContacts.usecase';
import { GetContactsByNameUsecase } from './getContactsByName.usecase';
import { GetContactsByNumberUsecase } from './getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from './updateContactsNumber.usecase';
import { ContactsController } from 'src/controllers/contacts.controller';

@Module({
  providers: [CreateContactsUsecase, DeleteContactsUsecase, GetAllContactsUsecase,
     GetContactsByNameUsecase, GetContactsByNumberUsecase, UpdateContactsNumberUsecase],
     controllers: [ContactsController]  
})
export class ContactsModule {}

import { Module } from '@nestjs/common';
import { CreateContactsUsecase } from './createContacts.usecase';
import { DeleteContactsUsecase } from './deleteContacts.usecase';
import { GetAllContactsUsecase } from './getAllContacts.usecase';
import { GetContactsByNameUsecase } from './getContactsByName.usecase';
import { GetContactsByNumberUsecase } from './getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from './updateContactsNumber.usecase';

@Module({
  providers: [CreateContactsUsecase, DeleteContactsUsecase, GetAllContactsUsecase,
     GetContactsByNameUsecase, GetContactsByNumberUsecase, UpdateContactsNumberUsecase]
})
export class ContactsModule {}

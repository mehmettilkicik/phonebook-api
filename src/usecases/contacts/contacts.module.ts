import { Module } from '@nestjs/common';
import { getAllContactsUsecase } from './getAllContacts.usecase';

@Module({
  providers: [getAllContactsUsecase]
})
export class ContactsModule {}

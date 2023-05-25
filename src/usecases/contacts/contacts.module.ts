import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.usecase';

@Module({
  providers: [ContactsService]
})
export class ContactsModule {}

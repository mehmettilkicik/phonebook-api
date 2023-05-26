import { Module } from '@nestjs/common';
import { CreateContactsUsecase } from './createContacts.usecase';
import { DeleteContactsUsecase } from './deleteContacts.usecase';
import { GetAllContactsUsecase } from './getAllContacts.usecase';
import { GetContactsByNameUsecase } from './getContactsByName.usecase';
import { GetContactsByNumberUsecase } from './getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from './updateContactsNumber.usecase';
import { ContactsController } from 'src/controllers/contacts.controller';
import { ContactsRepository } from 'src/core/repositories/contacts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from 'src/core/repositories/entities/contacts.entity';

const ENTITIES = {
  SQLITE: [Contacts]
}

@Module({
    imports:[TypeOrmModule.forFeature(ENTITIES.SQLITE)],
    providers: [CreateContactsUsecase, DeleteContactsUsecase, GetAllContactsUsecase,
     GetContactsByNameUsecase, GetContactsByNumberUsecase, UpdateContactsNumberUsecase],
    controllers: [ContactsController],  
    exports:[ContactsRepository]
})
export class ContactsModule {}

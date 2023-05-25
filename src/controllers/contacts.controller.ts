import { Controller } from '@nestjs/common';
import { GetAllContactsUsecase } from 'src/usecases/contacts/getAllContacts.usecase';
import { GetContactsByNameUsecase } from 'src/usecases/contacts/getContactsByName.usecase';
import { GetContactsByNumberUsecase } from 'src/usecases/contacts/getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from 'src/usecases/contacts/updateContactsNumber.usecase';
import { CreateContactsUsecase } from 'src/usecases/contacts/createContacts.usecase';
import { DeleteContactsUsecase } from 'src/usecases/contacts/deleteContacts.usecase';


@Controller('contacts')
export class ContactsController {
}

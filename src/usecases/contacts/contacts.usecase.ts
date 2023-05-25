import { Inject, Injectable } from '@nestjs/common';
import { CONTACTS_REPOSITORY_TOKEN } from 'src/core/constants/contacts.constants';
import { ContactsRepository} from 'src/core/repositories/contacts.repository';

@Injectable()
export class ContactsUsecaseHandler {
    constructor(@Inject(CONTACTS_REPOSITORY_TOKEN) private readonly repository: ContactsRepository){}
}


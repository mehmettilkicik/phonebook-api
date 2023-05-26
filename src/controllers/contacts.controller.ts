import { Controller, Get, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { GetAllContactsUsecase } from 'src/usecases/contacts/getAllContacts.usecase';
import { GetContactsByNameUsecase } from 'src/usecases/contacts/getContactsByName.usecase';
import { GetContactsByNumberUsecase } from 'src/usecases/contacts/getContactsByNumber.usecase';
import { UpdateContactsNumberUsecase } from 'src/usecases/contacts/updateContactsNumber.usecase';
import { CreateContactsUsecase } from 'src/usecases/contacts/createContacts.usecase';
import { DeleteContactsUsecase } from 'src/usecases/contacts/deleteContacts.usecase';


@Controller('contacts')
export class ContactsController {
    constructor(
        private readonly getAllContactsUsecase : GetAllContactsUsecase,
        private readonly getContactsByNameUsecase : GetContactsByNameUsecase,
        private readonly getContactsByNumberUsecase : GetContactsByNumberUsecase,
        private readonly updateContactsNumberUsecase : UpdateContactsNumberUsecase,
        private readonly createContactsUsecase : CreateContactsUsecase,
        private readonly deleteContactsUsecase : DeleteContactsUsecase
    ){}

    @Get('contacts')
    async getContacts(){
        const contacts = await this.getAllContactsUsecase.execute();
        return contacts;
    }

    @Get('contact')
    async getContactByName(@Query('name',ValidationPipe) name: string){
        const contact = await this.getContactsByNameUsecase.execute(name);
        return contact;
    }

    
}

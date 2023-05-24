import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './usecases/contacts/contacts.module';
import { ContactsController } from './controllers/contacts.controller';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    "type": "sqlite",
    "database": "phonebook.sqlite",
    "entities": ["src/**/*.entity{.ts,.js}"],
    "synchronize": true
  }
  ), ContactsModule],
  controllers: [ContactsController],
  providers: [],
})
export class AppModule {}

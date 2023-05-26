import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './usecases/contacts/contacts.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    "type": "sqlite",
    "database": "phonebook.db",
    "entities": ["src/core/repositories/entities.entity{.ts,.js}"],
    "synchronize": true,
  }
  ), ContactsModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './usecases/contacts/contacts.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    "type": "sqlite",
    "database": "phonebook",
    "entities": [__dirname + '/../**/*.entity.{js,ts}'],
    "synchronize": true,
  }
  ), ContactsModule],
})
export class AppModule {}

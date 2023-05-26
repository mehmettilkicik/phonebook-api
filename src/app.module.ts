import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ContactsModule } from './usecases/contacts/contacts.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    "type": "sqlite",
    "database": "phonebook",
    "entities": ["src/**/*.entity{.ts,.js}"],
    "synchronize": true,
    "autoLoadEntities": true
  }
  ), ContactsModule],
})
export class AppModule {}

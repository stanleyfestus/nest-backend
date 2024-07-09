import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";

export const dbConnection = {
  CONNECTION_STRING: 'CONNECTION_STRING',
  DB: 'POSTGRES',
  DBNAME: 'TEST'
}

export type Connection = {
  CONNECTION_STRING: string
  DB: string
  DBNAME: string
}
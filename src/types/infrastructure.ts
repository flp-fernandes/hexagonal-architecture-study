import { Knex } from 'knex';

/* MySQL Adapter */
export type MysqlDatabase = Knex;

export type MysqlAdapterConfig = {
  dbConn: MysqlDatabase;
}

export interface IMysqlAdapter {
  db: Knex.QueryBuilder;
  tableName: string;
}

/* Infrastructure */
export type Container = {}

export type ContainerConfig = {}
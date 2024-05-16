import { Knex, knex } from 'knex';

import * as knexfile from '../../knexfile';

let db: Knex;
export default function getDbConn(): Knex {
  if (!db) {
    db = knex(knexfile);
  }

  return db;
}
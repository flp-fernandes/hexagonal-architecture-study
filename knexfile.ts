import { env } from './src/util/env';
import { logger } from './src/util/logger'

module.exports = {
  client: 'mysql2',
  debug: env.mysqlDebug || false,
  connection: {
    host: env.mysqlHost,
    port: env.mysqlPort,
    user: env.mysqlUser,
    password: env.mysqlPassword,
    database: env.mysqlSchema,
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
  },
  pool: {
    min: env.mysqlPoolMin,
    max: env.mysqlPoolMax,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterCreate: function _(connection: any, done: Function) {
      connection.query('SET time_zone = "UTC";', function er(err: Error) {
        if (err) {
          logger('knexfile').warn('failed to initialize mysql database connection', err);
        } else {
          logger('knexfile').debug('mysql database connected');
        }
        done(err, connection);
      });
    },
  },
};
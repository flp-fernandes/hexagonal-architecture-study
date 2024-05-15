import winston from 'winston';

const {
  format,
  createLogger,
  transports
} = winston;

const {
  combine,
  timestamp,
  json,
  printf,
  label,
  colorize
} = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} - [${label}] ${level}: ${message}`;
});

export const logger = (className: string) => { 
  return createLogger({
    level: 'debug',
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:sss'}),
      label({ label: className }),
      logFormat,
    ),
    transports: [
      new transports.Console({ format: colorize() }),
      new transports.File({
        level: 'error',
        format: json(),
        filename: 'errorLog.log'
      })
    ]
  })
};
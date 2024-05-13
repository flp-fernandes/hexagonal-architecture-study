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
  printf
} = format;

export const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:sss'})
  )
})
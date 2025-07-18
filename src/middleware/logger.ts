// src/middleware/logger.ts

export const logger = (message: string, data?: any) => {
  console.log(`[Logger]: ${message}`, data ?? '');
};
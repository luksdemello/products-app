import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../utils/AppError';
import { ResponseCode } from '../../utils/ResponseCode';

export function errorhandler(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      message: error.message,
      status: error.status,
    });
  }

  return response.status(ResponseCode.InternalServerError).json({
    message: error.message,
    status: ResponseCode.InternalServerError,
  });
}

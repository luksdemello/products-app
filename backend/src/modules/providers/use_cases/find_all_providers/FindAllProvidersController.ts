import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { FindAllProvidersUseCase } from './FindAllProvidersUseCase';

class FindAllProvidersController {
  async handler(request: Request, response: Response): Promise<Response> {
    const findAllProvidersUseCase = new FindAllProvidersUseCase();

    const providers = await findAllProvidersUseCase.execute();

    return response.status(ResponseCode.Success).json(providers);
  }
}

const findAllProvidersController = new FindAllProvidersController();

export { findAllProvidersController };

import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { CreateProviderUseCase } from './CreateProviderUseCase';

class CreateProviderController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { active, document, name, type, address } = request.body;

    const createProviderUseCase = new CreateProviderUseCase();

    const provider = await createProviderUseCase.execute({
      provider: {
        active,
        document,
        name,
        type,
      },
      address,
    });

    return response.status(ResponseCode.Created).json(provider);
  }
}

const createProviderController = new CreateProviderController();

export { createProviderController };

import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { ProviderViewModel } from '../../view_models/ProviderViewModel';
import { CreateProviderUseCase } from './CreateProviderUseCase';

class CreateProviderController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { active, document, name, type, address } = request.body;

    const createProviderUseCase = new CreateProviderUseCase();

    const providerViewModel = new ProviderViewModel({
      name,
      active,
      document,
      type,
    });

    const errors = await validate(providerViewModel);

    if (errors.length > 0) {
      return response.status(ResponseCode.BadRequest).json(errors);
    }

    const provider = await createProviderUseCase.execute({
      provider: {
        ...providerViewModel,
      },
      address,
    });

    return response.status(ResponseCode.Created).json(provider);
  }
}

const createProviderController = new CreateProviderController();

export { createProviderController };

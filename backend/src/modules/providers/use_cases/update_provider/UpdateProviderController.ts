import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { ProviderViewModel } from '../../view_models/ProviderViewModel';
import { UpdateProviderUseCase } from './UpdateProviderUseCase';

class UpdateProviderController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { uid } = request.params;
    const { active, document, name, type } = request.body;

    const updateProviderUseCase = new UpdateProviderUseCase();

    const providerViewModel = new ProviderViewModel({
      name,
      active,
      document,
      type,
    });

    const errors = await validate(providerViewModel);

    if (errors.length > 0) {
      return response
        .status(ResponseCode.BadRequest)
        .json(errors.map((v) => v.constraints));
    }

    await updateProviderUseCase.execute({
      provider: {
        ...providerViewModel,
      },
      uid,
    });

    return response.status(ResponseCode.Success).json({ message: 'Success' });
  }
}

const updateProviderController = new UpdateProviderController();

export { updateProviderController };

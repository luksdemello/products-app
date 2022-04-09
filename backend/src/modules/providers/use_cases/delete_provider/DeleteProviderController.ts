import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { DeleteProviderUseCase } from './DeleteProviderUseCase';

class DeleteProviderController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { uid } = request.params;

    const deleteProviderUseCase = new DeleteProviderUseCase();

    await deleteProviderUseCase.execute(uid);

    return response.status(ResponseCode.Success).json({ message: 'Success' });
  }
}

const deleteProviderController = new DeleteProviderController();

export { deleteProviderController };

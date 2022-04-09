import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { FindProviderByUidUseCase } from './FindProviderByUidUseCase';

class FindProviderByUidController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { uid } = request.params;

    const findProviderByUidUseCase = new FindProviderByUidUseCase();

    const provider = await findProviderByUidUseCase.execute(uid);

    return response.status(ResponseCode.Success).json(provider);
  }
}

const findProviderByUidController = new FindProviderByUidController();

export { findProviderByUidController };

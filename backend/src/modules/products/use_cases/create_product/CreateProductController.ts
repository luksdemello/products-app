import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { ProdcutViewModel } from '../../view_models/ProductViewModel';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { product } = request.body;
    const { file } = request;

    const productJson = JSON.parse(product);

    const prodcutViewModel = new ProdcutViewModel({
      ...productJson,
    });

    const errors = await validate(prodcutViewModel);

    if (errors.length > 0) {
      return response.status(ResponseCode.BadRequest).json(errors);
    }

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      data: {
        ...prodcutViewModel,
      },
      file: file ?? null,
    });

    return response.status(ResponseCode.Success).json(result);
  }
}

const createProductController = new CreateProductController();

export { createProductController };

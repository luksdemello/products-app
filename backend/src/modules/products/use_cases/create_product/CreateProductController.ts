import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { ProdcutViewModel } from '../../view_models/ProductViewModel';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handler(request: Request, response: Response): Promise<Response> {
    const {
      active,
      description,
      created_at,
      image,
      imageUpload,
      name,
      price,
      provider_uid,
    } = request.body;

    const prodcutViewModel = new ProdcutViewModel({
      active,
      description,
      created_at,
      image,
      imageUpload,
      name,
      price,
      provider_uid,
    });

    const errors = await validate(prodcutViewModel);

    if (errors.length > 0) {
      return response.status(ResponseCode.BadRequest).json(errors);
    }

    const createProductUseCase = new CreateProductUseCase();

    const product = await createProductUseCase.execute({
      data: {
        ...prodcutViewModel,
      },
      imageData: {
        image,
        image_name: imageUpload,
      },
    });

    return response.status(ResponseCode.Success).json(product);
  }
}

const createProductController = new CreateProductController();

export { createProductController };

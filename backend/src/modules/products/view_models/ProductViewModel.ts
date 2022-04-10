import { IsNotEmpty } from 'class-validator';

class ProdcutViewModel {
  @IsNotEmpty({ message: 'The field $property is required' })
  name: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  description: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  imageUpload: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  image: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  price: number;

  @IsNotEmpty({ message: 'The field $property is required' })
  created_at: Date;

  @IsNotEmpty({ message: 'The field $property is required' })
  active: boolean;

  @IsNotEmpty({ message: 'The field $property is required' })
  provider_uid: string;

  constructor({
    name,
    image,
    price,
    created_at,
    active,
    provider_uid,
    description,
    imageUpload,
  }: ProdcutViewModel) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.created_at = created_at;
    this.active = active;
    this.provider_uid = provider_uid;
    this.imageUpload = imageUpload;
  }
}

export { ProdcutViewModel };

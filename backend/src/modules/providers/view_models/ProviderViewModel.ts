import { IsNotEmpty, Length } from 'class-validator';

class ProviderViewModel {
  @Length(2, 100, {
    message:
      'The field $property must be between $constraint1 and $constraint2 characters',
  })
  name: string;

  @Length(11, 14, {
    message:
      'The field $property must be between $constraint1 and $constraint2 characters',
  })
  document: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  type: string;

  @IsNotEmpty({ message: 'The field $property is required' })
  active: boolean;

  constructor({ name, document, type, active }: ProviderViewModel) {
    this.name = name;
    this.document = document;
    this.type = type;
    this.active = active;
  }
}

export { ProviderViewModel };

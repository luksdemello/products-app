class AppError {
  readonly message: string;

  readonly status: number;

  constructor({ message, status }: AppError) {
    this.message = message;
    this.status = status;
  }
}

export { AppError };

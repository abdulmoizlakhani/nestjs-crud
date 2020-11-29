interface ErrorCode {
  [key: string]: string;
}

const ErrorCodes: ErrorCode = {
  '23505': 'Username already exists!',
};

export default ErrorCodes;

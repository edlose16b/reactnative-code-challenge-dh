export class ServerError extends Error {
  constructor(message: string | null = null) {
    super(message ?? 'Server Failure');
  }
}

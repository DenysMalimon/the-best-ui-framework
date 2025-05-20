export class DIContainer {
  private registry = new Map<any, any>();

  register<T>(token: any, value: T) {
    this.registry.set(token, value);
  }

  resolve<T>(token: any): T {
    const val = this.registry.get(token);
    if (!val) throw new Error(`Token not found: ${token}`);
    return val;
  }
}

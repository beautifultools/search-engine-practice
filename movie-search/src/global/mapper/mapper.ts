interface Mapper<D, T> {
  convertToDomain(target: T):D;
  convertFromDomain(domain: D):T;
}

interface AsyncMapper<D, T> {
  convertToDomain(target: T):Promise<D>;
  convertFromDomain(domain: D):Promise<T>;
}

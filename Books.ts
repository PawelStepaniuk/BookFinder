import { IRequestStrategy } from './IRequestStrategy';
import CacheStorage from './CacheStorage';

export default class Books {
    request: IRequestStrategy

    constructor(request: IRequestStrategy) {
      this.request = request;
    }

    async get(query:string) {
      const cache = new CacheStorage();
      if (!cache.isExist(query)) {
        const data = await this.request.getBooks(query);
        cache.saveToFile(query, JSON.stringify(data));
      }
      return cache.readFromFile(query);
    }
}

import { IRequestStrategy } from './IRequestStrategy';

const fs = require('fs');

export default class CacheStorage {
  saveToFile(name:string, data:string) {
    const dataPath = `./cache/${name}.json`;
    try {
      fs.writeFileSync(dataPath, data);
    } catch (err) {
      console.error(err);
    }
  }

  readFromFile(name:string) {
    const dataPath = `./cache/${name}.json`;
    try {
      return JSON.parse(fs.readFileSync(dataPath));
    } catch (err) {
      console.error(err);
    }
  }

  isExist(name:string) {
    const dataPath = `./cache/${name}.json`;
    return fs.existsSync(dataPath);
  }

  // async getBooks(query: string) {
  //   const dataPath = `./cache/${query}.json`;
  //   if (!fs.existsSync(dataPath)) {
  //     const data = await this.strategy.getBooks(query);
  //     fs.writeFileSync(dataPath, JSON.stringify(data));
  //   }
  //   return JSON.parse(fs.readFileSync(dataPath));
  // }
}

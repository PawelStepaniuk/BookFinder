import axios from 'axios';
import { IRequestStrategy } from './IRequestStrategy';

const { URL, URLSearchParams } = require('url');

export default class HttpAxiosClient implements IRequestStrategy {
  async getBooks(query:string) {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    const url = new URL(apiUrl);
    const params = [['q', query]];
    url.search = new URLSearchParams(params);
    const response = await axios.get(url.href);
    return response.data;
  }
}

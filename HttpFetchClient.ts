import fetch from 'cross-fetch';
import { IRequestStrategy } from './IRequestStrategy';

const { URL, URLSearchParams } = require('url');

export default class HttpFetchClient implements IRequestStrategy {
  async getBooks(query:string) {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    const url = new URL(apiUrl);
    const params = [['q', query]];
    url.search = new URLSearchParams(params);
    const response = await fetch(url.href);
    return response.json();
  }
}

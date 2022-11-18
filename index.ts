import CacheStorage from './CacheStorage';
import HttpAxiosClient from './HttpAxiosClient';
import HttpFetchClient from './HttpFetchClient';
import Books from './Books';

// const cache = new CacheStorage(new HttpAxiosClient());
// cache.getBooks('harry').then((result) => { console.log(result); });

const books = new Books(new HttpAxiosClient());

books.get('harry').then((r) => { console.log(r); });

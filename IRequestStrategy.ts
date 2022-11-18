export interface IRequestStrategy {
getBooks(query:string):Promise<any>
}

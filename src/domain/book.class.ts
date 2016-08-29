import IBookInterface from '../interfaces/book.interface'

class Book implements IBookInterface {
    public id: string;
    public title: string;
    public author: string;
    public year: number;
    public genre: string;
    public cover: string;
    public isbn: string;

    constructor(book: IBookInterface) {
        Object.assign(this, book);
    }

    public get validation() : any {
        return {
            isValid: true,
            errors: {}
        }
    }
}

export default Book
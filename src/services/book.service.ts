import Book from '../domain/book.class'
import IBookInterface from '../interfaces/book.interface'

class BookService {

    public static async create(book: IBookInterface): any {
        let item = new Book(book);
        if(item.validation.isValid) {
            // create record into database
            return item;
        }
        else return item.validation.errors;
    }

    public static async update(book: IBookInterface): any {
        let item = new Book(book);
        if(item.validation.isValid) {
            // create record into database
            return item;
        }
        else return item.validation.errors;
    }

    public static async remove(id: string): any {
        //Todo not implemented
        return true;
    }

    public static async fetchById(id: string): IBookInterface {
        //Todo not implemented
        return IBookInterface;
    }

    public static async fetchByISBN(isbn: string): IBookInterface {
        //Todo not implemented
        return IBookInterface;
    }

    public static async fetchAll(): IBookInterface[] {
        //Todo not implemented
        return IBookInterface;
    }

    public static async findByTitle(title: string): IBookInterface[] {
        //Todo not implemented
        return IBookInterface;
    }

    public static async findByAuthor(author: string): IBookInterface[] {
        //Todo not implemented
        return IBookInterface;
    }
}

export default BookService
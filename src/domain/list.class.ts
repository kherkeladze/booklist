import IListInterface from '../interfaces/list.interface'
import IBookInterface from '../interfaces/book.interface'

class List implements IListInterface {
    public id: string;
    public userId: string;
    public books: IBookInterface;

    constructor(book: IListInterface) {
        Object.assign(this, book);
    }
}

export default List
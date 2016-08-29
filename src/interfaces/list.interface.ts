import IBookInterface from 'book.interface'

interface IListInterface {
    id: string
    userId: string
    books: IBookInterface
}

export default IListInterface
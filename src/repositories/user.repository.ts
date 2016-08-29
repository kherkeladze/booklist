import IUserInterface from '../interfaces/user.interface'
import BaseRepository from 'base.repository'

class UserRepository extends BaseRepository {

    public static async create(user: IUserInterface): any {

    }

    public static async update(user: IUserInterface): any {

    }

    public static async remove(id: string): boolean {

    }

    public static async fetchById(id: string): IUserInterface {

    }

    public static async fetchBySocialNetwork(socialNetwork: any): IUserInterface {

    }

}

export default UserRepository
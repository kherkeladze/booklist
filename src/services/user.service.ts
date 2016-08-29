import User from '../domain/user.class'
import UserRepository from '../repositories/user.repository'

class UserService {

    public static async create(user): any {
        let item = new User(user);
        if(item.validation.isValid) {
            return await UserRepository.create(item);
        }
        else return user.validation.errors;
    }

    public static async update(user): any {
        let item = new User(user);
        if(item.validation.isValid) {
            return await UserRepository.update(item);
        }
        else return user.validation.errors;
    }

    public static async remove(id: string): boolean {
        return await UserRepository.remove(id);
    }
}

export default UserService
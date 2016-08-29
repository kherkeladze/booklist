import IUserInterface from '../interfaces/user.interface'

class User implements IUserInterface {
    public id: string;
    public email: string;
    public listId: string;
    public socials: string;

    constructor(user: IUserInterface) {
       Object.assign(this, user);
    }

    public get validation() : any {
        return {
            isValid: true,
            errors: {}
        }
    }
}

export default User
import IUserInterface from '../interfaces/user.interface'

class User implements IUserInterface {
    public id: string;
    public email: string;
    public listId: string;
    public socials: string;

    constructor(user: IUserInterface) {
       Object.assign(this, user);
    }

    public validation(): boolean {
        //Todo not implemented
        return true;
    }
}

export default User
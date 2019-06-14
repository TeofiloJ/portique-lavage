import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../models/user.model';
import { ModelType } from 'typegoose';



@Injectable()
export class UserService {

    constructor(@InjectModel(User) private readonly catModel: ModelType<User>) {}

    users = [
        { id: 1, prenom: 'Teo', nom: "jeandot", autre: 'blip' },
        { id: 2, prenom: 'Brice', nom: "Mousseni", autre: 'bloup' },
    ];

    getUsers(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.users);
        });
    }
    getUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            const user = this.users.find(user => user.id === id);
            if (!user) {
                throw new HttpException('users does not exist!', 404);
            }
            resolve(user);
        });
    }

    addUser(user): Promise<any> {
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }

    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            let index = this.users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new HttpException('user does not exist!', 404);
            }
            this.users.splice(1, index);
            resolve(this.users);
        });
    }
}
import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get(':userID')
    async getUser(@Param('userID') userID) {
        const book = await this.userService.getUser(userID);
        return book;
    }

        @Get()
        async getUsers() {
            const books = await this.userService.getUsers();
            return books;
        }

        @Post()
        async addUser(@Body() user: User) {
            const book = await this.userService.addUser(user);
            return book;
        }
    
        @Delete()
        async deleteUser(@Param('userID') userID) {
            const users = await this.userService.deleteUser(userID);
            return users;
        }
}
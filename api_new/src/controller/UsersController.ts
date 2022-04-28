import { getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
const bcrypt = require('bcrypt');

export class UsersController {

    private usersRepository = getManager().getRepository(Users)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.usersRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.usersRepository.findOneBy({ id: parseInt(request.params.id) });
    }

    async check(request: Request, response: Response, next: NextFunction) {
        let currentUser = await this.usersRepository.findOneBy({ email: request.params.email });

        if (!currentUser) {
            return {'status': 'success'}
        } else {
            return {'status': 'error'}
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let currentUser = await this.usersRepository.findOneBy({ id: parseInt(request.params.id) });
        if (!currentUser) return { 'error': 'Пользователь отсутствует' }

        if (Object.keys(request.body).length === 0) return { 'error': 'Пустой запрос' }
        for (const key in request.body) {
            // @ts-ignore
            currentUser[key] = request.body[key];
        }

        return await this.usersRepository.save(currentUser);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        if (Object.keys(request.body).length === 0 && Object.keys(request.body.user).length === 0) return { 'error': 'Пустой запрос' }
        const { name, email, password } = request.body.user;

        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_HASH));
        const passwordToSave = bcrypt.hashSync(password, salt);
        return this.usersRepository.save(
            this.usersRepository.create(
                {
                    email,
                    name,
                    password: passwordToSave
                }
            )
        )
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let currentUser = await this.usersRepository.findOneBy({ id: parseInt(request.params.id) })
        if (!currentUser) return { 'error': 'Пользователь отсутствует' }

        currentUser.deleted_at = new Date();

        return await this.usersRepository.save(currentUser);
    }
}

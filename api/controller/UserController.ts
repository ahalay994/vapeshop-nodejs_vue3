import { getManager } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import '../data-source';

export class UserController {

    // private userRepository = getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        const userRepository = getManager().getRepository(User);
        console.log('userRepository', userRepository);
        return await userRepository.find();
        // return this.userRepository.find()
    }
    //
    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.findOne(request.params.id)
    // }
    //
    // async save(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.save(request.body)
    // }
    //
    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
    //     await this.userRepository.remove(userToRemove)
    // }

}

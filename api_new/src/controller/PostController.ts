import {Request, Response, NextFunction} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export class PostController {

    private postRepository = getManager().getRepository(Post)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find()
    }

}
/*export async function postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load posts
    const posts = await postRepository.find();

    // return loaded posts
    response.send(posts);
}*/

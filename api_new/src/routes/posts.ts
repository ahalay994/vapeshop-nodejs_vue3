import {PostController} from "../controller/PostController";

export const PostsRoutes = [
    {
        method: "get",
        route: "/posts",
        controller: PostController,
        action: "all"
    }
];

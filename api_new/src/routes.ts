import {PostsRoutes} from "./routes/posts";
import {UsersRoutes} from "./routes/users";

export const AppRoutes = [
    ...PostsRoutes,
    ...UsersRoutes
];

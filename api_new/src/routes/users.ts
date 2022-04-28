import {UsersController} from "../controller/UsersController";

export const UsersRoutes = [
    {
        method: "get",
        route: "/users",
        controller: UsersController,
        action: "all"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UsersController,
        action: "one"
    },
    {
        method: "get",
        route: "/users/check/:email",
        controller: UsersController,
        action: "check"
    },
    {
        method: "post",
        route: "/users",
        controller: UsersController,
        action: "save"
    },
    {
        method: "put",
        route: "/users/:id",
        controller: UsersController,
        action: "update"
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UsersController,
        action: "remove"
    }

];

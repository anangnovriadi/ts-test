import { ProductController } from "./controller/ProductController";
import {UserController} from "./controller/UserController";
import {TaskController} from "./controller/TaskController";

export const Routes = [
    // User Controller
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    }, 
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    }, 
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove"
    },

    // Product Controller
    {
        method: "get",
        route: "/products",
        controller: ProductController,
        action: "list"
    }, 
    {
        method: "get",
        route: "/products/:id",
        controller: ProductController,
        action: "listById"
    }, 
    {
        method: "post",
        route: "/products",
        controller: ProductController,
        action: "create"
    }, 
    {
        method: "post",
        route: "/products/update/:id",
        controller: ProductController,
        action: "updateData"
    }, 
    {
        method: "delete",
        route: "/products/:id",
        controller: ProductController,
        action: "delete"
    },

    // TaskController
    {
        method: "post",
        route: "/tasks",
        controller: TaskController,
        action: "create"
    }
];
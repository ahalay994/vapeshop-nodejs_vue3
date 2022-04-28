import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Logger } from "../api/logger/logger";
import { AppRoutes } from "./src/routes";
import { Request, Response } from "express";

class App {
    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        // this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        AppRoutes.forEach(route => {
            (this.express as any)[route.method]('/api' + route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next)
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

                } else if (result !== null && result !== undefined) {
                    res.json(result)
                }
            });
        });

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;

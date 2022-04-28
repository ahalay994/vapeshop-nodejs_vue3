import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Logger } from "../logger/logger";
import { User as UserEntity } from "../entity/User";
import { getManager, getRepository } from "typeorm";
const bcrypt = require('bcrypt');

class User {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the users
        this.express.get("/users", async (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            res.json([]);
        });

        // request to get all the users by userName
        this.express.get("/users/:userName", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            const user = this.users.filter(function(user) {
                if (req.params.userName === user.userName) {
                    return user;
                }
            });
            res.json(user);
        });

        // request to get all the users by userName
        /*this.express.get("/users/check/:userName", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            this.con.connect();
            const q = this.con.query(`SELECT * FROM users WHERE login=${req.params.userName}`,
                (error: any, results: any, fields: any) => {
                    console.log('error', error.sqlMessage);
                    if (error) throw error;

                    console.log('results', results);
                }
            );
            this.con.end();

            res.json({status: true});
        });*/

        // request to post the user
        this.express.post("/users", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            const { name, login, password } = req.body.user;

            const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_HASH));
            const passwordToSave = bcrypt.hashSync(password, salt);

            /*this.con.connect();
            const query = this.con.query(`INSERT INTO users(name, login, password) VALUES (${name}, ${login}, ${passwordToSave})`,
                (error: any, results: any, fields: any) => {
                    console.log('error', error.sqlMessage);
                    if (error) throw error;
                }
            );*/

            /*con.query(`SELECT * from users`, function (error: any, results: any, fields: any) {
                if (error) throw error;
                console.log('The solution is: ', results);
            });*/

            // this.con.end();

            const userRepository = getRepository(UserEntity);

            this.users.push(req.body.user);
            res.json(this.users);
        });
    }
}

export default new User().express;

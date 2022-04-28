import "reflect-metadata";
import { DataSource } from "typeorm";
import {User} from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "node",
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entity/*.{js,ts}"],
    subscribers: [],
    migrations: [],
})

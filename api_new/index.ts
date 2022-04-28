import "reflect-metadata";
import 'dotenv/config'
import { createConnection } from "typeorm";
import * as http from "http";
import App from "./app";

createConnection().then(async connection => {
    const port = process.env.PORT;

    App.set("port", port);
    const server = http.createServer(App);
    server.listen(port);
    module.exports = App;

}).catch(error => console.log("TypeORM connection error: ", error));

import "reflect-metadata";
import * as http from "http";
import App from "./app";
import 'dotenv/config'
import { Logger } from "./logger/logger";
import { createConnection } from "typeorm";

const port = process.env.PORT;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new Logger();

server.on("listening", function(): void {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
 });

createConnection().then(async () => {
    module.exports = App;
}).catch(error => console.error(error));

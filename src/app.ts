import express, {Express} from 'express'
import { router } from './users/users';
import {Server} from 'http'
import { LoggerService } from './logger/logger.service';

export class App {
    app: Express;
    port: number;
    server?: Server
    logger: LoggerService

    constructor(logger: LoggerService) {
        this.app = express()
        this.port = 5000
        this.logger = logger
    }

    useRoutes() {
        this.app.use('/users', router)
    }

    public async init() {
        this.useRoutes()
        this.server = this.app.listen(this.port)
        this.logger.log(this.port)
    }

}
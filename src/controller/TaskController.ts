import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Task} from "../entity/Task";
import * as moment from "moment";

export class TaskController {
    private taskRepository = getRepository(Task);

    async create(req: Request, res: Response) {
        try {
            // validate due_date
            const now = moment().add(1, 'day');
            if (moment(req.body.due_date) < now) {
                return {
                    status: 400,
                    error: true,
                    message: 'failed',
                    info: 'due_date should be more than 1 day'
                }
            }

            let data = await this.taskRepository.save(req.body);
            let response = {
                error: false,
                message: "success",
                data: data
            };

            return response;
        } catch (err) {
            console.log(err)
        }
    }
}
import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Product} from "../entity/Product";

export class ProductController {
    private productController = getRepository(Product);

    async list(req: Request, res: Response, next: NextFunction) {
        let data = await this.productController.find();
        let response = {
            error: false,
            message: "Found",
            data: data
        };

        return response;
    }

    async listById(req: Request, res: Response, next: NextFunction) {
        let data = await this.productController.findOne(req.params.id);
        let response = {
            error: false,
            message: "Found",
            data: data
        };

        return response;
    }

    async create(req: Request, res: Response, next: NextFunction) {
        let data = await this.productController.save(req.body);
        let response = res.json({
            error: false,
            message: "Created",
            data: data
        });

        return response;
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        let data = await this.productController.findOne(req.params.id);
        let response = {
            error: false,
            message: "Deleted",
            data: data
        };

        return response;
    }

    async updateData(req: Request, res: Response, next: NextFunction) {
        await this.productController.update({
            id: req.params.id
        }, req.body);
        let response = {
            error: false,
            message: "Updated",
            data: req.body
        };

        return response;
    }
}
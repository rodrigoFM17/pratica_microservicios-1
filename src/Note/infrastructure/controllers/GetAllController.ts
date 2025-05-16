import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
    constructor (readonly getAllUseCase: GetAllUseCase){}

    async run(req: Request, res: Response) {
        
    }
}
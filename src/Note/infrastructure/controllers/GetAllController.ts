import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
    constructor (readonly getAllUseCase: GetAllUseCase){}

    async run(req: Request, res: Response) {
        try{

            const {userId} = req.body
            const notes = await this.getAllUseCase.run(userId)
            
            if(notes){
                res.status(200).json({
                    data: notes,
                    message: "notas obtenidas correctamente",
                    success: true
                })
            } else {
                res.status(500).json({
                    data: notes,
                    message: "no fue posible obtener las notas",
                    success: false
                })
            }

        } catch (e: any) {

        }
    }
}
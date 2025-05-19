import signale from "signale";
import { CreateUseCase } from "../../application/CreateNoteUseCase";
import { Request, Response } from "express";
import { Note } from "../../domain/model/Note";
import { APIResponse } from "../../../share/model/APIResponse";
import { IncomingHttpHeaders } from "http";

export class CreateController {
    constructor (readonly createUseCase: CreateUseCase){}

    async run (req: Request, res: Response){
        try{

            const {title , content, userId} = req.body

            const note = await this.createUseCase.run(title, content, userId)
            if (note){
                res.status(201).json({
                    data: note,
                    message: "nota creada con exito",
                    success: true
                })
            }else {
                res.status(500).json({
                    data: null,
                    message: "no se pudo crear la nota",
                    success: false
                })
            }
        } catch(e: any) {
            signale.error(e.message)
        }
    }
}
import signale from "signale";
import { INoteRepository } from "../domain/repository/INoteRepository";
import { IAuthService } from "../../share/services/IAuthService";

export class GetAllUseCase {

    constructor(readonly noteRepository : INoteRepository){}

    async run (userId: String){
        try {
            const notes = await this.noteRepository.getAll(userId)
            return notes
        } catch (e: any) {
            signale.error(e.message)
            return null
        }
    }
}
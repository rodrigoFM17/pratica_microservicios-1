import { NoteDTO } from "../domain/DTO/NoteDTO";
import { INoteRepository } from "../domain/repository/INoteRepository";
import signale from "signale"

export class CreateUseCase {
    constructor (readonly noteRepository: INoteRepository) {}

    async run(title: String, content: String, userId: String){
        try{
            return this.noteRepository.insert(new NoteDTO(userId, title, content))
        }catch(e: any){
            signale.error(e.message)
            return null
        }
    }
}

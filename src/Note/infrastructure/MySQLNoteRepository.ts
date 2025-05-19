import { INoteRepository } from "../domain/repository/INoteRepository";
import signale from "signale"
import {query} from "../../database/mysql"
import { NoteDTO } from "../domain/DTO/NoteDTO";
export class MySQLNoteRepository implements INoteRepository {

    async getAll(userId: String) {
        try {
            const sqlQuery = "select title, content, user_id as userId from notes where user_id = ?"
            const [result]: any = await query(sqlQuery, [userId])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }

    async insert(note: NoteDTO) {
        try{
            const sqlQuery = "insert into notes (title, content, user_id) values (?, ?, ?)"
            const [result] : any = await query(sqlQuery, [note.title, note.content, note.userId])
            return note
        } catch(e) {
            signale.error(e)
            return null
        }    
    }
}
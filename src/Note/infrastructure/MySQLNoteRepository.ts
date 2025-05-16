import { INoteRepository } from "../domain/repository/INoteRepository";
import signale from "signale"
import {query} from "../../database/mysql"
export class MySQLNoteRepository implements INoteRepository {

    async getAll(userId: String) {
        try {
            const sqlQuery = ""
            const [result]: any = await query(sqlQuery, [userId])
            return result
        } catch (e) {
            signale.error(e)
        }
    }
}
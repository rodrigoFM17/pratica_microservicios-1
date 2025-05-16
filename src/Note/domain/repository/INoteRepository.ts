import { APIResponse } from "../../../share/model/APIResponse";
import { Note } from "../model/Note";

export interface INoteRepository {
    getAll(userId: String): Promise<APIResponse<Note[]>>
}
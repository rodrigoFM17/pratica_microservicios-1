import { APIResponse } from "../../../share/model/APIResponse";
import { NoteDTO } from "../DTO/NoteDTO";
import { Note } from "../model/Note";

export interface INoteRepository {
    getAll(userId: String): Promise<APIResponse<Note[]>>
    insert(note: NoteDTO): Promise<any>
}
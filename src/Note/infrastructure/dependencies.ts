import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetAllController } from "./controllers/GetAllController";
import { MySQLNoteRepository } from "./MySQLNoteRepository";

const mySQLNoteRepository = new MySQLNoteRepository()
const getAllUseCase = new GetAllUseCase(mySQLNoteRepository)
export const getAllController = new GetAllController(getAllUseCase)
import { CreateUseCase } from "../application/CreateNoteUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { AuthService } from "./AuthService";
import { CreateController } from "./controllers/CreateController";
import { GetAllController } from "./controllers/GetAllController";
import { MySQLNoteRepository } from "./MySQLNoteRepository";

const authService = new AuthService()
const mySQLNoteRepository = new MySQLNoteRepository()


const getAllUseCase = new GetAllUseCase(mySQLNoteRepository)
export const getAllController = new GetAllController(getAllUseCase)

const createUseCase = new CreateUseCase(mySQLNoteRepository)
export const createController = new CreateController(createUseCase)
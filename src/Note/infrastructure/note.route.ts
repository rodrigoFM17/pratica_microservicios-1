import express from "express"
import { getAllController } from "./dependencies"

const noteRouter = express.Router()

noteRouter.get("/", getAllController.run.bind(getAllController))

export default noteRouter
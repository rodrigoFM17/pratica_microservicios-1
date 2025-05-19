import express from "express"
import { createController, getAllController } from "./dependencies"

const noteRouter = express.Router()

noteRouter.get("/", getAllController.run.bind(getAllController))
noteRouter.post("/", createController.run.bind(createController))

export default noteRouter
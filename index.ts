import express from "express"
import signale from "signale"
import noteRouter from "./src/Note/infrastructure/note.route"

const app = express()
app.use(express.json())

app.use('/notes', noteRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    signale.success(`servidor escuchando en el puerto ${PORT}`)
})
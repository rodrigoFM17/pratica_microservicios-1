import express from "express"
import signale from "signale"

const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, () => {
    signale.success(`servidor escuchando en el puerto ${PORT}`)
})
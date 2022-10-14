import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


// Endpoints
app.get('/', (request, response) => {
    response.send('Hello Word')
})







// Inicia o sevidor
app.listen(3333, () => {
    console.log("Server rodando")
})

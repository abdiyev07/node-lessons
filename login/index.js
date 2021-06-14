import express from 'express'
import { loginController, registerController } from './controllers/auth.controller.js'

const app = express()
const PORT = 5000

app.use(express.json({ extended: true }))

app.post('/register', loginController)

app.post('/login', registerController)

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})

import express from 'express'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'

const app = express()
const PORT = 5000

app.use(express.json({ extended: true }))

app.use('/auth', authRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})

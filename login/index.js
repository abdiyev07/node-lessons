import express from 'express'

const app = express()
const PORT = 5000

const users = []

app.use(express.json({ extended: true }))

app.post('/register', (req, res) => {
  const { phone = null, password = null } = req.body

  if (!phone || !password) {
    return res.status(400).json({ message: 'Отсутствует номер или пароль' })
  }

  const idx = users.findIndex((el) => el.phone === phone)

  if (idx !== -1) {
    return res.status(400).json({ message: 'Такой пользователь уже существует' })
  }

  users.push({
    phone,
    password,
  })

  console.log(users)

  res.status(201).json({ message: 'Пользователь был успешно создан' })
})

app.post('/login', (req, res) => {
  const { phone = null, password = null } = req.body

  if (!phone || !password) {
    return res.status(400).json({ message: 'Отсутствует номер или пароль' })
  }
  // Домашнее задание - доработать систему логина
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})

import jwt from 'jsonwebtoken'

export const users = []

export const loginController = (req, res) => {
  const { phone = null, password = null } = req.body

  if (!phone || !password) {
    return res.status(400).json({ message: 'Отсутствует номер или пароль' })
  }

  const idx = users.findIndex((el) => el.phone === phone)
  if (idx === -1) {
    return res.status(400).json({ message: 'Такого пользователя нету' })
  }

  if (password !== users[idx].password) {
    return res.status(400).json({ message: 'Пароль неверный' })
  }

  const token = jwt.sign({ phone, roles: users[idx].roles }, 'node.js', {
    expiresIn: '8h',
  })

  return res.json({ token, usersDetails: users.details })
}

export const registerController = (req, res) => {
  const { phone = null, password = null, roles = ['USER'] } = req.body

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
    roles,
  })

  res.status(201).json({ message: 'Пользователь был успешно создан' })
}

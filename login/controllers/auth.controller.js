const users = []

export const loginController = (req, res) => {
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

  res.status(201).json({ message: 'Пользователь был успешно создан' })
}

export const registerController = (req, res) => {
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

  // Добавить логику записи в файл залогиненных пользователей
  // Нужно записать в файл loggedUsers.txt телефон номер пользователя, который зашел в систему

  return res.json({ message: 'Добро пожаловать!!!' })
}

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

  // 1. Создается токен - safasgfg43rtrewt4354t4stg12к43к43 -
  // 2. Вшиваем токен в куки - поставив флаг - javascript не должен видеть!!!
  // 3. Мы ему отправляем id: 123.

  return res.json({ message: 'Добро пожаловать!!!' })
}

export const registerController = (req, res) => {
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

import { users } from './auth.controller.js'

export const usersListController = (req, res) => {
  return res.json({ users })
}

export const userDeleteController = (req, res) => {
  const { phone } = req.user
  const user = users.find((el) => el.phone === phone)
  user.isDeleted = true
  user.deleteTime = Math.round((Date.now() + 6 * 2629800000) / 1000)
  return res.json({ message: 'Аккаунт был успешно удален. Для востанавления у вас есть 6 месяцев' })
}

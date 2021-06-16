import { users } from './auth.controller.js'

export const usersListController = (req, res) => {
  console.log(req.headers.authorization.split(' ')[1])
  return res.json({ users })
}

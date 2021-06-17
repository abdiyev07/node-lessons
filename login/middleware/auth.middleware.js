import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer

    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' })
    }

    const decoded = jwt.verify(token, 'node.js')
    req.user = decoded
    next()
  } catch (e) {
    console.log(e)
    res.status(401).json({ message: 'Нет авторизации' })
  }
}

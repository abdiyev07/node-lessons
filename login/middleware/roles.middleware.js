const rolesMiddleware = (allowedRoles) => {
  return function (req, res, next) {
    try {
      const { roles: userRoles } = req.user
      let hasRole = false
      userRoles.forEach((role) => {
        if (allowedRoles.includes(role)) {
          hasRole = true
        }
      })
      if (!hasRole) {
        return res.status(403).json({ message: 'У вас нету прав для совершения данной операции' })
      }
      next()
    } catch (e) {
      console.log(e)
      return res.status(401).json({ message: 'Ошибка при получении доступа' })
    }
  }
}

export default rolesMiddleware

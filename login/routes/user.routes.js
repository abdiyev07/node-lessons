import { Router } from 'express'
import { usersListController } from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import rolesMiddleware from '../middleware/roles.middleware.js'

const router = Router()

router.get('/', authMiddleware, rolesMiddleware(['ADMIN']), usersListController)

export default router

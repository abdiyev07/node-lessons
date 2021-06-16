import { Router } from 'express'
import { usersListController } from '../controllers/user.controller.js'

const router = Router()

router.get('/', usersListController)

export default router

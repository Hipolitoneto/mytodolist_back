import UsersController from '#controllers/users_controller'
import SessionController from '#controllers/session_controller'
import TaskController from '#controllers/tasks_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


router.post('session',[SessionController,'store'])

router.resource('user', UsersController).apiOnly()
router.group(() => {
  router.resource('task', TaskController)
}).use(middleware.auth())
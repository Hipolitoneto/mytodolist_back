import type { HttpContext } from '@adonisjs/core/http'

import { createSessionValidator } from "#validators/session";
import User from '#models/user';


export default class SessionController {
    async store({ request }: HttpContext) {
        const { email, password } = await request.validateUsing(createSessionValidator);
        const user = await User.verifyCredentials(email, password);
      
        const token = await User.accessTokens.create(user);
      
        return {
          user,
          token,
        };
      }
      
    async destroy({auth, response}: HttpContext){
        const user = auth.user!
        await User.accessTokens.delete(user, user.currentAccessToken.identifier)
        return response.status(203)
    }
}
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    await User.create(
      {
      name: 'Hipolito Ramos Franklin Neto',
      email: 'hipolito@gmail.com',
      password: '123456'

    })
  }
}
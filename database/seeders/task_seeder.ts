import Task from '#models/task'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Task.create({
      title:"lavar os sapatos",
      description: 'lavar bem a sola',
      userId: 1
    })
  }
}
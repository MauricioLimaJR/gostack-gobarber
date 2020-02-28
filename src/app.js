import express from 'express'
import routes from './routes'

/**
 * Creates a server instace from express
 * Middlewares and routes are attached by class methods
 */
class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server

import { Router } from 'express'
import User from './app/models/User'

const routes = new Router()

// Default route, used to ping and test the server
routes.get('/', (req, res) => {
  return res.status(200).send({ msg: 'GoBarber App' })
})

// Database test route
routes.get('/db', async (req, res) => {
  const user = await User.create({
    name: 'Maurício Lima',
    email: req.query.email,
    password_hash: 'minhasenhafacil',
  })

  return res.json(user)
})

export default routes

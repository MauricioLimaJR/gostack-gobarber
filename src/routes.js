import { Router } from 'express'

const routes = new Router()

// Default route, used to ping and test the server
routes.get('/', (req, res) => {
  return res.status(200).send({ msg: 'GoBarber App' })
})

export default routes

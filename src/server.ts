import Express, { Request, Response } from 'express'
import { routes } from './routes'

const app = Express()
app.use(Express.json())

const PORT = 8080

app.use(routes)

app.use((error: any, req: Request, res: Response, _: any) => {
  res.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`I'm running at http://localhost:${PORT}`))

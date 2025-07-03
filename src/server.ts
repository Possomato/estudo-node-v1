import Express, { Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './utils/AppError'

const app = Express()
app.use(Express.json())

const PORT = 8080

app.use(routes)

app.use((error: any, req: Request, res: Response, _: any) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message })
  }

  res.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`I'm running at http://localhost:${PORT}`))

import express from 'express'
import ViteExpress from 'vite-express'

const app = express()
const port = 3000

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening at http://localhost:${port}`),
)

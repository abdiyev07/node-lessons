import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' })
})

const PORT = 5000

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`)
    })
  } catch (e) {
    console.log(`Server error: ${e.message}`)
    process.exit(1)
  }
}

start()

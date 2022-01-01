const express = require('express')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())

app.use(express.static("front/build"))

app.get('/api/youtube', (_, res) => {
   res.send({
      msg: "Diego Rodriguez"
   })
})

app.get('/*', (_, res) => {
   res.sendFile(path.join(__dirname, './front/build/index.html'))
})

app.listen(PORT, () => {
   console.log(`Server running on port : ${PORT}`)
})
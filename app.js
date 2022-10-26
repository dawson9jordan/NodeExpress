const express = require('express')
const app = express()
const port = 5070

app.get('/', (req, res) => {
  res.send('Hello World!\
  Good to meet you, I am Dawson!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
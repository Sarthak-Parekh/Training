const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/s', express.static('sarthak'))
app.use( express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
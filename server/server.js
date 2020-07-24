'use strict'
const express = require('express')

const { PORT = '8080' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('Hello Jack')
})

app.listen(PORT)
// const express = require('express') //因为package.json中标注了type: module，所以不需要require
import express from 'express'
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('Hello API!')
})

app.get('/api/get', (req, res) => {
  res.send('Hello API!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
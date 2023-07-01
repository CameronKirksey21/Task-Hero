const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(express.static(path.join(__dirname, '../src')));

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on Port:${PORT}!`)
})

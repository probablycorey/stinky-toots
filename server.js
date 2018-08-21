require('noodle-it')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001
//why
app.get('/', (req, res) => {
  console.log("This is logged from the server!")
  res.send('hey corey!')
})

app.listen(port, () => console.log(`Listening on port ${port}`))

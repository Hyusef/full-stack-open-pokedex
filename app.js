const express = require('express')
const process = require('process')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.send('000')
  })

app.listen(PORT, () => {

})

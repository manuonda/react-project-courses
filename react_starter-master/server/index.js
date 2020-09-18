const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.get('/users', function(req,res) {
    axios.get('https://randomuser.me/api/?page=1&results=10').then(response => {
       res.send(response.data)
    })
})


app.listen(3000, () => {
  console.log(`server port 3000`)
});
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000
const host = '127.0.0.1';



app.use(cors())

app.use(express.json())
app.use('/auth' , require('./routes/auth'));
app.use('/notes' , require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,host, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
connectToMongo();

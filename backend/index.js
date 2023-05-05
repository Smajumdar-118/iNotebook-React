const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000



app.use(cors())

app.use(express.json())
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
connectToMongo();
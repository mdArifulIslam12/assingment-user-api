const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/route.user')

app.use(cors());
app.use(express.json());


app.use('/user',userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

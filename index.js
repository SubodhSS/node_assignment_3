const express = require('express');
const { accountTypeChecker } = require('./handlers/taskHandlers')

const app = express();


app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcome to Blenheim Chalcot...!!!');
});

app.post('/task', accountTypeChecker);  

 
app.listen(3000, () => {
    console.log('Server running at port 3000');
});
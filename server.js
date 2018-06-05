const express = require('express');
var path = require('path');

const port = 3000;
const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+ '/index.html'))
})
app.get('/shark', function (req, res) {
  res.sendFile(path.join(__dirname+ '/shark-movies.html'))
})
app.listen(port, () => (console.log(`Server running on port ${port}`)))

'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function (req, res) {
  res.json({greetings: 'Hello, API'});
});

app.post('/api/fileanalyse', upload.single('upfile'), function (
  req,
  res,
  next
) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // console.log(req.file);
  // console.log(req.body);
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

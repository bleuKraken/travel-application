// Require Express to run server and routes
const express = require('express');
const request = require('request');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
app.use(express.static('/dist'));

// Setup Server WAS 8081
const port = 4444;
module.exports = app.listen(port, listening);

function listening() {
  console.log("I'm Alive!");
  console.log(`running on localhost: ${port}`);
};

app.post('/weather', (req, res) => {
  console.log(req.body)
  request({ url: req.body.url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error', message: error.message
        });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.post('/image', (req, res) => {
  console.log(req.body)
  request({ url: req.body.url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error',
          message: error.message
        });
      }
      res.json(JSON.parse(body));
    }
  )
});

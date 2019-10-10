const express = require('express');
const bodyParser = require('body-parser');

let router = require('./network/routes');

let app = express();
app.use(bodyParser.json());

// Add routes to app
router(app);

const port = process.env.PORT_DEV || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port} bitch`);
});

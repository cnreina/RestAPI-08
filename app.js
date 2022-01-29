const express           = require('express');
const bodyParser        = require('body-parser');

const APP_CWD           = process.cwd();
const restAPIRoutes     = require(APP_CWD + '/routes/restAPIRoutes');
const homeController    = require(APP_CWD + '/controllers/homeController');

const app = express();

app.use(express.static(APP_CWD + '/public'));
app.use(bodyParser.json());

app.use(homeController.setHeaders);
app.use(restAPIRoutes);

app.listen(8080);

const express = require("express"),
    app = express(),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');
    cors = require('cors');
    dotenv = require('dotenv');
    cors = require('cors');
    //formidableMiddleware = require('express-formidable');

dotenv.config();

const port =  3002;
require('body-parser-xml')(bodyParser);

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));


// Headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, api-token");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
    

app.use(morgan('dev'));

app.use(bodyParser.urlencoded(
    {
      limit: '50mb',
      extended: true
    }
  ));
  app.use(bodyParser.json(
    {
      limit: '50mb'
    }
  ));

app.use(bodyParser.xml({
    xmlParseOptions: {
        normalize: false,     // Trim whitespace inside text nodes
        normalizeTags: false, // Transform tags to lowercase
        explicitArray: false // Only put nodes in array if >1
    }
}))

app.use(express.static("public"));
// Inicializacion de API
var router = require('./api');
app.use('/api', router);

app.listen(port, '10.0.0.11');
console.log("Escuchando: " , '10.0.0.11');

/*app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto ${port}`);
});*/
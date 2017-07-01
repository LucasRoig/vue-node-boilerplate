import express from 'express';
import bodyParser from 'body-parser';
import history from 'connect-history-api-fallback';
import morgan from 'morgan';
import config from './config/config';

import ApiRouter from './routes/apiRouter'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(history());
app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api',ApiRouter);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || config.port;
let server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
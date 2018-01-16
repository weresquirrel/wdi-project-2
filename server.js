const express              = require('express');
const morgan               = require('morgan');
const expressLayouts       = require('express-ejs-layouts');
const methodOverride = require('method-override');
const routes               = require('./config/routes');
const mongoose             = require('mongoose');
mongoose.Promise           = require('bluebird');
const bodyParser           = require('body-parser');
const session              = require('express-session');
const flash                = require('express-flash');
const authentication       = require('./lib/authentication');
const { port, env, dbURI } = require('./config/environment');
console.log(`dbURI: ${dbURI}`);

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

app.use(authentication);

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

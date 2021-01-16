var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');


var app = express();
//Mail Sender
const sendMail = require('./public/javascripts/mail.js')

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var aboutUsRouter = require('./routes/aboutUs');
app.use('/aboutUs', aboutUsRouter);

var shopRouter = require('./routes/shop');
app.use('/shop', shopRouter);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//send Email function
app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  console.log('data: ', req.body);
  sendMail(userName, email, item, msg, function (err, data) {
    if(err) {
      res.status(500).json({ message: 'Internal Error'});
    }else {
      res.json({ message: 'Email Sent! You will hear back from us shortly!'});
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');  
});

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('req-flash');

const User = require('./model/user');



const indexRouter = require('./routes/index');

const aboutRouter = require('./routes/about');
const answerRouter = require('./routes/answer');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const meetingRouter = require('./routes/meetingSetUp');
const profileRouter = require('./routes/profile');
const profileUpdateRouter = require('./routes/profile_update');
const signupRouter = require('./routes/signup');
const adminRouter = require('./routes/admin');
const tokenRouter = require('./routes/token');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/about', aboutRouter);
app.use('/answer', answerRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/meeting', meetingRouter);
app.use('/profile', profileRouter);
app.use('/profile_update', profileUpdateRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);
app.use('/token', tokenRouter);




//middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: 'bddffzfe85241fdfezfez',
  resave: false,
  saveUninitialized: false
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//passport local mongoose
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});passport.deserializeUser(function(id, done) {
    User.findOne({
        _id: id
    }, '-password -salt', function(err, user) {
        done(err, user);
    });
});

//init flash
app.use(flash());
app.use((req, res, next) =>{
  if(req.user){
    res.locals.user = req.user;
  }
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  res.locals.errorForm = req.flash('errorForm');
  next();
})




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

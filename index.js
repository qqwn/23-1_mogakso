const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const ExpressErorr = require('./utils/ExpressError');
const User = require('./models/user');

const userRoutes = require('./routes/user');
const googleLoginRoutes = require('./routes/auth');

mongoose.connect('mongodb://127.0.0.1:27017/ahrkrth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000*60*60*24*7
    }
}

app.use(session(sessionConfig));
app.use(flash());
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    console.log(req.session)
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', userRoutes);
app.use('/', googleLoginRoutes);

app.get('/', (req, res) => {
    res.send('홈페이지 입니다.');
});

app.all('*', (req, res, next) => {
    next(new ExpressErorr('페이지를 찾을 수 없습니다.', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = '에러가 발생했습니다.';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
    console.log('listening...');
})

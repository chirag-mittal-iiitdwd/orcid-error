const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
var OrcidStrategy = require('passport-orcid').Strategy;

const app = express();
mongoose.connect('mongodb+srv://chirag:mongodb@cluster0.lcaon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
    console.log('Connected to MongoDb Database');
});

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(session({
    secret: 'secretCode',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user, done) => {
    return done(null, user);
})

passport.use(new OrcidStrategy({
        sandbox: true, // use the sandbox for non-production environments
        clientID: 'APP-X8ECLOVRR82U8ZLN',
        clientSecret: '546acddf-3515-4940-8d76-4a7f78b35d9f',
        callbackURL: "/auth/orcid/callback"
    },
    function (accessToken, refreshToken, params, profile, done) {
        // NOTE: `profile` is empty, use `params` instead
        console.log(params);
        profile = {
            orcid: params.orcid,
            name: params.name
        };

        // console.log(params);
        done(null, profile);
    }
));

// First this is run and authenticate
app.get('/auth/orcid',
    passport.authenticate('orcid')
);

// depending on succes or error give a callback
app.get('/auth/orcid/callback',
    passport.authenticate('orcid', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000');
    });

app.get('/', (req, res) => {
    res.send("Hello Worldn");
})

app.get('/getUser', (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(5000, () => {
    console.log("Server Started http://localhost:5000/");
})
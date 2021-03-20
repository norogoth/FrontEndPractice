// Hacky way
require('dotenv').config() 

const passport = require('passport');
const session = require('express-session')
const express = require('express') //getting express package

const app = express() // Factory function which returns a valid server

// Might want to do look at dotenv
const port = 5000 //client is on 3000 so server will be 5000

// localhost:5000/

app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true})
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

//PASSORT

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      // process.en
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `http://localhost:${port}/auth/spotify/callback`
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      return done(null, { 
        accessToken,
        refreshToken,
        expires_in,
        profile,
    //   })
//IF you want to add features on our end, this creates a user on OUR end.
      // User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
      //   return done(err, user);
      // });
    }
  )
);

app.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  }),
  function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  }
);

//END OF PASSPORT

app.get('/', (req, res) => {
  res.send(`<pre>${JSON.stringify(req.user, null, 2)}</pre>`)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


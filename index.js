const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const {json} = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const port = 3000
const config = require('./config')
const products_controller = require('./products_controller')
const path = require('path');

const app = module.exports = express()

app.use(json() )
app.use(cors() )

massive(config.massiveConnectionString).then( dbInstance =>

  app.set("db", dbInstance)
)

const db = app.get('db')

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: config.secret
}));
app.use(passport.initialize());
app.use(passport.session());



passport.use(new Auth0Strategy({
   domain:       config.domain,
   clientID:     config.clientID,
   clientSecret: config.clientSecret,
   callbackURL:  '/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    //Find user in database
    db.getUserByAuthId([profile.id]).then(function(err, user) {
      user = user[0];
      if (!user) { //if there isn't one, we'll create one!
        console.log('CREATING USER');
        db.createUserByAuth([profile.displayName, profile.id]).then(function(err, user) {
          console.log('USER CREATED', user);
          return done(err, user[0]); // GOES TO SERIALIZE USER
        })
      } else { //when we find the user, return it
        console.log('FOUND USER', user);
        return done(err, user);
      }
    });
  }
));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(userA, done) {
  console.log('serializing', userA);
  var userB = userA;
  //Things you might do here :
   //Serialize just the id, get other information to add to session,
  done(null, userB); //PUTS 'USER' ON THE SESSION
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(userB, done) {
  var userC = userB;
  //Things you might do here :
    // Query the database with the user id, get other information to put on req.user
  done(null, userC); //PUTS 'USER' ON REQ.USER
});



app.get('/auth', passport.authenticate('auth0'));


//**************************//
//To force specific provider://
//**************************//
// app.get('/login/google',
//   passport.authenticate('auth0', {connection: 'google-oauth2'}), function (req, res) {
//   res.redirect("/");
// });

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  //THIS IS WHATEVER VALUE WE GOT FROM userC variable above.
  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})


app.post('/api/product', products_controller.create)
app.get('/api/products', products_controller.getAll)
app.get('/api/product/:id', products_controller.getOne)
app.put('/api/product/:id', products_controller.update)
app.delete('/api/product/:id', products_controller.delete)

app.listen(port, ()=> {
  console.log(`Hey dude, I'm listening on port ${port}`)
})

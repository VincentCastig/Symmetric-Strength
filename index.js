const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const port = 3000
const config = require('./config')
const current_exercises_controller = require('./current_exercises_controller')
const goal_exercises_controller = require('./goal_exercises_controller')
const user_controller = require('./user_controller')
const path = require('path');
const jwt = require('jsonwebtoken')


const app = module.exports = express()


app.use(bodyParser.json());
app.use(cors() )
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: config.secret
}));
app.use(passport.initialize());
app.use(passport.session());

massive(config.massiveConnectionString).then( db => {app.set("db", db)});


const db = app.get('db');

app.use(express.static(path.join(__dirname, 'public')));
// db.create_user(function(err, user) {
//   if (err) console.log(err);
//   else console.log('CREATED USER');
//   console.log(user);
// })


passport.use(new Auth0Strategy({
   domain:       config.domain,
   clientID:     config.clientID,
   clientSecret: config.clientSecret,
   callbackURL:  '/auth/callback'
 },
  function(accessToken, refreshToken, extraParams, profile, done) {
    //Find user in database
    const db = app.get('db')
    console.log("profile", profile)
    db.getUserByAuthId([profile.id]).then( function(err, user) {
      console.log("user", user)
      if (!user) { //if there isn't one, we'll create one!
        console.log('CREATING USER');
        db.createUserByAuth([profile.displayName, profile.id]).then( function(err, user) {
          console.log('USER CREATED', user);
          return done(null, profile); // GOES TO SERIALIZE USER
        })
      } else { //when we find the user, return it
        console.log('FOUND USER', user[0]);
        return done(null, profile);
      }
    }).catch(err => console.log(err));
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

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/#!/basic'}), function(req, res) {
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

//app.use means we are using some middleware



app.post('/api/exercise', current_exercises_controller.create)
app.get('/api/exercises', current_exercises_controller.getAll)
app.get('/api/exercise/:id', current_exercises_controller.getOne)
app.get('/api/lastexercise', current_exercises_controller.getLast)
app.put('/api/exercise/:id', current_exercises_controller.update)
app.delete('/api/exercise/:id', current_exercises_controller.delete)

//post exercise goal on registration
app.post('/api/goal', goal_exercises_controller.create)
app.get('/api/goals', goal_exercises_controller.getAll)
app.get('/api/goal/:id', goal_exercises_controller.getOne)
app.put('/api/goal/:id', goal_exercises_controller.update)
app.delete('/api/goal/:id', goal_exercises_controller.delete)

//register user
app.post('/api/user', user_controller.create)
app.get('/api/users', user_controller.getAll)
//login user and find user by username
app.get('/api/user/:username/:password', user_controller.getUser)


app.listen(port, ()=> {
  console.log(`Hey dude, I'm listening on port ${port}`)
})

const dotenv = require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const port = 3000
const current_exercises_controller = require('./current_exercises_controller')
const goal_exercises_controller = require('./goal_exercises_controller')
const user_controller = require('./user_controller')
const path = require('path');


const app = module.exports = express()


app.use(bodyParser.json());
app.use(cors() )
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: process.env.secret
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//massive(config.massiveConnectionString).then( db => {app.set("db", db)});

const massiveConnectionString = process.env.DATABASE_URL

massive(massiveConnectionString).then( db => {app.set("db", db)});
// db.create_user(function(err, user) {
//   if (err) console.log(err);
//   else console.log('CREATED USER');
//   console.log(user);
// })
passport.use(new Auth0Strategy({
   domain:       process.env.domain,
   clientID:     process.env.clientID,
   clientSecret: process.env.clientSecret,
   callbackURL:  '/auth/callback'
 },
  function(accessToken, refreshToken, extraParams, profile, done) {
    //Find user in database
    const db = app.get('db')
    const user_id = profile.identities[0].user_id.toString()

    db.getUserByAuthId([user_id]).then((user) => {
      console.log("user", user.length)
      console.log("the user", user)
      if (user.length < 1) { //if there isn't one, we'll create one!
        console.log('CREATING USER', profile);
        
        db.createUserByAuth([ profile.nickname, user_id]).then((user) => {
          console.log('USER CREATED user[0]', user[0]);
          console.log('USER CREATED user', user_id);
          return done(null, user[0]); // GOES TO SERIALIZE USER
        })
      }
      else { //when we find the user, return it
        console.log('FOUND USER', user[0]);
        console.log('FOUND USER', user);
        return done(null, user);
      }
    }).catch(err => console.log(err));
  }
));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser((userA, done) => {
  console.log('serializing', userA);
  let userB = userA;
  //Things you might do here :
   //Serialize just the id, get other information to add to session,
  done(null, userB); //PUTS 'USER' ON THE SESSION
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser((userB, done) => {
  let userC = userB;
  //Things you might do here :
    // Query the database with the user id, get other information to put on req.user
  done(null, userC); //PUTS 'USER' ON REQ.USER
});



app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/#!/basic'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', (req, res) => {
  console.log(req.user)
  if (!req.user) return res.sendStatus(404);
  //THIS IS WHATEVER VALUE WE GOT FROM userC variable above.
  res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
  console.log('logging out?:' )
  req.logout();
  res.redirect('https://vintruv-fitness.herokuapp.com');
  //
  // http://vincentcastig.auth0.com/v2/logout
  // https://YOUR_AUTH0_DOMAIN/v2/logout
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

app.listen(process.env.PORT, () => {
  console.log(`Hey dude, I'm listening`)
})

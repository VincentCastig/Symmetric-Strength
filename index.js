const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const {json} = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const port = 3000
const config = require('./config')
const current_exercises_controller = require('./current_exercises_controller')
const goal_exercises_controller = require('./goal_exercises_controller')
const user_controller = require('./user_controller')
const path = require('path');

const app = module.exports = express()

//app.use means we are using some middleware
app.use(json() )
app.use(cors() )

massive(config.massiveConnectionString).then( dbInstance => {
  app.set("db", dbInstance)
});

const db = app.get('db')

app.use(express.static(path.join(__dirname, 'public')));


/*app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})*/


app.post('/api/exercise', current_exercises_controller.create)
app.get('/api/exercises', current_exercises_controller.getAll)
app.get('/api/exercise/:id', current_exercises_controller.getOne)
app.put('/api/exercise/:id', current_exercises_controller.update)
app.delete('/api/exercise/:id', current_exercises_controller.delete)


app.post('/api/goal', goal_exercises_controller.create)
app.get('/api/goals', goal_exercises_controller.getAll)
app.get('/api/goal/:id', goal_exercises_controller.getOne)
app.put('/api/goal/:id', goal_exercises_controller.update)
app.delete('/api/goal/:id', goal_exercises_controller.delete)


app.post('/api/user', user_controller.create)
app.get('/api/users', user_controller.getAll)
app.get('/api/user/:id', user_controller.getOne)


app.listen(port, ()=> {
  console.log(`Hey dude, I'm listening on port ${port}`)
})
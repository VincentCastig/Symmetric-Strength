module.exports = {

  create: ( req, res, next ) => {

    const dbInstance = req.app.get('db');
    const { username, password } = req.body

console.log("user_controller")
console.log(password)

    dbInstance.create_user([ username, password ])

      .then( () => {
        res.status(200).send(req.body);
    })
      .catch( () => res.status(500).send(req.body) );
  },

  getUser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { username, password } = req.body

    dbInstance.getUserById([ username, password ])
      .then( (username) => {
        res.status(200).send( username )
    })
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_users()
      .then( usernames => res.status(200).send( usernames ) )
      .catch( () => res.status(500).send() );
  }
};

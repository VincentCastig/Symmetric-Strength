module.exports = {

  create: ( req, res, next ) => {

    const dbInstance = req.app.get('db');
    const { username, password } = req.body

// console.log(username)
// console.log(password)

    dbInstance.create_user([ username, password ])

      .then( (response) => {
        res.status(200).send(response);
    })
      .catch( () => res.status(500).send() );
  },

  getUser: ( req, res, next ) => {
    console.log('user_controller.js getuser')
    const dbInstance = req.app.get('db');
    const { params } = req
    console.log(params)
    dbInstance.getUserById([ params.username, params.password ])
      .then( (username) => {
        res.status(200).send( username );
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

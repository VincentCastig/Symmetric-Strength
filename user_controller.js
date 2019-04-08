module.exports = {

  create: ( req, res, next ) => {

    const dbInstance = req.app.get('db');
    const { username, password } = req.body

    dbInstance.create_user([ username, password ])

      .then( (response) => {
        res.status(200).send(response);
    })
      .catch( () => res.status(500).send() );
  },

  getUser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    
    dbInstance.getUserByAuthId(req.user[0].authid)
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

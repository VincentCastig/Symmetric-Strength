module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("Vincent is accessing the create method in products_controller.js")

    const { name, description, price, imageurl } = req.body;


    dbInstance.create_exercises([ new date() ])

      .then( () => res.status(200).send(req.body) )
      .catch( () => res.status(500).send(req.body) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_exercise([ params.id ])
      .then( product => res.status(200).send( product ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_exercises()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.update_exercises([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_exercise([ params.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};

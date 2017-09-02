module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("Vincent is accessing the create method in products_controller.js")

    const { username } = req.body;


    dbInstance.create_goal_exercises([ new date(), username ])

      .then( () => res.status(200).send(req.body) )
      .catch( () => res.status(500).send(req.body) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_product([ params.id ])
      .then( product => res.status(200).send( product ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.update_goal_exercises([ params.id, frontsquat, backsquat, pendlayrow, deadLift, ShoulderPress, inclineBench, benchPress, bicepcurl, tricepCurl, reps  ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_product([ params.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};

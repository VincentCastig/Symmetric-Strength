module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("Vincent is accessing the create method in current_controller.js")

    const { frontSquat, backSquat, pendlayRow, deadLift, shoulderPress, inclineBench, benchPress, bicepCurl, tricepCurl, reps, userid } = req.body;


    dbInstance.create_exercises([ frontSquat, backSquat, pendlayRow, deadLift, shoulderPress, inclineBench, benchPress, bicepCurl, tricepCurl, reps, userid ])

      .then( (response) => res.status(200).send(response) )
      .catch( () => res.status(500).send(req.body) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_exercise([ userid  ])
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send() );
  },
  getLast: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    console.log(params.username)
    dbInstance.read_exercise([ params.username  ])
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_exercises()
      .then( response => res.status(200).send( response ) )
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

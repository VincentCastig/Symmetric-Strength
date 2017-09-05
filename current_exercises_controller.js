module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("Vincent is accessing the create method in current_controller.js")

    const { frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, reps } = req.body;
    console.log(reps)

    dbInstance.create_exercises([ frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, reps, req.user ])

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

    dbInstance.read_exercise([ 'vincent'  ])
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send(req.body) );
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

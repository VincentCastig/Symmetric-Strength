module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("Vincent is accessing the create method in current_controller.js")

    const { frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps } = req.body;
    console.log(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps )
    console.log("USER BEFORE CREATE EXERCISE",req.user);
    dbInstance.create_exercises([ frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, req.user[0].authid, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps ])

      .then( (response) => res.status(200).send(response) )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    console.log('getting one ', params);

    dbInstance.read_exercise([ userid  ])
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send() );
  },
  getLast: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("getting lastData")
    console.log(req.user[0].authid)
    dbInstance.read_exercise(req.user[0].authid)
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send(req.body) );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log("getting lastfive")
    console.log(req.user[0]);
    dbInstance.read_exercises(req.user[0].authid)
      .then( response => res.status(200).send( response ) )
      .catch( () => res.status(500).send(req.body) );
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

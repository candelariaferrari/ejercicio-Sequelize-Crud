const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.render('actors/actorsList.ejs', {actors})
            })
    },
    'detail': (req, res) => {
      db.Actor.findByPk(req.params.id)//aca decimos que es el numero segun url
          .then(actor => {
              res.render('actors/actorsDetail.ejs', { actor: actor });
          });
  },

}


module.exports = actorsController;
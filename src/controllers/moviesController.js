const db = require('../database/models');//tengo que traer la base de datos
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
  list: (req, res) => {
    //accedemos a los modelos
    //db.alias
    db.Movie.findAll({ //aclarar que queremos que traiga las relaciones
      include: [{ association: "genero" }]
    }).then(function (movies) { //funcion para traer las pelis 
      console.log(JSON.stringify(movies))
      res.render("movies/moviesList", { movies: movies })
    });
  },
  detail: (req, res) => {
    //accedemos al modelo
    db.Movie.findByPk(req.params.id)//aca decimos que es el numero segun url
      .then(movie => {
        res.render('movies/moviesDetail.ejs', { movie: movie });
      });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [
        ['release_date', 'DESC']
      ],
      limit: 5
    })
      .then(movies => {
        res.render('movies/newestMovies', { movies });
      });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 } //operadores , gte significa mayor o igual
      },
      order: [
        ['rating', 'DESC']
      ]
    })
      .then(movies => {
        res.render('movies/recommendedMovies.ejs', { movies });
      });
  },
  //crud - create
  add: function (req, res) {
    res.render('movies/moviesAdd.ejs');
  },
  create: function (req, res) {
    db.Movie.create({//creamos las columnas de la tabla
      title: req.body.title, //recuperar los datos de form, respetando los name del form 
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id
    })
    res.redirect('/movies');
  },
  //crud-update()
  edit: function (req, res) {
    db.Movie.findByPk(req.params.id)//recuperamos el id de la url
      .then(movie => {
        res.render('movies/moviesEdit.ejs', {Movie: movie})
      })
  },
  update: function (req, res) {
    db.Movie.update({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id
    }, { //el where es fundamental xq sino me va a reemplazar toda la info de la base de datos
      where: {
        id: req.params.id //accedemos a la url por pararms
      }
    })
    res.redirect('/movies');
  },
  delete: function (req, res) {
    db.Movie.findByPk(req.params.id)
      .then(Movie => {
        res.render('movies/moviesDelete.ejs', { Movie })
      }) 
  },
  destroy: function (req, res) {
   db.Movie.destroy({ //que fila queremos borrar
      where: {
        id: req.params.id
      }
    })
    res.redirect('/movies');
  }


}

module.exports = moviesController;
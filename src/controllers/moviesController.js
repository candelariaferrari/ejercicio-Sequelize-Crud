const db = require('../database/models');//tengo que traer la base de datos
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        //accedemos a los modelos
        //db.alias
        db.Movie.findAll()
            .then(function (movies) { //funcion para traer las pelis 
                res.render("moviesList", { movies: movies })
            });
    },
    'detail': (req, res) => {
        //accedemos al modelo
        db.Movie.findByPk(req.params.id)//aca decimos que es el numero segun url
            .then(movie => {
                res.render('moviesDetail.ejs', { movie: movie });
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 } //operadores , gte significa mayor o igual
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    },
    'drama': (req, res) => {
        db.Movie.findAll({
            where: {
                genre_id: 3
            },
        })
            .then(peliculas => {
                res.render('moviesDrama', { peliculas: peliculas })
            });
    },
    
}

module.exports = moviesController;
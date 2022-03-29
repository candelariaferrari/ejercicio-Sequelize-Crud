module.exports = (sequelize, dataTypes) => {
  let alias = 'Movie';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: dataTypes.DATE
    },
    updated_at: {
      type: dataTypes.DATE
    },
    title: {
      type: dataTypes.STRING
    },
    rating: {
      type: dataTypes.INTEGER
    },
    awards: {
      type: dataTypes.INTEGER
    },
    release_date: {
      type: dataTypes.DATE
    },
    length: {
      type: dataTypes.INTEGER
    },
    genre_id: {
      type: dataTypes.INTEGER
    }
  };
  let config = {
    tableName: 'movies',
    timestamps: false
  };
  const Movie = sequelize.define(alias, cols, config)

  return Movie
}


'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Movie',
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING(200),
      },
      descripcion: {
        type: dataTypes.TEXT,
      },
      precio: {
        type: dataTypes.DECIMAL,
      }
    },
    {
      tableName: 'productos',
      timestamps: false
    });
  return product;
};

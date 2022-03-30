# ejercicio-Sequelize-Crud
modulo base de datos

1)xampp 
2)start en el apache y en el msql
3)localhost:80
4)phpMyAdmin
5)nueva (para nueva base de datos)
6)ponenmos nombre y 


-------------------------------
BASE DE DATOS 
Para conectarnos a una base de datos:
caracteristicas a tener en cuenta :
1 - nombre de la base de datos
2 - en que servidor está (direccion ip)
3 - que tipo de base de datos tenemos
4 - usuario 
5 - contraseña
6 - puerto: cada web vive en un servidor
ej: la pag tiene todo el mismo ip pero cada elemento un puerto diferente 

--------------------------------------------------------------------------------------------------------------
Sistema gestor de bases de datos:
SISTEMA SQL
MYSQL 
Nos permite interactuar con la base de datos, para crear estructuras, guardar datos, recupetarlos, ect.
vamos a tener conjuntos de tablas, donde cada tabla va a tener la información agrupada 
según datos particulares, pero todas contienen una CLAVE PRIMARIA (ej:id)

--------------------------------------------------------------------------------------------------------------
Tablas: 
una tabla de una base de datos busca almacenar la información que hace parte de un conjunto
de datos. Y busca, a su vez, que todos los registros presentes en dicha tabla tengan la misma
estructura de datos, garantizando así la homogeneidad de los mismos.

--------------------------------------------------------------------------------------------------------------
MODELAR UNA BASE DE DATOS:
entender la estructura con la que va estar almacenada la info 
- diagrama relacional 
   es una abstraccion de la tabla fisica 
   nos permiten de forma rapida y sencilla entender todas las tablas de la base de DATOS
 Ejemplo en archivo test.drawio
1) creamos un rectangulo por cada una de las tablas
2) dentro del rectangulo va el nombre de cada tabla
3) en el id de la tabla siempre se pone (pk) y todo en negrita para identidicar que es la clave primarias 

--------------------------------------------------------------------------------------------------------------
RELACIONES:
indican como se van a relacionar las tablas entre si 
3 tipos de relaciones:
  - 1 a 1 
  - 1 a muchos (ej un genero a peliculas, porque un genero puede estar asociada a varias pelis, pero una peli a un genero)
    En este caso , en la tabla de las peliculas se debe agregar el id del genero para saber a que genero pertenece con la clave 
    foránea ( que indica que es la clave primaria de otra tabla)
  - muchos a muchos (necesitamos agregar una tabla intermedia, que va a contener su clave primaria 
  mas las claves foraneas de las otras tablas )
    ej: tabla PeliculasActores

--------------------------------------------------------------------------------------------------------------
TIPOS DE DATOS:
3 tipos de datos que nos ofrece MYSQL:
  - Datos numericos: 
    --- varian de acuerdo al max y min de valores que podemos ingresar 
    * int
    * tinyint
    * smallint
    * bigint
    --- tambien están estos dos que sirven para aclarar los numeros con comas 
    * decimal
    * float 
    --- tambien está el 
    * boolean , porque se guardan con un 0 ó 1 , pero no se recomiendo 
    en ese caso usar int y decir que 1 es true y 0 false por Ejemplo.

  - Datos de tipo texto:
    * char, viene de la mano de un numero que indica la cantidad exacta de numeros de caracteres 
    * varchar, lleva el numero máximo de caracteres
    * text, sin cantidad de caracteres

  - Datos de tipo fecha:
    --- debemos respetar el formato yyyy-mm-dd
    * date, solo fechas
    * time, solo horarios
    * datetime, declara ambas cosas

--------------------------------------------------------------------------------------------------------------

Se pueden aclarar RESTRICCIONES, se puede aclarar que una columna es PK ó FK , Pero tmb podemos aclarar 
que no acepta NULL (not null)
UNIQUE, que no se puede repetir, 
DEFAULT y AUTO_INCREMENT por ej columna id que va a ir autoincrementado su numero. 

CONSTRAINTS - RESTRICCION
- se usan para limitar el tipo de dato que puede pedir una columna en una tabla para asegurar su concistencia 
- se pueden definir al crear la tabla o posteriormente
- nos permiten "validar" la info que se desea almacenar en la base de datos, para saber si esta permitido o no 
guardar dicha info
- ya vienen predefinidas y se pueden aplicar a una o varias columnas
- su objetivo es mantener la establidad, precision y confiabilidad de los datos de esa columna 
- si no cumplen con las restricciones no se guarda el registro (info). 

--------------------------------------------------------------------------------------------------------------

CREATE, DROP Y ALTER TABLE

Create table -> nos permite crear una tabla desde cero.
             -> new_tbl 
             -> donde debemos aclarar el nombre de la tabla, sus columnascon sus tipos de datos y constraints

Drop table -> tbl_name
           -> solamente lleva cual es la tabla que queremos borrar 

Alter table -> tbl_name
            -> es sumamente flexible, según la modificación que le querramos realizar a la tabla 
            -> se puede crear una nueva columna , borrar una columna, cambiar un tipo de dato o agregar un constraints

CREATE TABLE tipo_cliente (
  id_tipo_cliente INT NOT NULL,
  titulo VARCHAR(20) NOT NULL,
  PRIMARY KEY (id_tipo_cliente)
)

ALERT TABLE tipo_cliente(
  ADD porcentaje_descuento TINYINT UNSIGNED
)


--------------------------------------------------------------------------------------------------------------
FOREIG KEY
-> Es una constraints 
-> permite que una columna/tabla guarde como valor un dato particular que referencie a otra tabla y sirve para relacionar las dos tablas entre si 


--------------------------------------------------------------------------------------------------------------
INSERT , UPDATE Y DELETE

Insert: para insertar datos en una tabla
  -> comando INSERT INTO 
  -> seguido de nombre de la tabla
  -> seguido de VALUES
  -> luego entre () va el dato de cada una de las columnas, tienen que ir en el mismo orden que estan creadas en la base de datos
  Ej: 
  //opción si ponemos todos los datos 
  INSERT INTO movies VALUES
  (DEFAULT,NOW(), NOW(), "Her", 9.5, 3) // now()es la fecha de ahora 
   id --created-- updated--title,reating, awards -- etc

  //opcion si solo ponemos algunos datos 
    INSERT INTO movies(id, title, reating, awards) VALUES
  (DEFAULT, "Her", 9.5, 3) // now()es la fecha de ahora 
   id --title,reating, awards -- etc

    
Delete: 
  -> DELETE FROM nombre tabla (si ponemos solo eso se borra toda la tabla)
  -> WHERE rating < 1 (donde decimos que fila queremos borrar , en este caso la fila con un raiting < 1)


Update : actualizar la tabla 
  -> UPDATE NOMBRE DE LA TABLA 
  -> SET raiting = 1 (acá decimos que queremos cambiar, si dejamos solo así cambia todos)
  -> WHERE raiting < 4 (para decir que fila queremos modificar)

--------------------------------------------------------------------------------------------------------------
SELECT -> es una consulta
       -> nunca va modificar la info de la tabla pero si la forma en que lo vemos
       -> USAMOS MySQL
       -> SELECT * FROM nombre de la tabla (el * es porque queremos buscar todos los campos)
       -> Para ser mas precisos SELECT title, rating, awards FROM movies (solo me van a aparecer esas columnas)

       SELECT nombre, telefono FROM clientes

--------------------------------------------------------------------------------------------------------------
WHERE Y ORDER BY (se complementan con el select)


WHERE -> Nos sirve para hacer filtros en los resultados
      -> filtrar las filas dadas algunas condiciones
      -> SELECT * FROM movies
         WHERE raiting > 5 
         AND awards < 2

ORDER BY -> Nos permite ordenarlos
         -> SELECT * FROM movies ORDER BY raiting 

         -> ejemplo 2 
         SELECT * FROM movies
         WHERE raiting > 5 
         ORDER BY first_name DESC (este DESC LO HACE DESCENDIENTE)

Se usan los signos < > = , pero para decir distinto que , podemos hacerlo != o <>

--------------------------------------------------------------------------------------------------------------
BETWEEN Y LIKE


BETWEEN -> SELECT * FROM movies
           WHERE raiting BETWEEN 7 AND 10 (que el raiting este entre 7 y 10)

LIKE -> Nos permite filtrar texto según su formato
     -> podemos decirle que empiece con una letra o que termine con otra, que tenga una letra al medio
     -> SELECT * FROM movies
        WHERE title LIKE "Avatar"   (nos va a traer la peli avatar)
        pero si pongo 
        WHERE title LIKE "A%" (le estamos diciendo que tiene que empezar con A y después vale todo)
        WHERE title LIKE "%S" (le estamos diciendo que tiene que terminar con S y antes vale todo)
        WHERE title LIKE "%S%T%"

     ->No debemos preocuparnos por las mayúsculas y minúsculas, ya que el LIKE no hace distinción entre las mismas.


--------------------------------------------------------------------------------------------------------------
LIMIT Y OFFSET


LIMIT -> me trae solo la cantidad de resultados que le indiquemos 
OFFSET -> Le indicamos a partir de que numero queremos que nos muestre los resultados en la otra pag 

SELECT * FROM movies
ORDER BY raiting DESC
LIMIT 5 (Me muestra los 5 primeros)
OFFSET 5 (me muestra a partir del numero 5)

--------------------------------------------------------------------------------------------------------------
ALIAS 

-> Se usan para darle un nombre temporal y mas amigable a las tablas, columnas o funciones 
-> se escriben durante una consulta y solo dura en ella
- se usa AS 
PARA UNA COLUMNA:
SELECT nombrePelicula AS alias_nombre_pelicula FROM movies

PARA UNA TABLA:
SELECT * FROM comision123 AS mis_alumnos 

--------------------------------------------------------------------------------------------------------------
FUNCIONES DE ALTERACION 

CONCAT -> nos permite unir varias columnas 
        -> SELECT CONCAT (first_name," ", last_name) AS  nombre_completo
           FROM actors 
           usamos el AS porque si no el nombre de la columna va a ser CONCAT
           "" para darle espacio entre si
           el resultado va a ser tener una sola columna con los dos datos

INNER JOIN -> Hacemos cruce de tablas 
           -> SELECT * FROM movies
              INNER JOIN genres ON genre_id = genres.id 

              estamos haciendo el cruce de la tabla movies con genres , donde el genre_id(de movies) se cruza con 
              el genres.id (De la tabla de generos)

LEFT JOIN -> SELECT title, name FROM movies
             lEFT JOIN genres ON genre_id = genres.id 

             Las pelis aparecen igual aunque no tengan genero 

COALESCE -> SELECT title,COALESCE(name, "No tiene genero") FROM movies
            lEFT JOIN genres ON genre_id = genres.id 
         -> Aca lo que hace es que a las pelis que no tienen genero en vez que apareza null aparece lo que escribimos entre ""
         -> Hace que si un elemento de la tabla esta vacío lo complete con algo que le decimos nosotros  

NOW -> SELECT title, release_date, NOW() FROM movies
    -> nos permite tener la hora y la fecha actual 

DATEDIFF -> Nos permite ver la diferencia entre dos fechas 
         -> SELECT title, DATEDIFF(NOW(), release_date) FROM movies
            estamos haciendo la diferencia entre la fecha de estreno y la actual 
         -> para que el resultado no nos de en negativo deberíamos poner primero la fecha mas reciente 

EXTRAC -> Nos permite tomar un dato exacto de la fehca, ya sea dia, año, hora , ect
       -> SELECT title, EXTRACT(day FROM release_date)  FROM movies
          estamos pidiendo el día 

DATE_FORMAT -> Para cambiar el formato de la fecha
            -> SELECT title, DATE_FORMAT(release_date, "%d/%m/%y")  FROM movies
               acá la fecha se va a ver dia mes año 

REPLACE -> reemplaza textos y lleva 3 datos:
          1 - columna que vamos a operar
          2 - dato que queremos reemplazar 
          3 - dato que vamos a insertar 
        -> SELECT REPLACE(title, "Harry", "Juanito") FROM movies
           reemplaza la palabra harry por juanito 
        
LENGTH -> si lo usamos con el select vemos la cant de caracteres de la columna 
          SELECT LENGTH(title)FROM movies
       -> si lo usamos con where podemos filtar 
          SELECT title FROM movies
          WHERE LENGTH(title) > 10

CASE -> damos una calificación 
        SELECT title, rating 
        CASE
            WHEN rating < 5 THEN "Mala"
            WHEN rating < 7 THEN "Buena"
            ELSE "Muy Buena"
        END (siempre tiene que terminar con end)
        FROM movies
     -> le decimos que genere una calificación dependiendo de algo

 --------------------------------------------------------------------------------------------------------------
JOINS

INNER JOINS -> se usa en el sql principal de la base de datos
            -> en vez de poner el nombre de todas las tablas ponemos una sola 
            -> usamos el inner JOIN para cada vez que queremos cruzarnos con una tabla 
            -> SELECT * FROM movies
               INNER JOIN genres ON genre_id = genres.id

lEFT JOIN -> para cuando alguno de los datos esten vacíos
          -> SELECT * FROM movies (aca sería si movies no tiene genero )
             LEFT JOIN genres ON genre_id = genres.id
RIGHT JOIN -> para cuando alguno de los datos esten vacíos
          -> SELECT * FROM movies (aca sería si generos no tiene peliculas )
             RIGHT JOIN genres ON genre_id = genres.id

SELECT first_name, last_name 
FROM movies
INNER JOIN actor_movie ON movie_id = movies.id
INNER JOIN actors ON actor_id = actors.id
WHERE title LIKE "Harry%"
en este ejemplo me trae todos los actores que actuaron en hary pero repetidos

--------------------------------------------------------------------------------------------------------------
DISTINCT -> lo que hace es que si hay 2 filas iguales no las repite 
         -> elimina duplicados que sean exactamente igual 

SELECT DISTINCT first_name, last_name 
FROM movies
INNER JOIN actor_movie ON movie_id = movies.id
INNER JOIN actors ON actor_id = actors.id
WHERE title LIKE "Harry%"


--------------------------------------------------------------------------------------------------------------
GROUP BY -> nos permite agrupar datos 
         -> agruparlos por un determinado campo 
         -> SELECT name, COUNT(*) , MAX(rating), AVG(length)
            FROM movies
            INNER JOIN genres ON genre_id = genres.id
            GROUP BY name
            lo que estamos haciendo acá es agrupar segun genero y saber cuantas 
            peliculas tiene cada genero, cual es el mayor rating de las peliculas y cual es
            el promedio de duración
         
         -> SELECT id_genero, COUNT(*)
            FROM canciones
            INNER JOIN generos ON id_genero = generos.id
            GROUP BY id_genero

--------------------------------------------------------------------------------------------------------------
FUNCIONES DE AGREGACION -> Obtienen un dato en conclusión
                        -> existen 5 funciones 

1 - COUNT -> obtener una cantindad 
2 - MAX -> Obtener el valor maximo
3 - MIN -> obtener el valor minimo
4 - AVG -> obtener promedios 
5 - SUM -> obtener sumatorias

SELECT COUNT(*) //cantidad de peliculas
FROM movies
WHERE rating > 5 

SELECT MAX(rating),COUNT(*) //maximo rating
FROM movies

SELECT SUM(total) //suma el total 
FROM movies

--------------------------------------------------------------------------------------------------------------
HAVING -> Se usa siempre con el GROUP BY
       -> pone condiciones en las funciones de agregación
          SELECT name, COUNT(*)
          FROM movies
          INNER JOIN genres ON genre_id = genres.id
          GROUP BY name
          HAVING COUNT(*) >= 3

SELECT SUM(total), pais_de_facturacion FROM `facturas`
GROUP BY pais_de_facturacion 
HAVING SUM(total) >100


--------------------------------------------------------------------------------------------------------------
PROMESAS
-> sirven para funciones asincronicas 
-> se tienen que ir cumpliendo cosas 
-> pero no siempre se cumplen 

catch , que no importa cual de todas las promesa fallen que con uno solo catch
   podemos atrapar todas las fallas, es decir que deja de ejecutarse el resto de las promesas y se ejecuta el 
   codigo adentro del catch 

.then: -> todo then lleva una función 
       -> lo que retorna el primer them es lo que devuelve el segundo
       -> es donde se produce el codigo asincronico 
       -> nos asegura que se va a ejecutar una vez que el pedido sincronico (registrarCompra)
          allá terminado

Promise.all([promesa1, promesa2]) -> cuando necesitamos que 2 o + promesas se resuelvab para realizar la acción
                                  -> contiene un array de promesas , que una vez que se resuelve se ejecuta un then
                                     con los resultados de la misma
                                  -> debemos guardar en variables las promesas que necesitamos obtener
                                  -> el .then recibe un array con los resultados de las promesas cumplidas 


registrarCompra(producto)
  .then(function(){
    console.log("compra registrada")
    sacarDeStock(producto)
  })
  .then(function(){
    console.log("stock actualizado)
    reponerProducto(producto)
  })
  .then(function(){
    console.loh("producto repuesto")
  })
  .catch(function(e){
    console.log("error")
  })


--------------------------------------------------------------------------------------------------------------
Sequelize
-> ORM : object relational mapper
-> es un ORM que ayuda a conectarnos e interactuar con bases de datos relacionales, como pueden ser
 Postgres, MySQL o SQLite por ejemplo.
-> ORM es un paquete de Node.js que está disponible para su instalación a través de npm.
   
instalación:
  1) npm install sequelize sequelize-cli
  2) npm install sequelize@5.21 o este npm install --save mysql2
  3) crear archivo en la carpeta raiz con .sequelizerc (donde van a estar todos los archivos
   relacionados con la base de datos) y escribir esto:

      const path = require('path')

      module.export = {
        config: path.resolve('./database/config', 'config.js'),
        'models-path': path.resolve('./database/models'),
        'seeders-path': path.resolve('./database/seeders'),
        'migrations-path': path.resolve('./database/migrations'),
      }

  4) comando sequelize init , nos crea el archivo config.js 
    en el tenemos que agregar module.exports y cambiar los datos para nuestra base de datos
    modifique: 
       - contraseña: 
       - database

  6) archivo index.js dentro de la carpeta de databese, es el archivo que realiza la conección con la base de datos
  y exporta la llamadda db


  --------------------------------------------------------------------------------------------------------------
  MODELO 

  Capa de modelo:
  ->representa la logica del negocio 
  -> representación de los datos que persistimos en el sistema 
      por ej:
      modelo "usuario" vamos a hablar de lo que debemos persistir del mismo guardar "nombre, contraseña"
  -> tmb podemos consular, insertar, actualizar, eliminar datos 
  -> hace una representación de la tabla , por eso debemos indicar:
      nombre de la tabla y columnas que vamos a usar
  -> crear un modelo:
      1) en la carpeta models, crear archivo con el nombre del mismo por ej:
        "Usuario.js"
        se estila que el nombre del modelo siempre debe comenzar en mayúsculas y estar en singular
      2) un archivo de modelo exporta una funcion que lleva 2 parametros
        1: es la conexion a la base de datos, "sequelize"
        2: son los tipos de base de datos para trabajar "dataTypes"
      3) se crea una constante  
        dentro del define va:
          - nombre de la tabla
          - objeto literal que representa los detalles de la tabla y rellenar cada uno con otro 
            objeto literal, el type debe ir en todos
        
        module.exports = (sequelize,dataTypes) => {
          const Usuario = sequelize.define('Usuarios',{
            id:{
              autoIncrement: true,
              primaryKey: true, 
              type: dataTypes.INTEGER
            },
            nombre:{
              allowNull: false,
              type:dataTypes.STRING,
            }
          });
          return Usuario
        }
--------------------------------------------------------------------------------------------------------------
FindAll, FindByPK, findOne
-> con ellos se usan los modelos 

findAll -> buscar todo 
        -> es equivalente a escribir en sql SELECT * FROM table
        -> necesitamos importar el modelo en una variable 
           const Peliculas = require('models/Pelicula.js')
           Peliculas.findAll()

FindByPK -> buscar un registro mediante su id
         -> recibe como parametro un id y nos retorna el registro identificado

findOne -> buscar resultados que coincidan con el atributo indicados en el objeto literal que recibe el metodo
        db.Usuario.findOne({
          where: {
            name: 'Tony'
          }
        }).then(resultado)=>{
          console.log(resultado);
        }


--------------------------------------------------------------------------------------------------------------
Where y operadores

where -> igual que en sql
      -> es un objeto literal que tiene una condición
    
       db.Usuario.findAll({
          where: {
            name: 'Tony'
          }

like -> importar los operadores 
        const Op = Sequelize.Op

        db.Usuario.findAll({
          where: {
            name: {[Op.like]: '%s%'}
          }

--------------------------------------------------------------------------------------------------------------
Order - Limint - OFFSET
-> van dentro de las consultas

order by -> para ordenar

limit -> para decir cuantos resultados queremos ver 

offset -> nos permite especificar a partir de que elemento queremos que nos devuelva el resultado


db.Producto.findAll({
  order:[
    //columna donde aplicamos el order - que tipo de orden aplicaremos
    ['reputación','DESC']
    ['precio','DESC']
  ]
})

db.Producto.findAll({
  limit: 5
})
db.Producto.findAll({
 offset: 5
})

--------------------------------------------------------------------------------------------------------------
CRUD - Create, Read, Update, Delete

Create -> agregar nuevos registros en nuestras tablas de base de datos
       -> recibe un objeto literal con aquelllos datos que se quieren almacenar 
       -> tenemos que tener en cuenta lo que se define en el modelo 
 .bulkCreate()->
 const Pelicula = require('model/pelicula.js');
    Pelicula.bulkCreate([
  { titulo: String(), genero: String() },
  { titulo: String(), genero: String() },
  //{ genero: String() },
])

       <!--  <p>
                <select name="genre_id" id="" required>
                    <option value="" disabled selected>- select genre - </option>
                    <% allGenres.forEach(genre => { %>
                    <option value="<%= genre.id %>"><%= genre.name %></option>
                    <% }); %>
                </select>
            </p> -->

update()-> editar registros existentes en las tablas de la base de datos
        ->  como argumento,la información que se va a actualizar y el filtro a través del cual se actualizará la información de un determinado registro existente.
        -> siempre tenemos que usar el where

destroy /soft deletes -> eliminar registro
                      -> siempre el where 
                      -> nunca olvidar poner una condición
                      -> tener cuidado cuando la fila tiene relaciones con las otras tablas


--------------------------------------------------------------------------------------------------------------
Relaciones y CRUD Completo

relaciones 1:N (uno a muchos) -> los modelos de las tablas ya tienen que estar listos 
                              -> hasMany (tiene muchos) ej: un genero tiene muchas pelis asociadas 
                                 - Genero.hasMany(Pelicula, {
                                      as: 'peliculas' //indica el nombre que le estamos dando a la relacion
                                      foreignKey: 'genre_id' //nombre de la clave foreanea en la base de datos
                                    })
                              -> belongsTo (pertenece a) ej: una peli pertenece a un genero :
                                  - primero debemos pasar como 1 parametro el modelo a asociar  y 
                                    2 parametro objeto literal con la propiedades 
                                    Genero.belongsTo(genero, {
                                      as: 'genero' //indica el nombre que le estamos dando a la relacion
                                      foreignKey: 'genre_id' //nombre de la clave foreanea en la base de datos
                                    })
                                   
relaciones N:M (muchos a muchos) -> belongsToMany
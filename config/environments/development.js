module.exports = {
  //Configuraciones que se van a usar en prod.
  PORT: process.env.PORT,
  DB: {
    //mysql en este caso.
    host: "localhost",
    user: "root",
    password: "root",
    database: "masal_dev"
  }
};

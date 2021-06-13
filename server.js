const express = require('express');
const routes = require('./routes');
//D import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//D sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  sequelize.sync(() => {
    console.log('Connected to database');
  })
  console.log(`App listening on port ${PORT}!`);
});

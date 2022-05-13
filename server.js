require('dotenv').config();
const app = require('./app');
const db = require('mongoose');

const uri = process.env.DB_TOKEN;
const port = process.env.PORT;

db.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(_ => {
    console.log('Database connection successful');
    app.listen(port, _ => console.log('Server started on port:', port));
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

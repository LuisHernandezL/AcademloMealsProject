const { app } = require('./app');
const { db } = require('./utils/db.utils');

//server auth
db.authenticate()
  .then(() => {
    console.log('db auth');
  })
  .catch((e) => console.log(e));

//server sync
db.sync()
  .then(() => {
    console.log('db sync');
  })
  .catch((e) => console.log(e));

app.listen(4000, () => {
  console.log('Server On');
});

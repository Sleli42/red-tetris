const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/redtetris";
const secret = 'supersecrettetrisred'
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true}).then(
  () => {console.log('Database connected')},
  err => { console.log('error Database')}
);


module.exports = {
  mongoose,
  url,
  secret
}

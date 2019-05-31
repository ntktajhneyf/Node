const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(
  'mongodb+srv://Kiba:28091984@cluster0-yzt34.gcp.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true }
);
require('./user');
mongoose.connection.on('connected', () => {
  console.log(
    'Mongoose connection open mongodb+srv://Kiba:28091984@cluster0-yzt34.gcp.mongodb.net/test?retryWrites=true'
  );
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected app termination');
    process.exit(0);
  });
});

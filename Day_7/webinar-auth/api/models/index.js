const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb+srv://Kiba:28091984@cluster0-yzt34.gcp.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true }
);

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

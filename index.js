import express from 'express';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import championsRoutes from './routes/Champions';

const app = express();
const PORT = 8000;

const mongoServer = new MongoMemoryServer({
    instance: {
        port: 8001,
        dbName: 'test',
        dbPath: 'D:\\database\\data',
        debug: true,
        storageEngine: 'mmapv1'
    },
    debug: true
});

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser({uploadDir:__dirname+'/tmp'}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

mongoServer.getConnectionString().then((mongoUri) => {
  const mongooseOpts = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
  };

  mongoose.connect(mongoUri, mongooseOpts, () => {
    console.log(`MongoDB successfully connected to ${mongoUri}`);
  });

  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e);
      mongoose.connect(mongoUri, mongooseOpts);
    }
    console.log(e);
  });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/api/', championsRoutes);

app.listen(PORT, () => {
    console.log('app listen on PORT: ', PORT);
})
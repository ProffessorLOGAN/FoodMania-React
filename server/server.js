import express from 'express';
import { APP_PORT, DB_URL } from './config';
import errorHandler from './middleware/errorHandler';
const app = express();
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

//Database Connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connected successfully... ');
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.send('hello world')
});


app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(8000, () => {
    console.log(`listening on port ${PORT}`);
});
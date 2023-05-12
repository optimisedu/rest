import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
import mongoose from 'mongoose';

const PORT = 8080;
const app = express();
const MONGODB_URL = 'mongodb+srv://auto:@basedata.um62l4a.mongodb.net/?retryWrites=true&w=majority'
app.use(cors({
    credentials: true,
}))
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`'server is listening on port ${PORT}`)
});

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on('error', error => console.log(error))

console.log("thar she blows!")
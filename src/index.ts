import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
const PORT = 8080
const app = express();
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

console.log("thar she blows!")
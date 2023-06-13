import express from 'express';  //importando dependencias para criar o servidor
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config()

const server = express(); //criando servidor

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Página não encontrada!');
})

server.listen(process.env.PORT);
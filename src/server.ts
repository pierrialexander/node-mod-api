import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';

// .ENV
dotenv.config();

// Instancia do server
const server = express();

// pasta publica dos statics
server.use(express.static(path.join(__dirname, '../public')));

// habilita para usar o Cors.
server.use(cors());

server.use(express.urlencoded({extended: true}));
server.use(express.json());

// ROTAS
server.use(apiRoutes);

// Rota de alerta se nenhuma página for encontrada
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.'});
})

// Subindo o servidor na porta 4000
server.listen(process.env.PORT);
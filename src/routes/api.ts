import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();



// ROTAS ====================================

router.get('/ping', ApiController.ping);

// Retorna um Valor Randomico
router.get('/random', ApiController.random);

// Lê o nome na URL e retorna ela
router.get('/nome/:nome', ApiController.nome);

// Cria uma nova frase
router.post('/frases', ApiController.createPhrase);

// Lista todas as frases
router.get('/frases', ApiController.listPhrases);

// lista uma única frase
router.get('/frase/:id', ApiController.getPhrase);

export default router;
import { Request, Response } from 'express';

// Importação do model de Phrase
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({
        pong: true
    })
}

export const random = (req: Request, res: Response) => {
    let nRend: Number = Math.floor( Math.random() * 10 );
    res.json({ 
        Valor: nRend
    })
}

export const nome = (req: Request, res: Response) => {
    let nome: String = req.params.nome;
    res.json({
        nome: nome
    })
}

/**
 * Método responsável por criar uma nova Frase
 * @param req 
 * @param res 
 */
export const createPhrase = async (req: Request, res: Response) => {
    let author: string = req.body.author;
    let txt: string = req.body.txt;

    let newPhrase = await Phrase.create({
        author, 
        txt
    })

    res.status(201);

    res.json({ id: newPhrase.id, author, txt });
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();  
    res.json({ list })
}

export const getPhrase = async(req: Request, res: Response) {
    let phrase = await Phrase.findByPk(req.params.id);
    if(phrase) {
        res.json({ phrase })
    }
    else {
        res.json({ error: 'Frase não encontrada' });
    }


}
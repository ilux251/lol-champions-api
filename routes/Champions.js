import { Router } from 'express';
import ChampionController from '../controller/Champion';
import fs from 'fs';

const controller = new ChampionController();
const router = Router();

router.get('/champions', (req, res) => {
    controller.getChampions()
        .then(result => {
            res.send(result);
        })
});

router.post('/champion', (req, res) => {
    console.log(req);
    if (req.body !== null || Object.keys(req.body).length === 0) {
        res.status(301).send({message: 'Request-Body is empty'});
    }
    controller.createChampion(req.body)
        .then(result => {
            res.status(200).send({result});
        });
});

router.post('/champions', (req, res) => {
    const content = fs.readFileSync(req.query);
});

export default router;
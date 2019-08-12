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
    controller.createChampion(req.query)
        .then(result => {
            res.status(200).send({result});
        });
});

router.post('/champions', (req, res) => {
    console.log(req);
    const content = fs.readFileSync(req.query);
    console.log(content);
});

export default router;
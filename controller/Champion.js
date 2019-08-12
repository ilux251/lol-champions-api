import Champion from '../model/Champion';

class ChampionController {
    getChampions () {
        return Champion.find({}).then(docs => {
            return docs;
        })
    }

    async createChampion (params) {
        const champion = new Champion(params);
        await champion.save();

        return { message: 'Champion erfolgreich hinzugefügt' };
    }
}

export default ChampionController;
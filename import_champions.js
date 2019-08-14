const fs = require('fs');
const fetch = require('node-fetch');

const readContent = fs.readFileSync(process.argv[2], 'utf8');
const champions = JSON.parse(readContent);

console.log(typeof champions);

champions.forEach((champion) => {
    console.log({ name: champion.name, icon: champion.icon });
    fetch('http://localhost:8000/api/champion', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: champion.name, icon: champion.icon})
        })
        .then(res => {
            console.log(res, champion.name);
        })
        .catch(err => {
            console.log(err);
        });
});
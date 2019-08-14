const env = process.env.NODE_ENV || 'development';

const development = {
    port: 8000,
    apiURL: 'http://localhost:8000/api/',
    dbConfig: {
        instance: {
            dbName: 'lol-champions',
            dbPort: 8001,
            dbPath: 'C:\\mongodb\\data',
            storageEngine: 'mmapv1'
        },
        debug: true
    }
}

const production = {
    port: 8000,
    dbConfig: {
        instance: {
            dbName: 'lol-champions',
            dbPort: 8001,
            dbPath: 'C:\\mongodb\\data',
            storageEngine: 'mmapv1'
        }
    }
}

export default ({development, production})[env];
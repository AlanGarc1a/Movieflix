const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;
let mongo = undefined;

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//connect to db
const connect = async () => {

    //close previous connection
    await mongoose.disconnect();

    //create a new instance of "MongoMemoryServer" and automatically start it
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri, opts, err => {
        if (err) {
            console.log(err);
        }
    });
}

//remove and close the database
const dropDatabase = async () => {
    if (mongo) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    }
}

//remove all data from collections
const dropCollections = async () => {

    if (mongo) {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
};

module.exports = {
    connect,
    dropDatabase,
    dropCollections
}

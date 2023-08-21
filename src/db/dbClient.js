const { MongoClient } = require("mongodb");

const url = "mongodb+srv://makeTodo:qopx3KZJ4VoNKWSY@cluster0.4hywmoi.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(url, {})

const dbClient = mongoClient.connect()

export default dbClient;
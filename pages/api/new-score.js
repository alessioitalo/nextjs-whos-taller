import { MongoClient } from "mongodb";

const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;


async function addScore(req, res){
    if (req.method === 'POST'){
        const data = req.body
        const client = await MongoClient.connect(mongoUri)
        const db = client.db;
        const leadersCollection = db.collection('leaderboard')
        const result = await leadersCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(200).json({ message: "Added to DB" });

    }
}
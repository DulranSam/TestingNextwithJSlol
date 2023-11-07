import { MongoClient, ObjectId } from "mongodb";

const CLUSTER = "mongodb+srv://deranged248:derangedfrfrlmao@deranged.bvcwyla.mongodb.net/Store?retryWrites=true&w=majority";
let db;

export async function GET(Request, Response) {
    const client = await MongoClient.connect(CLUSTER, {
        useNewUrlParser: true, 
    });
    await client.connect();
    db = client.db();

    const data = await db.collection("users").find().toArray();
    Response.json(data); 
}

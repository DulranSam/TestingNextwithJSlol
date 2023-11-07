import mongoose from "mongoose";
const CLUSTER = "mongodb+srv://deranged248:derangedfrfrlmao@deranged.bvcwyla.mongodb.net/Store?retryWrites=true&w=majority";

export async function GET(){
    return new Response("Hello! Just testing endpoints!")
}



export async function POST(){
    await mongoose.connect(CLUSTER,console.log("Connected to Cluster"),{useNewUrlParser:true});

}
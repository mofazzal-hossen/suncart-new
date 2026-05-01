import { MongoClient } from "mongodb";

async function run() {
  const client = new MongoClient("mongodb+srv://suncart:7WpzIXCjGgT0Xkqi@cluster0.cw7d0hh.mongodb.net/?appName=Cluster0");
  await client.connect();
  const db = client.db("suncart");
  const users = await db.collection("user").find({}).sort({createdAt: -1}).limit(1).toArray();
  console.log("Latest user:", users);
  await client.close();
}
run();

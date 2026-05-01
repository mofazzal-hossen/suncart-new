import { betterAuth, google } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DB_URI);  //mongodb account 

await client.connect();
const db = client.db("suncart");

export const auth = betterAuth({
  database: mongodbAdapter(db, {

    client
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },



  },





});











// faQRabDgAO7xZQYr
//   passs

// lazy-news




// google

// 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




// github
// Ov23lizzv6H6bf0UH2vH

// 64b4542ba0d89c37c5208d9fbc5d80239fbe93cf
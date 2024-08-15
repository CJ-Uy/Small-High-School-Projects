require("dotenv").config();
const BUCKET_NAME = process.env.BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN;

const CyclicDB = require("@cyclic.sh/dynamodb");
const db = CyclicDB("wide-eyed-handkerchief-fawnCyclicDB");

const run = async function () {
  let animals = db.collection("animals");

  // create an item in collection with key "leo"
  let leo = await animals.set("leo", {
    type: "cat",
    color: "orange",
  });

  // get an item at key "leo" from collection animals
  let item = await animals.get("leo");
  console.log(item);
};
run();



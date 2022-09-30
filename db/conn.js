const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const connectionString = process.env.ATLAS_URI;

async function main() {
  const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) =>
      console.log(` - ${db.name} has been successfully reached.`)
    );
  }

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

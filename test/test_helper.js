// Helper file that creates a connection to the db.
import mongoose from "mongoose";

// Tells mongoose to use ES6 implementation of promises.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.TESTING_URI);

mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", (error) => {
    console.warn("Error : ", error);
  });

// Below runs before each test.
beforeEach((done) => {
  mongoose.connection.collections.incidents.drop(() => {
    done();
  });
});

import Mongoose from "mongoose";
// import { UserModel } from "./users/users.model";

let database: Mongoose.Connection;


export const connect = () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const dbname = process.env.MONGO_DATABASE;
  const host = process.env.MONGO_HOST || "localhost";
  const uri = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`; if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }); database = Mongoose.connection; database.once("open", async () => {
    console.log("Connected to database");
  }); database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  } Mongoose.disconnect();
};

const kittySchema = new Mongoose.Schema({
  name: String
});
const Kitten = Mongoose.model('Kitten', kittySchema);

export { Kitten };


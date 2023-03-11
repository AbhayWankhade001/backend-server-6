import mongoose from "mongoose";
import ENV from '../router/config.js';

async function connect(){
    const db = await mongoose.connect(ENV.ATLAS_URI, {
        useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
    });
    console.log("Database Connected");
    return db;
}

export default connect;

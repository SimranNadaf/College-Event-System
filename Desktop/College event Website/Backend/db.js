const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
  
const mongoURI ="mongodb+srv://user:user@cluster0.7micxfn.mongodb.net/College?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = () => {
   mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    () => {
      console.log("connected to mongodb successfully");
    }
  );
};

module.export = connectToMongo();

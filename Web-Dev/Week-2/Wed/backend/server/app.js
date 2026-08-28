const express = require("express");
const app = express();



// Middleware to parse JSON
app.use(express.json());
const {getAllPets}=require("./petHandlers")

app.get("/pets",getAllPets)




const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

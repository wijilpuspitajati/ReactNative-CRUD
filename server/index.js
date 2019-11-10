const express = require('express');
// RoutesFile
const approutes = require("./routes/app-routes");
const app = express();
//Routes Middleware
app.use("/app", approutes)
//Port
const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Listen to the port of ${port}`))
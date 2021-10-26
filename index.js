import express from "express";/* or */
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";


let app = express();

let PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);


app.listen(PORT ,()=>console.log(`Server Running on port: http://localhost:${PORT}`)); 



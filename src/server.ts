"use strict";
import * as express from "express";
const app = express();

app.get("/",(req,res,next) => {
    res.send("API");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server started on port " + port));
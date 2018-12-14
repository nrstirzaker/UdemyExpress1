"use strict";
import * as express from "express";
const app = express();

import {DataStore} from "./data/data";

console.log(DataStore.tours)

app.get("/",(req,res,next) => {
    res.send("TourBooking API");
});

app.get("/tours",(req,res,next) => {
    res.json(DataStore.tours);
});


app.post("/tours",(req,res,next) => {
    res.send("Post a new tour");
});
const port = process.env.PORT || 8081;
app.listen(port, () => console.log("Server started on port: " + port));
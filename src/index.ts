import express from "express";
import "dotenv/config";

const app = express();


app.get( "/", ( req, res ) => {
    res.send({status: 200, message: 'OK'});
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application is running in the PORT ${process.env.PORT}`);
});
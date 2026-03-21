import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi There");
})
app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    client.user.create({
        data: {
            username: username,
            password:password
        }
    })
    res.json({
        message: "signup successful",
        data: username
    });
})
app.listen(3002);
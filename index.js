const express = require("express");
const fs = require("fs");
const app = express();

app.get("/" , (req, res) =>{
    fs.readFile('quotes.json',(err, data)=>{
        if(!err) {
            let j_data = JSON.parse(data)
            let rand_index = Math.floor(Math.random() * j_data.length)
            let response = {
                quote: j_data[rand_index],
                server: "docker-node0.melfi.resilientnet.com",
                app: "quote-apiv1",
                description: "Quote APIv1 it's a simple HTTP server which provides random quotes when a GET is performed"
            }
            return res.send(response);
            
        }
    })
})

app.listen(6060, "0.0.0.0");
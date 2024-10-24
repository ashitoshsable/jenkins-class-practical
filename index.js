const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to my node.js application");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
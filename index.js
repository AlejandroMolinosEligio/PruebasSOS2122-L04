const cool = require("cool-ascii-faces");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body>"+cool()+"</body></html>");
});


app.listen(port, () => {
    console.log(`Servidor listo ${port}`)
});

console.log(`Servidor listo en el puerto ${port}`);
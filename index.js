const express = require("express")


const app = express()


app.get('/',(req,res)=>{
    res.json({
        name:"Yessi esta es la pagina principal"
    })
});


app.get('/api',(req,res)=>{
    res.json({
        name:"Yessi"
    })
})

app.listen( process.env.PORT || 4000, ()=>{
    console.log(`server running ${process.env.PORT}`);
})
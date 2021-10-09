const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/getCarInfo',(req,res)=>{
    db.query("select * from used_car",(err,data)=>{
        if(!err) res.send({car_res: data});
        else res.send(err);
    })
})
app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`);
})
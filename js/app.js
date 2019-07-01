//this is app.js
const express=require('express');
var app=express();
app.listen(8080);
app.get('/hongmo',(req,res)=>{
  res.send('虹膜电影影向标');
});

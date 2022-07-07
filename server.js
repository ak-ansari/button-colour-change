const express= require('express');
const app= express();
app.use(express.static(__dirname+'/statics'))
const port= process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.sendFile('/index.html')
})


app.listen(port, ()=>console.log(`listening on ${port}`))
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
// routes

app.post('/login' , (req, res)=>{
    const {vals}= req.body;
    // console.log(vals.username);
    // console.log(vals.password);
});

app.post('/register' , (req,res)=>{
    console.log('Checkpoint-2');
    const {values} = req.body ;
    console.log(values.name , values.email , values.contact) ;
})


app.listen(4000 , ()=>{
    console.log("Server listening on port 4000");
});
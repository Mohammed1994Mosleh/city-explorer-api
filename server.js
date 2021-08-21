const express=require('express');
require('dotenv').config();
const server=express();
const PORT = process.env.PORT;
const cors = require('cors');
const cityData = require('./data/weather.json');
server.use(cors());
let axios=require('axios');
let movieHandler=require('./Module/Movie');
let weatherHandler=require('./Module/Weather');
let Locationhandler=require('./Module/Locationn')




server.get('/weather',Locationhandler)
server.get('/weather1',weatherHandler );
server.get('/movies',movieHandler );

server.get('*',(req,res)=>{
    res.status(404).send('not found')
}
)

server.listen( PORT,()=>{
    console.log(`Listning on PORT${PORT}`)
}
)
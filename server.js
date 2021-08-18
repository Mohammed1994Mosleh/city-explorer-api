const express=require('express');
require('dotenv').config();
const server=express();
const PORT = process.env.PORT;
const cors = require('cors')
const cityData = require('./data/weather.json');
server.use(cors());
let axios=require('axios')


class Forecast {


constructor (lowtemp,maxtemp,discription,date){


this.lowtemp=lowtemp;
this.maxtemp=maxtemp;
this.discription=`${discription}:Low of ${lowtemp} , high of ${maxtemp} ${discription}` ;
this.date=`${date}`

}

}

class Forecast1{
constructor(item){
this.datetime=item.datetime;
// this.temp=temp;
this.description=item.weather.description

}


}


class Movie{
constructor (){
  
}

}


server.get('/weather',(req,res) =>{

let cityNmae=req.query.searchQuery
//  let cityNmae='Amman';
console.log(cityNmae);


let  cityLoc=cityData.find(item=>{
if (item.city_name == cityNmae){

return item.data

}})
  
let newArr=[]

cityLoc.data.forEach( element => {

    let newOb=new Forecast(element.low_temp,element.max_temp,element.weather.description ,element.valid_date)
    newArr.push(newOb)

         
  });


  res.send(newArr);

} )
//localhost:3001/weather1?searchQuery=Amman

server.get('*',(req,res)=>{
    res.status(404).send('not found')
})


server.listen( PORT,()=>{
    console.log(`Listning on PORT${PORT}`)
})
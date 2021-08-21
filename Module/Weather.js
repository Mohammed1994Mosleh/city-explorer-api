let axios=require('axios');
module.exports=weatherHandler;
let inMemory={};

async function weatherHandler(req,res){
    let cityNmae=req.query.searchQuery
    let weather1Url=`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERKEY}&city=${cityNmae}`;

    if(inMemory[cityNmae] != undefined){
        console.log(' cache hit , data in cache memory');
        res.send(inMemory[cityNmae]);

    }
    else{

        try{
    
   
            let newArrr=[];
        
            let weather1Dta= await axios.get(weather1Url);
              
            let weatherArr=weather1Dta.data.data
                for(let i=0;i<3;i++){
                let newOb=new Forecast1(weatherArr[i]);
                
                newArrr.push(newOb);
                }

                inMemory[cityNmae]=newArrr;
                console.log('cache miss');
                res.send(newArrr);
                }
           
            catch (error) {
                        res.send(error)
            }

    }
    
 
    
}

class Forecast1{

    constructor(weatherob){
      this.lat=weatherob.low_temp;
      this.lon=weatherob.max_temp;
      this.description=weatherob.weather.description;
      this.date=weatherob.valid_date
    
    }
    
    }

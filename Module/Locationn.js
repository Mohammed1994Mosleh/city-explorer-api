let axios=require('axios');
module.exports=Locationhandler;
const cityData = require('../data/weather.json');

async function Locationhandler (req,res){
    let cityNmae=req.query.searchQuery
    let  cityLoc=cityData.find(item=>{
        
        if (item.city_name == cityNmae){
            return item.data
    }
    }
    )
      
    let newArr=[]
    
    cityLoc.data.forEach( element => {
        let newOb=new Locationn(element.low_temp,element.max_temp,element.weather.description ,element.valid_date)
        newArr.push(newOb)
    
    }
    );
    
    res.send(newArr);



}



class Locationn {

    constructor (lowtemp,maxtemp,discription,date){
    
      this.lowtemp=lowtemp;
      this.maxtemp=maxtemp;
      this.discription=`${discription}:Low of ${lowtemp} , high of ${maxtemp} ${discription}` ;
      this.date=`${date}`
    
    }
    
    }
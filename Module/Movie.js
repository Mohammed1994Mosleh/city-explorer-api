let axios=require('axios');


async function movieHandler(req,res){
    try{
    let movieName=req.query.searchQuery
    let movieUrl=`http://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEKEY}&query=${movieName}`;
    let newArrr=[];

    let movieDta= await axios.get(movieUrl);
    let dataForobj= movieDta.data.results
     
        
        for(let i=0;i<3;i++){
        let newOb=new Movie(dataForobj[i]);
        
        newArrr.push(newOb);
        }
        
        console.log(newArrr);
        res.send(newArrr);
        }
   
    catch (error) {
         res.send(error)
     }
    
}

class Movie{
    constructor (movieDta){
        this.title=movieDta.title
        this.adult=movieDta.adult;
        this.releasedate=movieDta.release_date
    
    }
    
    }


module.exports=movieHandler;
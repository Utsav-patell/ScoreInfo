// https://stackoverflow.com/questions/49579028/adding-an-env-file-to-a-react-project
 require('dotenv').config();


const API_KEY = process.env.API_KEY;

// Used to fetch the info from the Provided URL;
function fetchData(url){
    return fetch(url).then((res)=>res.json()).catch((err)=>console.log(err));
}


// Get All the matches Info;
export const getMatchInfo = () =>{
    const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`;
    return fetchData(url);
    // then(method1).catch(method2);
} 

// Get the matches with given ID Info;
export const getParticularMatchInfo = (id)=>{
    const url = `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`;
    return fetchData(url);
}
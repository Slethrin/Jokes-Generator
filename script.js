const jokeContainer = document.getElementById('majak');
const getJokeBtn = document.getElementById('btn'); 
getJokeBtn.addEventListener("click",joki);
  joki();
var limit =1 ;

async function joki() {
    const response =await fetch('https://api.chucknorris.io/jokes/random',{
        headers:{
            'Accept':'application/json' 
        }
    });
    const jokeobj = await response.json() ;
    jokeContainer.innerHTML = jokeobj.value+'😂' ;
   
    }
   

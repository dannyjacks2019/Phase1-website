document.addEventListener('DOMcontentLoaded')
//fetch to get stats
const playerStats = "https://www.balldontlie.io/api/v1/stats"
 //Took this API and turned it into data that we can manipulate through => json

//fetch to get name 
 const playerAPI = "https://www.balldontlie.io/api/v1/players"

 function fetchPlayerApi(){
 fetch(playerAPI) 
.then(response=>response.json())
.then(playerInfo=>{
    renderPlayers(playerInfo)
    console.log(playerInfo)})
 }



function fetchPlayerStats(){
    fetch(playerStats)
.then(response=>response.json())
.then(playerPoints=>console.log(playerPoints))
}

function renderPlayers(playerInfo){
 playerInfo.forEach(player => {
    renderPlayer(player)
 });   
}
 
function renderPlayer(player){
 const searchedPlayers = document.querySelector("#searched-players")
 const firstName = document.createElement("p")
 const lastName = document.createElement("p")

 firstName = player.first_name
 lastName = player.last_name
 searchedPlayers.appendChild(firstName,lastName)
}
const searchInput = document.getElementById("search-input");

const searchedPlayers = document.getElementById("searched-players")

const playerAPI = "https://www.balldontlie.io/api/v1/players"

// document.addEventListener('DOMcontentLoaded');

searchInput.addEventListener("keyup", function (event) {
    // console.log(event.target.value)

    let searchVal = event.target.value;

    if (searchVal.length > 0) {
        fetch(playerAPI)
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                // console.log(result.data)
                const foundPlayers = result.data.filter((player) => {
                    return player.first_name.toLowerCase().includes(searchVal.toLowerCase())
                });

                displayPlayers(foundPlayers)

            })
            .catch((err) => {
                console.log(err)
            })
    }

})


function displayPlayers(playerFound) {
    console.log(playerFound)

    searchedPlayers.innerHTML = ""

    let htmltxt = ""

    if (playerFound.length > 0) {

        playerFound.forEach((player) => {
            console.log(player.id)
            htmltxt += `
            <div class="player-card">
                <span class="f-name"> ${player.first_name} ${player.last_name}</span>
                <span class="-team-name">Team: ${player.team.full_name}</span>
            </div>`
        })
        console.log(searchedPlayers)

        searchedPlayers.innerHTML = htmltxt;
    }
}

//fetch to get stats
const playerStats = "https://www.balldontlie.io/api/v1/stats"
//Took this API and turned it into data that we can manipulate through => json

//fetch to get name 


function fetchPlayerApi() {
    fetch(playerAPI)
        .then(response => response.json())
        .then(playerInfo => {
            renderPlayers(playerInfo)
            console.log(playerInfo)
        })
}



function fetchPlayerStats() {
    fetch(playerStats)
        .then(response => response.json())
        .then(playerPoints => console.log(playerPoints))
}

function renderPlayers(playerInfo) {
    playerInfo.forEach(player => {
        renderPlayer(player)
    });
}

function renderPlayer(player) {
    const searchedPlayers = document.querySelector("#searched-players")
    const firstName = document.createElement("p")
    const lastName = document.createElement("p")

    firstName = player.first_name
    lastName = player.last_name
    searchedPlayers.appendChild(firstName, lastName)
}
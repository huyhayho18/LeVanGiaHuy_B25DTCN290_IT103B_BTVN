const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
    let filtered = players.filter(player => {
        let parts = player.split(" - ");
        let playerPosition = parts[1];
        return playerPosition === position;
    });
    return filtered;
}

let midfielders = filterPlayersByPosition("Midfielder", players);
console.log(midfielders);

let forwards = filterPlayersByPosition("Forward", players);
console.log(forwards);
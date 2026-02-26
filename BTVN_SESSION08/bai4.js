const players = [
    "Messi - Forward - 30",
    "Ronaldo - Forward - 28",
    "Neymar - Forward - 20",
    "De Bruyne - Midfielder - 15",
    "Kante - Midfielder - 10",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0"
];

function getReversedNames(players) {
    let names = players.map((player) => {
        return player.split(" - ")[0]
    });

    let reversedNames = names.reverse();

    return reversedNames;
}

let result = getReversedNames(players);
console.log(result);
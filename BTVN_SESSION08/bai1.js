const playerList = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

function displayPlayers(list) {
  list.forEach(player => {
    console.log(player);
  });
};

displayPlayers(playerList);
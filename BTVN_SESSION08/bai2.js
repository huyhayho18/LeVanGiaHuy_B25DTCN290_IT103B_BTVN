const playerList = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];

function upper(names) {
    const uppercaseNames = names.map((name) => {
        return name.toUpperCase();
    });
    return uppercaseNames;
}

const upper = getUppercaseNames(playerList);
console.log(upper);
function analyzeSalary(minYears, teamPlayers) {
  const filteredPlayers = teamPlayers.filter(player => player.years >= minYears);
  if (filteredPlayers.length === 0) {
    return {
      totalSalary: 0,
      highestPaid: null,
      lowestPaid: null
    };
  }
  const totalSalary = filteredPlayers.reduce((sum, player) => sum + player.salary, 0);
  const highestPaid = filteredPlayers.reduce((max, player) => player.salary > max.salary ? player : max);
  const lowestPaid = filteredPlayers.reduce((min, player) => player.salary < min.salary ? player : min);
  return {
    totalSalary,highestPaid,lowestPaid
  };
}

const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 90 },
  { name: "Neymar", years: 12, salary: 80 },
  { name: "Mbappe", years: 7, salary: 70 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Kane", years: 10, salary: 90 }
];

console.log(analyzeSalary(10, players));
console.log(analyzeSalary(30, players));

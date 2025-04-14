export function play(player1: string, player2: string): number {
  console.log(player1, player2);
  if (player1 === player2) {
    return 0; // Tie
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return 1; // Player 1 wins
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "scissors" && player1 === "paper") ||
    (player2 === "paper" && player1 === "rock")
  ) {
    return 2; // Player 2 wins
  }
  else {
    throw new Error("unpossible choice");
  }
}

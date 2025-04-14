import { play } from "./rock-paper-scissors";

test("Player 1 has rock, Player 2 to has scissors, Player 1 win", () => {
    expect(play("rock","scissors")).toBe(1);
  });
test("Player 1 has rock, Player 2 to has paper, Player 2 win", () => {
    expect(play("rock","paper")).toBe(2);
  });
test("Player 1 has scissors, Player 2 to has scissors, its a tie", () => {
    expect(play("scissors","scissors")).toBe(0);
  });    
test("Player 2 has chosen a unpossible choice ",()=> {
    expect(() => play("rock","unpossible")).toThrow("unpossible choice")
    });

// MOCKING

//  this will import all exports of said file
import * as RPS from "./rock-paper-scissors.js"

console.log('log', RPS.getWinner)

test('calls RPS.getWinner', () => {
  RPS.getWinner
})

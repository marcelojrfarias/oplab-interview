function gameOfStones (n) {
  // 1 -> P1: 1 and loses -> 'Second'
  // 2 -> P1: 2 and wins -> 'First' 
  // 3 -> P1: 3 and wins -> 'First' 
  // 4 -> P1: 3, P2: 1 and loses -> 'First'
  // 5 -> P1: 5 and wins -> 'First' 
  // 6 -> P1: 5, P2: 1 and loses -> 'First' 
  // 7 -> P1: 2, P2: 5 and wins; P1: 3, P2: 3, P1: 1 and loses; P1: 5, P2: 2 and wins -> 'Second'
  // End of the cycle
  // 8 -> P1: 2, P2: 5, P1: 1 and loses; P1: 3, P2: 5 and wins; P1: 5, P2: 3 and wins -> 'Second'
  return n % 7 < 2 ? 'Second' : 'First'
}

module.exports = gameOfStones 
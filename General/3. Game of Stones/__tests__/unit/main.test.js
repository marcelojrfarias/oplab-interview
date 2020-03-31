const gameOfStones = require("../../src/main")

describe('Game of Stones', () => {
  
  it ('should return \'Second\' for the input \'1\'', () => {
    expect(gameOfStones(1)).toEqual('Second')
  })
  
  it ('should return \'First\' for the input \'2\'', () => {
    expect(gameOfStones(2)).toEqual('First')
  })
  
  it ('should return the right output for each sample input', () => {
    let input = [8, 1, 2, 3, 4, 5, 6, 7, 10]
    let response = ["Second", "Second", "First", "First", "First", "First", "First", "Second", "First"]
    input.forEach((value, index) => {
      expect(gameOfStones(value)).toEqual(response[index])
    })
  })

})
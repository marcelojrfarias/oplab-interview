const bubbleSort = require("../../src/main")

describe('Bubble Sort', () => {
  
  it ('should return an empty array', () => {
    expect(bubbleSort([])).toEqual([])
  })
  
  it ('should return an array with the largest element at the end', () => {
    expect(bubbleSort([9, 7, 5, 3, 1])).toHaveProperty('4', 9)
  })
  
  it ('should return an array entire ordered', () => {
    expect(bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9])
  })

})
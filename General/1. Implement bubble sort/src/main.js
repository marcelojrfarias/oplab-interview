module.exports = function bubbleSort (list) {

  list.map(() => {

    list.forEach((value, index) => {
      
      if (list[index] > list[index + 1]) {
        list[index] = list[index + 1]
        list[index + 1] = value
      }

    })

  })

  return list
}
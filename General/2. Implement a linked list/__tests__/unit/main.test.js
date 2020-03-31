const LinkedList = require("../../src/main")

describe('Linked List', () => {
  
  it ('should return an empty linked list', () => {
    let list = new LinkedList()
    expect(list.head).toEqual(null)
  })
  
  it ('should insert a value at the beginning of the linked list', () => {
    let list = new LinkedList()

    list.insertAtBeginning(1)
    let data = list.head.data
    expect(data).toEqual(1)
    
    list.insertAtBeginning(2)
    data = list.head.data
    expect(data).toEqual(2)
  })
  
  it ('should return the right length of the linked list', () => {
    let list = new LinkedList()
    let length = 10
    for (let data = 0; data < length; data++)
      list.insertAtBeginning(data)
    expect(list.length()).toEqual(length)
  })
  
  it ('should insert a value at the end of the linked list', () => {
    let list = new LinkedList()

    list.insertAtEnd(1)
    let data = list.head.data
    expect(data).toEqual(1)
    
    list.insertAtEnd(2)
    data = list.head.data
    expect(data).toEqual(1)

    list.insertAtEnd(3)
    data = list.head.data
    expect(data).toEqual(1)
  })
  
  it ('should return a value at an specific position in the linked list', () => {
    let list = new LinkedList()

    list.insertAtEnd(1)
    data = list.getAt(0).data
    expect(data).toEqual(1)

    list.insertAtBeginning(0)
    data = list.getAt(0).data
    expect(data).toEqual(0)

    list.insertAtEnd(2)
    data = list.getAt(2).data
    expect(data).toEqual(2)
  })
  
  it ('should insert a value of the element at an specific position in the linked list', () => {
    let list = new LinkedList()

    list.insertAtEnd(2)
    list.insertAtBeginning(1)
    list.insertAtEnd(4)

    list.insertAt(0, 0)
    list.insertAt(3, 3)
    list.insertAt(5, 5)


    let data = list.getAt(0).data
    expect(data).toEqual(0)

    data = list.getAt(1).data
    expect(data).toEqual(1)

    data = list.getAt(2).data
    expect(data).toEqual(2)

    data = list.getAt(3).data
    expect(data).toEqual(3)

    data = list.getAt(4).data
    expect(data).toEqual(4)

    data = list.getAt(5).data
    expect(data).toEqual(5)
  })
  

})
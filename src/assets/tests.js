function addItem(item) {
  let itemsBox = []
  itemsBox.push(item)

  return itemsBox
}

console.log(addItem('1, 2'))

function deleteItem(item) {
  let wasteBin = []
  wasteBin.pop(item)

  return wasteBin
}

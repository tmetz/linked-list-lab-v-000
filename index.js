
function getName(node) {
  return (node["name"]);
}

function headNode(linkedList, collection) {
  return (collection[linkedList]);
}

function next(node, collection) {
  let nextAddress = node["next"];
  return (collection[nextAddress]);
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if (index == 0) {
    return linkedList;
  }
  else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  else {
    let testNode = headNode(linkedList, collection);
    let i = 0;
    while (testNode != node){
      testNode = next(testNode, collection);
      i++;
    }
    return i - 1;
  }

}

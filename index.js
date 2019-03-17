
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
  if (node == collection[linkedList]) {
    return 0;
  }
  else {
    let testNode = node;
    let i = 1;
    while (testNode["next"]){
      testNode = next(testNode, collection);
      if (testNode == node) {
        return i;
      }
      else {
        i++;
      }
    }
  }

}

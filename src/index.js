const onDelete = () => {
  var element = document.getElementsByClassName("horizontal-alignment");
  element[0].remove();
  document.createElement();
};

const addElement = () => {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentTable = document.getElementById("table-1");
  document.body.insertBefore(newDiv, currentTable);
};

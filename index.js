// Write your code here!
// removing the main
main = document.getElementById("main");
console.log(main);

main.remove();

//create newHeader , a <h1> node
const newHeader = document.createElement("h1");
document.body.append(newHeader);

// add id victoy to newHeader
// newHeader.id = "victory";
newHeader.setAttribute("id", "victory");

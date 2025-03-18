// Write your code here!
// removing the main
main = document.getElementById("main");
console.log(main);

main.remove();

//create newHeader , a <h1> node
const newHeader = document.createElement("h1");

// add id victoy to newHeader
newHeader.id = "victory";
// newHeader.setAttribute("id", "victory");
console.log(newHeader.id + " is the id");

// add text
newHeader.innerHTML = "Mati-Joseph is the champion";

console.log(newHeader.innerHTML);
document.body.append(newHeader);

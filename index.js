let main = document.querySelector("#main");

main.remove();

let newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerText = " is the champion";

newHeader = document.body.appendChild(newHeader);

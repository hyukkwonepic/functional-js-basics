let name = "ProtoPie";

function greet() {
  const message = `Hello, ${name}`;
  console.log(message);
}

greet(); // Hello, ProtoPie

name = "Figma";

greet(); // Hello, Figma

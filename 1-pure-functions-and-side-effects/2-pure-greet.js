function greet(name) {
  const message = `Hello, ${name}`;
  return message;
}

const message1 = greet("ProtoPie");
const message2 = greet("Figma");
const message3 = greet("ProtoPie");

console.log(message1); // Hello, ProtoPie
console.log(message2); // Hello, Figma
console.log(message3); // Hello, ProtoPie

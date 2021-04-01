function greet(greeting, name) {
  const message = `${greeting}, ${name}`;
  return message;
}

const message1 = greet("Hello", "ProtoPie");
const message2 = greet("Hi", "ProtoPie");

console.log(message1); // Hello, ProtoPie
console.log(message2); // Hi, ProtoPie

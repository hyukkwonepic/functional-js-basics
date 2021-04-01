const iu = { name: "Ji-eun", birth: "1993-05-16" };

function renameIu(newName) {
  iu.name = newName;
  console.log("Renamed!");
}

renameIu("IU");
console.log(iu); // { name: 'IU', birth: '1993-05-16' }

const iu = { name: "Ji-eun", birth: "1993-05-16" };

function renameIu(oldIu, newName) {
  const newIu = {
    ...oldIu,
    name: newName,
  };
  return newIu;
}

const iu2 = renameIu(iu, "IU");

console.log(iu); // { name: 'Ji-eun', birth: '1993-05-16' }
console.log(iu2); // { name: 'IU', birth: '1993-05-16' }

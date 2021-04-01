function length(collection) {
  return collection.length;
}

function head(collection) {
  return collection[0];
}

function tail(collection) {
  return collection.slice(1);
}

function concat(collection, values) {
  return [...collection, ...values];
}

module.exports = {
  length,
  head,
  tail,
  concat,
};

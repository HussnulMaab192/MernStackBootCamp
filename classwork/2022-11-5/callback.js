function five(p) {
  return p ? p(5) : 5;
}
function two(p) {
  return p ? p(2) : 2;
}
function times(p2) {
  return (p) => {
    return p * p2;
  };
}

function add(p2) {
  return (p) => {
    return p + p2;
  };
}

console.log(
  "🚀 ~ file: call_back_functions.js ~ line 13 ~ cons",
  five(add(two()))
);
console.log(
  "🚀 ~ file: call_back_functions.js ~ line 13 ~ cons",
  five(times(two()))
);

console.log("🚀 ~ file: callback.js ~ line 29 ~ cons", z);

//


console.log("🚀 ~ file: callback.js ~ line 32 ~ cons", a)
const a =23;
console.log("Javascript variale ")
function getName() {
  console.log("method!", getName());
};

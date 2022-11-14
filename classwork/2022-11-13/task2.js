const users = [
  { firstname: "Mark", lastname: "Zukerberg", age: 38 },
  { firstname: "Donald", lastname: "Trump", age: 75 },
  { firstname: "Elon", lastname: "Musk", age: 50 },
  { firstname: "Charles", lastname: "Theoaran", age: 47 },
  { firstname: "Top", lastname: "Hardy", age: 75 },
];

const count = {};

users.forEach((element) => {
  count[element.age] = (count[element.age] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);

// ******task 1 ////
const users = [
  { firstname: "Mark", lastname: "Zukerberg", age: 38 },
  { firstname: "Donald", lastname: "Trump", age: 75 },
  { firstname: "Elon", lastname: "Musk", age: 50 },
  { firstname: "Charles", lastname: "Theoaran", age: 47 },
  { firstname: "Top", lastname: "Hardy", age: 75 },
];

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(
  "🚀 ~ file: tasks.js ~ line 12 ~ getFullName ~ getFullName",
  users.map(getFullName)
);



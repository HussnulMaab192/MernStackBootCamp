const users = [
  { firstname: "Mark", lastname: "Zukerberg", age: 38 },
  { firstname: "Donald", lastname: "Trump", age: 75 },
  { firstname: "Elon", lastname: "Musk", age: 50 },
  { firstname: "Charles", lastname: "Theoaran", age: 47 },
  { firstname: "Top", lastname: "Hardy", age: 75 },
];

let filtered_array = users.filter((a) => a.age < 50);

// filtered_array.forEach(function (element) {
//   console.log(element);
// });
console.log("🚀 ~ file: task3.js ~ line 16 ~ filtered_array", filtered_array);

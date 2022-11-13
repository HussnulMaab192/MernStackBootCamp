const obj = {
  name: "ali",
  uni: "abc",
  percentageCgpa: (numbers, fullMarks) => {
    return (numbers / fullMarks) * 100;
  },
};

console.log("🚀 ~ file: objects.js ~ line 11 ~ perc", obj.percentageCgpa(76, 100) + " %");
console.log("🚀 ~ file: objects.js ~ line 11 ~ perc", obj.name);
console.log("🚀 ~ file: objects.js ~ line 11 ~ perc", obj.uni);

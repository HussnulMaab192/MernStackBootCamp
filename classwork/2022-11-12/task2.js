const arr = [35, 37, 33, 38, [39, 34, 39, 38, 31], [1, 2, 34, 44]];
function getUniqueGreatestNumber(arr, bound = 100) {

    arr=[]
  const map = Array(bound).fill(0);
  for (let i = 0; i < arr.length; i++) {
    
    const num = arr[i];
    map[num - 1]++;
  }
  for (let j = bound - 1; j >= 0; j--) {
    const frequency = map[j];
    if (frequency === 1) {
      return j + 1;
    }
  }
  return -1;
}
console.log(getUniqueGreatestNumber(arr));

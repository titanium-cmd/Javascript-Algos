//The array being considered in the problem.
const arr = [-5, 2, 10, 4, 6];
// if t is 10 ==> should return 2
// if t is 6 ==> should return 4
// if t is 20 ==> should return -1

const getIndexOf = ({ array, target }) => {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === target) return i;
    }
    return -1;
  }
}

const indexOf10 = getIndexOf({ array: arr, target: 10 });
console.log(`Index of 10 is ${indexOf10}`);

const indexOf6 = getIndexOf({ array: arr, target: 6 });
console.log(`Index of 6 is ${indexOf6}`);

const indexOf20 = getIndexOf({ array: arr, target: 20 });
console.log(`Index of 20 is ${indexOf20}`);


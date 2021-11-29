function findFirstDuplicate(arr) {
  if (!arr.length || arr.length === 1) {
    return -1
  }

  const temp = []
  let indexFocus = 0
  while (!temp.includes(arr[indexFocus])) {
    temp.push(arr[indexFocus])
    indexFocus ++
  }
  return indexFocus < arr.length ? arr[indexFocus] : -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

// create temporary array
// push numbers from original array into temp array
// until temp array contains current number
// if current number index < original array length
// return last number of temp array
// else 
// return -1

// And a written explanation of your solution

// This function will cycle through the original array until a duplicate number is found.
// If no duplicate is found, the function will return -1, otherwise it will return the number of current focus.
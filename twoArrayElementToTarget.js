function find(arr, target) {
  let len = arr.length;

  for (let fi = 0; fi < len - 1; fi++) {
    let fNumber = arr[fi];
    for (let si = fi + 1; si < len; si++) {
      let sNumber = arr[si];
      if (fNumber + sNumber === target) {
        return [fNumber, sNumber];
      }
    }
  }
}

console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 45], 57));

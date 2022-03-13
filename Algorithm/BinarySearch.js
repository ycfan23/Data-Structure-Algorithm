function BinarySearch (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left+right) / 2);

  while (left <= right) {
    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
    mid = Math.floor((left+right) / 2)
  }
  return -1;
}

console.log(BinarySearch([1,10,15,24,50], 34))

//pick the first number as the pivot
//count how many numbers are smaller than the pivot then
//move all the number smaller to the left and bigger numbers to the right

//helper function to find the index of the pivot
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start; //the index of the pivot at the correct place

  function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
  }

  for (let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr,start,swapIndex)
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //sort left
    quickSort(arr, left, pivotIndex-1)
    //sort right
    quickSort(arr, pivotIndex+1, right)
  }
  return arr
}

console.log(quickSort([3,1,5,2,6,10]))
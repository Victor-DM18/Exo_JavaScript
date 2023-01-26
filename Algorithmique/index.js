const array = [3443, 543, 9, 18, 8, 89, 512, 28, 10, 711, 2, 23, 90, 11];

// tri à bulle
console.log("-------------------------------------");
console.log(`array = ${array}`);
const triArray = () => {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};
triArray(array);

console.log(`Àprés tri-à-bulle = ${array}`);

//Methode sot()
console.log("------------------------------------");

const array2 = [3443, 543, 9, 18, 8, 89, 512, 28, 10, 711, 2, 23, 90, 11];

array2.sort((a, b) => a - b);
console.log(`Àpré methode sort() = ${array2}`);

// tri by minim
console.log("------------------------------------");

const array3 = [3443, 543, 9, 18, 8, 89, 512, 28, 10, 711, 2, 23, 90, 11];

const arraySort = () => {
  for (i = 0; i < array3.length - 1; i++) {
    let minimValue = i;

    for (j = i + 1; j < array3.length; j++) {
      if (array3[j] < array3[minimValue]) {
        minimValue = j;
      }
    }
    [array3[i], array3[minimValue]] = [array3[minimValue], array3[i]];
  }
};

arraySort(array3);

console.log(`Àprés tri par minimum = ${array3}`);

//quick sort

console.log("------------------------------------");

const array4 = [3443, 543, 9, 18, 8, 89, 512, 28, 10, 711, 2, 23, 90, 11];

const quickSort = (ar) => {
  if (ar.length === 1) {
    return ar;
  }

  const pivot = ar[ar.length - 1];
  let arrayRight = [];
  let arrayLeft = [];

  for (i = 0; i < ar.length - 1; i++) {
    ar[i] > pivot ? arrayRight.push(ar[i]) : arrayLeft.push(ar[i]);
  }

  if (arrayLeft.length > 0 && arrayRight.length > 0) {
    return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
  } else if (arrayLeft.length > 0) {
    return [...quickSort(arrayLeft), pivot];
  } else {
    return [pivot, ...quickSort(arrayRight)];
  }
};

console.log(`Àprés quickDort = ${quickSort(array4)}`);

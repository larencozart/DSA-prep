function populationCount(num) {
  for (let i = num; i >= 0; i -= 1) {
    console.log(i);
  }
}


function populationCount2(num) {
  console.log(num);

  if (num === 0) return;

  populationCount(num - 1);
}

// populationCount2(5);

function factorial(n) {
  if (n === 1) return 1; // Base case: factorial of 1 is 1

  return n * factorial(n - 1); // Recursive case
}


console.log(factorial(3));
/*
callstack

factorial(1) => 1
factorial(2) => 2 * 1 => 2
factorial(3) => 3 * 2 => 6
*/


function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i.toString() + " strange loop.")
    } else {
      array.push("I am " + i.toString() + " strange loops.")
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    console.log(array.pop)
  } while (array.length > 0 && maybeTrue())

  return array
}
//loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:

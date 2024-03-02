snail = function (array) {
  array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  //[1, 2, 3, 6, 9, 8, 7, 4, 5]

  //hard part is that we might have extra turns
  //how do we make it dynamic and check if there is more numbers?
  //1stdown
  // let down = array[1][array[1].length - 1];
  // find a pattern that we can repeat dyanamically
  //let arr = array[0].concat(down, 99);
  //   console.log(arr);

  // the 1st line will always be
  //array[0]

  // second line is array[*1, 2, 3 , etc?][array.length - 1] ---
  //array.map(inner => inner[inner.length - 1]).slice(1, 0);

  // third line is the last array backwards not including the first one,
  //array[array.length - 1].slice(1, 0).reverse()

  // fourth is back up, not including first or last
  //array.map(inner => inner[0]).slice(1, -1)

  //cycles again on
  //array[1].slice(1, -1)

  //down with
  //array.map(inner => inner[inner.length - 2]).slice(2, -1)

  // back with
  //array[array.length - 2].slice(2, -1).reverse()

  // up with
  //array.map(inner => inner[1]).slice(2, -2)

  //cycles again on
  //array[2].slice(2, -2)

  //   let down = [];
  //   if (array.length > 1 && array[1].length > 0) {
  //     down = array.map((inner) => inner[inner.length - 1]).slice(1);
  //   }

  //   let arr = array[0].concat(down);

  //   console.log(arr);

  //   return arr;

  let result = [];
  while (array.length > 0) {
    // Add the first row to result
    result = result.concat(array.shift());

    // Add the last element of each remaining row
    for (let i = 0; i < array.length - 1; i++) {
      result.push(array[i].pop());
    }

    // Add the last row in reverse order
    if (array.length) {
      result = result.concat(array.pop().reverse());
    }

    // Add the first element of each remaining row, in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};

snail();

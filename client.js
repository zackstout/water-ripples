
let width;
let height;
let current;
let previous;
let res;

function setup() {
  width = 300;
  height = 300;
  current = [];
  previous = [];
  res = 1; // higher number will actually correspond to lower resolution.

  // Here, 'n' refers to the res:
  // if res is 2, we have 150-array of 300s; if it's 3, we have 100-array(i.e. width/n) of 200s (i.e. width/(n/2)); if it's 1, we have 300-array of 600s
  // we Want current to be a 300-array of 300s, always (???). No, we want a (width/n)-array of width/n's.

  createCanvas(width, height);
  // background(225);

  let temp = [];

  // Ok it's very slow when using this double loop. Is there a better way?
  // Lowering the resolution helps a lot, and barely affects visuals at all.
  for (let i=0; i < width; i += res) {
    for (let j=0; j < height; j += res ) { // adding the *2 here seems to fix it.....But it's quite strange. Quite strange.
    // Yeah, adding the *2 messes up the background gradient....
      // so if w and h are 300, we want 900 to map to 255. Use stretch function.
      // const color1 = stretch(i * j);
      // fill(color1);
      // noStroke();
      // rect(i, j, res, res);

      temp.push(250);
    }
    current.push(temp);
    previous.push(temp);
    temp = [];
  }
  // console.log(current, previous);

} // end setup


function draw() {
  // for (let k=0; k < 10; k ++) {
    for (let i=1; i < current.length - 1; i += 1) {
      for (let j=1; j < current.length - 1; j += 1) { // will have to change this to accomodate cases where width and height are different.
        // let xRes = parseInt(i / res);
        // let yRes = parseInt(j / res);

        // Ok, so each cell will remain constant so long as its neighbors and it are all the same value.
        current[i][j] = (
          previous[i-1][j] +
          previous[i+1][j] +
          previous[i][j-1] +
          previous[i][j+1]
        ) / 2 - current[i][j];
        // console.log(current[i][j]);
        const color1 = stretch(current[i][j]);
        // const color1 = current[i][j];
        fill(color1);
        noStroke();
        rect(i * res, j * res, res, res);
      }
    }
    // pretty sure this is right:
    let temp = previous;
    previous = current;
    current = temp;

  // }

}




function mousePressed() {
  // console.log(mouseX, mouseY, current);
  previous[parseInt(mouseX)][parseInt(mouseY)] = 0;
  console.log(mouseX);


  // for (let i=1; i < current.length - 1; i += 1) {
  //   for (let j=1; j < current.length - 1; j += 1) { // will have to change this to accomodate cases where width and height are different.
  //     // let xRes = parseInt(i / res);
  //     // let yRes = parseInt(j / res);
  //     current[i][j] = (
  //       previous[i-1][j] +
  //       previous[i+1][j] +
  //       previous[i][j-1] +
  //       previous[i][j+1]
  //     ) / 2 - current[i][j];
  //     console.log(current[i][j]);
  //     const color1 = stretch(current[i][j]);
  //     fill(color1);
  //     noStroke();
  //     rect(i * res, j * res, res, res);
  //   }
  // }
}

function stretch(x) {
  // return x * 255 / (width * height);
  return x * 255 / 510; // 510 is the max value one can get with our algorithm
}

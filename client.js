
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
  res = 2; // higher number will actually correspond to lower resolution.

  // Here, 'n' refers to the res:
  // if res is 2, we have 150-array of 300s; if it's 3, we have 100-array(i.e. width/n) of 200s (i.e. width/(n/2)); if it's 1, we have 300-array of 600s
  // we Want current to be a 300-array of 300s, always (???). No, we want a (width/n)-array of width/n's.

  createCanvas(width, height);
  background(225);

  let temp = [];

  // Ok it's very slow when using this double loop. Is there a better way?
  // Lowering the resolution helps a lot, and barely affects visuals at all.
  for (let i=0; i < width; i += res) {
    for (let j=0; j < height; j += res * 2) { // adding the *2 here seems to fix it.....But it's quite strange. Quite strange.
      // so if w and h are 300, we want 900 to map to 255. Use stretch function.
      // const color1 = stretch(i * j);
      // fill(color1);
      // noStroke();
      // rect(i, j, res, res);

      temp.push(i, j);
    }
    current.push(temp);
    previous.push(temp);
    temp = [];
  }
  console.log(current, previous);

} // end setup


function draw() {
  // for (let i=1; i < width - 1; i += res) {
  //   for (let j=1; j < height - 1; j += res) {
  //     let xRes = parseInt(i / res);
  //     let yRes = parseInt(j / res);
  //     current[xRes][yRes] = (
  //       previous[xRes-1][yRes] +
  //       previous[xRes+1][yRes] +
  //       previous[xRes][yRes-1] +
  //       previous[xRes][yRes+1]
  //     ) / 2 - current[xRes][yRes];
  //     const color1 = stretch(current[xRes][yRes]);
  //     fill(color1);
  //     noStroke();
  //     rect(i, j, res, res);
  //   }
  // }
}




function mousePressed() {
  console.log(mouseX, mouseY);

}

function stretch(x) {
  return x * 255 / (width * height);
}

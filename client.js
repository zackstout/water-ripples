
const width = 300;
const height = 300;
let current = [];
let previous = [];

function setup() {
  createCanvas(width, height);
  background(225);
  for (let i=0; i < width; i++) {
    for (let j=0; j < height; j++) {
      // so if w and h are 300, we want 900 to map to 255.
      const color1 = stretch(i * j);
      // console.log(color1);
      fill(color1);
      noStroke();
      rect(i, j, 1, 1);
    }
  }


}

function stretch(x) {
  return x * 255 / (width * height);
}

function draw() {

}

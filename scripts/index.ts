
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

let rawMap: number[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 8, 2, 2, 2, 2],
  [2, 4, 2, 5, 1, 2, 4, 2, 2, 2, 2],
  [2, 6, 4, 1, 1, 2, 1, 2, 2, 2, 2],
  [2, 4, 1, 1, 1, 7, 0, 0, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
// let rawMap: number[][] = [
//   [2, 2, 2, 2, 2, 2, 2, 2],
//   [2, 0, 4, 5, 6, 5, 2, 2],
//   [2, 1, 1, 1, 1, 1, 2, 2],
//   [2, 0, 0, 0, 4, 3, 0, 2],
//   [2, 2, 7, 2, 2, 0, 0, 2],
//   [2, 2, 2, 2, 2, 2, 2, 2]
// ];

let player: Player = new Player(1, 1);

let map: Map = new Map(rawMap);

function update() {
  handleInputs();
  map.update();
}

function handleInputs() {
  while (inputs.length > 0) {
    let input = inputs.pop();
    input.handle();
  }
}

function draw() {
  let g = createGraphics();
  map.draw(g);
  player.draw(g);
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  gameLoop();
}


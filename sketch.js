let grid;
let sx = 10;
let sy = 10;
let img;
let gamestarted = false;
let snd;

function preload() {
	img = loadImage("medo.jpg");
	snd = loadSound('Grito assustador.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	grid = new Array(sy).fill(0).map(x => new Array(sx).fill(false));
	
	grid[0][1] = true;
	grid[0][2] = true;
	grid[1][2] = true;
	grid[2][2] = true;
	grid[3][2] = true;
	grid[3][3] = true;
	grid[3][4] = true;
	grid[3][5] = true;
	grid[3][6] = true;
	grid[4][6] = true;
	grid[5][6] = true;
	grid[6][6] = true;
	grid[7][6] = true;
	grid[7][7] = true;
	grid[7][8] = true;
	grid[7][9] = true;
	grid[8][9] = true;
	

	

}

function draw() {
	// background(255, 0, 0);
	noStroke();
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (i === 0 && j === 0) {
				fill(0, 255, 0);
			} else if (i === sy - 1 && j === sx - 1) {
				fill(255, 0, 0);
			} else if (grid[i][j] === true) {
				fill(255);
			} else {
				fill(0);
			}
			rect(j * width / sx, i * height / sy, width / sx, height / sy);
		}
	}
	if (!gamestarted) {
		fill(0, 255, 0);
		noStroke();
		textAlign(CENTER);
		text("Clique no vermelho para começar", width / 2, height / 2);
	} else {
		let pos = getSquare();
		if (!((pos[0] === 0 && pos[1] === 0) || (pos[0] === sy - 1 && pos[1] === sx - 1))) {
			if (grid[pos[0]][pos[1]] === false) {
				noLoop();
				noStroke();
				fill(255, 0, 0);
				ellipse(width / 2, height / 2, 20, 20);
				image(img, 0, 0 ,width, height);
				snd.play();
			}
		}
	}
	
}

function getSquare() {
	let i = floor(mouseY / (height / sy));
	let j = floor(mouseX / (width / sx));
	return [i, j];
}


function mousePressed() {
	if (!gamestarted) {
		let pos = getSquare();
		if (pos[0] === sy - 1 && pos[1] === sx - 1) {
			gamestarted = true;
		}
	}
}
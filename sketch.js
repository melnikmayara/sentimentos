function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  fill ("pink");
  textSize(60);
  textAlign(CENTER,CENTER);
  textFont('fontBold');
  
  let maximo = width;
  let minimo =0;
  
  console.log("Sentimentos".length);
  let palavra="Sentimentos";
  let quantidade= map(mouseX, 0, width, 1, palavra.length)
  let parcial= palavra.substring (0,quantidade);
  text(parcial,200,200)
}
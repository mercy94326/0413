let colors = [
  { name: "Red", value: [255, 0, 0] },
  { name: "Green", value: [0, 255, 0] },
  { name: "Blue", value: [0, 0, 255] },
  { name: "Yellow", value: [255, 255, 0] },
  { name: "Cyan", value: [0, 255, 255] },
  { name: "Magenta", value: [255, 0, 255] },
];

let currentColor;
let options = [];
let score = 0;
let totalQuestions = 5; // 總題數
let currentQuestion = 0; // 當前題號
let correctAnswers = 0; // 答對題數
let wrongAnswers = 0; // 答錯題數
let quizOver = false; // 測驗是否結束

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(20);
  generateQuestion();
}

function draw() {
  if (quizOver) {
    background(255);
    fill(0);
    text("Quiz Over!", width / 2, height / 4);
    text(`Correct: ${correctAnswers}`, width / 2, height / 2 - 20);
    text(`Wrong: ${wrongAnswers}`, width / 2, height / 2 + 20);
    text("Refresh to try again!", width / 2, height - 50);
    return;
  }

  background(currentColor.value);

  fill(0);
  text("What is this color?", width / 2, height / 4);

  // 計算按鈕的起始位置，使其在畫布中央垂直排列
  let buttonStartY = height / 2 - (options.length * 50) / 2;

  for (let i = 0; i < options.length; i++) {
    fill(255);
    rect(width / 2 - 100, buttonStartY + i * 50, 200, 40); // 按鈕在畫布正中間
    fill(0);
    text(options[i].name, width / 2, buttonStartY + i * 50 + 20);
  }

  fill(0);
  text(`Score: ${score}`, width / 2, height - 50);
  text(`Question: ${currentQuestion + 1} / ${totalQuestions}`, width / 2, height - 80);
}

function mousePressed() {
  if (quizOver) return;

  let buttonStartY = height / 2 - (options.length * 50) / 2;

  for (let i = 0; i < options.length; i++) {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > buttonStartY + i * 50 &&
      mouseY < buttonStartY + i * 50 + 40
    ) {
      if (options[i].name === currentColor.name) {
        score++;
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
      currentQuestion++;
      if (currentQuestion >= totalQuestions) {
        quizOver = true;
      } else {
        generateQuestion();
      }
    }
  }
}

function generateQuestion() {
  currentColor = random(colors);
  options = shuffle(colors).slice(0, 3);
  if (!options.includes(currentColor)) {
    options[int(random(3))] = currentColor;
  }
}

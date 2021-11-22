const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Vertices = Matter.Vertices;

let ground;
let boxes = [];
let world;
let engine;
let rock;
let shapes = [];
let currentShape = [];
let hasReleased = true;
let forChecking = [];
let hasGameOvered = false;
let score;
let scaleDone = 0;
let popupShown = false;
let scorePlus, hscorePlus, gameoverLose, gameoverWin
let gethscore
let hasHighScorePlayed = false
let hasGameoverPlayed = false


function preload(){
  scorePlus = loadSound("assets/point.wav")
  hscorePlus = loadSound("assets/hpoint.wav")
  gameoverLose = loadSound("assets/gameoverMP3.mp3")
  gameoverWin = loadSound("assets/cheers.wav")
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Boundary(475, height - 50, width - 950, 30);
  border = new Boundary(0, height + 5, width, 30);
  objShape = new Shape();
  shapes.push(objShape);
  currentShape.push(objShape);
  forChecking.push(objShape);
  score = 0;

  scoreBar = createElement("h2");
  scoreBar.position(width - 500, 3);
  scoreBar.class("score_container");
  
  highScoreBar = createElement("h2");
  highScoreBar.position(width - 280, 5);
  highScoreBar.class("hscore_container");

  infoButton = createButton("");
  infoButton.class("infoButton");
  infoButton.position(100, 25);

  restartButton = createButton("");
  restartButton.class("restartButton");
  restartButton.position(200, 25);
  
  resetHS = createButton("");
  resetHS.class("resetHS")
  resetHS.position(80, 100);

}

function draw() {
  background(29, 30, 36);
  Engine.update(engine);
  ground.show();
  border.show();
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].show();
    let shapeBorderCollision = Matter.SAT.collides(shapes[i].body, border.body);
    if (
      shapes[i].body["position"]["y"] >= 245 &&
      shapeBorderCollision.collided
    ) {
      gameover();
    }
    gethscore=localStorage.getItem("hscore")
    if (gethscore===null){
      localStorage.setItem("hscore","0")
    }
  
    highScoreBar.html(`High Score = ${gethscore}`)
 
  }

  if (currentShape.length != 0) {
    if (hasReleased === true) {
      Matter.Body.rotate(currentShape[0].body, 0.05);
    } else if (hasReleased === false) {
      Matter.Body.setPosition(currentShape[0].body, {
        x: mouseX,
        y: height / 2 - 200,
      });
    }
  }
  // 240 575
  if (forChecking[0].body["position"]["y"] > 240) {
    forChecking = [];
    score += 1;
    if (score>gethscore){
      if (hasHighScorePlayed===false){
        hscorePlus.play()
        hasHighScorePlayed=true
      }
    }

      scorePlus.play()
    createShape();
  }

  restartButton.mousePressed(() => {
    window.location.reload();
  });
  
  resetHS.mousePressed(() => {
    localStorage.setItem("hscore","0")
    location.reload();
  });
  scoreBar.html(`Score =  ${score}`);
  gethscore=localStorage.getItem("hscore")
  if (gethscore===null){
    localStorage.setItem("hscore","0")
  }

  highScoreBar.html(`High Score = ${gethscore}`)
}

function mousePressed() {
  if (mouseY < 100 && mouseX < 300) {
    infoButton.mousePressed(() => {
      popupShown = true;
      howToPlay();
    });
  } else if (hasGameOvered === false && mouseY > 100) {
    hasReleased = false;
  } else if (hasGameOvered === true) {
    if (int(score)>int(localStorage.getItem("hscore"))){
    localStorage.setItem("hscore",str(score))
    }
    location.reload();
  }
}

function mouseReleased() {
  if (popupShown === false) {
    Matter.Body.setStatic(currentShape[0].body, false);
    currentShape.pop();
    hasReleased = true;
  } else  {
    popupShown = false;
    // break
  }
}

function createShape() {
  objShape = new Shape();
  shapes.push(objShape);
  currentShape.push(objShape);
  forChecking.push(objShape);
}

function gameover() {
  if (hasGameoverPlayed===false){
  hasGameOvered = true;
  hasGameoverPlayed=true
  if (int(score)>int(localStorage.getItem("hscore"))){
    swal({
      title: `Game Over
      But You crossed your HIGH SCORE`,
      text: `Oops Your block fell down....!!
      Your Score is ${score}`,
      imageUrl:
        "assets/good_job.jpg",
      imageSize: "100x100",
      buttons: {
        catch: {
          text: "Thanks For Playing !!",
          value: "reload",
        },
      },
    });
    gameoverWin.play()
  }
  else if (int(score)<int(localStorage.getItem("hscore"))){
  swal({
    title: `Game Over`,
    text: `Oops Your block fell down....!!
    Your Score is ${score}`,
    imageUrl:
      "assets/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    buttons: {
      catch: {
        text: "Thanks For Playing !!",
        value: "reload",
      },
    },
  });
  gameoverLose.play()
}
}
}

function howToPlay() {
  swal({
    title: `Creator-Prem Swarup Sahoo
    -------------------------------------
    How To Play`,
    text: `-> Hold the mouse and take it to left or right to move your cursor
    -> Don't let block fall down of the ground.
    -> Your score will increase as you leave blocks`,
    imageUrl: "assets/creator-PremSahoo.jpg",
    imageSize: "100x100",
    confirmButtonText: "Ok",
  });
}

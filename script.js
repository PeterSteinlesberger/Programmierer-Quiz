let generalQuestions = [
  {
    question:
      "What do you call the text in which computer programs are written?",
    answer_1: "cipher code",
    answer_2: "Execution code",
    answer_3: "Function code",
    answer_4: "Source code",
    right_answer: 4,
  },
  {
    question: "Which programming language do you write like a recipe?",
    answer_1: "Chef",
    answer_2: "Gourmet",
    answer_3: "Dessert",
    answer_4: "Cake",
    right_answer: 1,
  },
  {
    question: "What is the youngest programing language?",
    answer_1: "Swift",
    answer_2: "AppleScript",
    answer_3: "Java",
    answer_4: "Amiga E",
    right_answer: 1,
  },
  {
    question: "When was the beginning of Javascript?",
    answer_1: "1982",
    answer_2: "2002",
    answer_3: "1995",
    answer_4: "1964",
    right_answer: 3,
  },
  {
    question: "What is not a programing Language?",
    answer_1: "PHP",
    answer_2: "Zoom 4",
    answer_3: "C++",
    answer_4: "Pascal",
    right_answer: 2,
  }
];

let htmlQuestions = [
  {
    question: "What does the abbreviation HTML stand for?",
    answer_1: "Hypertext Message Language",
    answer_2: "Hypertext Meta Language",
    answer_3: "Hypertext Markup Language",
    answer_4: "Hypertext Model Language",
    right_answer: 3,
  },
  {
    question: "Choose the correct HTML TAG for the biggest headline:",
    answer_1: "<heading>",
    answer_2: "<h6>",
    answer_3: "<h1>",
    answer_4: "<head>",
    right_answer: 3,
  },
  {
    question: "What is the correct TAG for a?",
    answer_1: "<break>",
    answer_2: "<br/>",
    answer_3: "<lb/>",
    answer_4: "<enter>",
    right_answer: 2,
  },
  {
    question: "Was ist der korrekte HTML Tag um einen Text dicker zu machen?",
    answer_1: "<b>",
    answer_2: "<bold>",
    answer_3: "<size>",
    answer_4: "<big>",
    right_answer: 1,
  },
  {
    question: "Which one is the latest version of HTML?",
    answer_1: "HTML 3.2",
    answer_2: "HTML 4.01",
    answer_3: "HMTL 4.2",
    answer_4: "HTML 5.2",
    right_answer: 4,
  }];

let cssQuestions = [];
let jsQuestions = [];
let thisArea = 1;
let questionArea = 0;
let thisQuestion = [];
let rightAnswerCounter = 0;
let questionCounter = 0;
let questionIndex = 0;

function startGame() {           // switch the screen from landing-page to question-page
  document.getElementById("landingPage").classList.add("d-none");
  document.getElementById("questionsPage").classList.remove("d-none");
  showQuestion();
}

function showQuestion() {        // show question and answers
 markCurrentTheme();

 if( questionIndex < questionArea.length) {
    thisQuestion = questionArea[questionIndex];
    document.getElementById("question").innerHTML = thisQuestion['question'];
    document.getElementById("answer_1").innerHTML = thisQuestion['answer_1'];
    document.getElementById("answer_2").innerHTML = thisQuestion['answer_2'];
    document.getElementById("answer_3").innerHTML = thisQuestion['answer_3'];
    document.getElementById("answer_4").innerHTML = thisQuestion['answer_4'];
    questionIndex++;
 } else {
  questionIndex = 0;
  thisArea++;
 }
}

function markCurrentTheme() {       // markup the actual area and switch to next questions-area
  if (thisArea == 0) {
    questionArea = generalQuestions;
    document.getElementById('category_1').classList.add('actual-category');
  } else if (thisArea == 1) {
    questionArea = htmlQuestions;
    document.getElementById('category_1').classList.remove('actual-category');
    document.getElementById('category_2').classList.add('actual-category');
  } else if (thisArea == 2) {
    questionArea = cssQuestions;
    document.getElementById('category_2').classList.remove('actual-category');
    document.getElementById('category_3').classList.add('actual-category');
  } else {
    questionArea = jsQuestions;
    document.getElementById('category_3').classList.remove('actual-category');
    document.getElementById('category_4').classList.add('actual-category');
  }
}


function clickAnswer(selection) {       // add colors to the clicked button
    let i = selection.slice(-1)
    if( i == thisQuestion['right_answer']) {
        document.getElementById(`answerButton${i}`).classList.add("right-answer-button");
        document.getElementById(`letter_${i}`).classList.add("right-answer-box");
        rightAnswerCounter++;
    } else {
        document.getElementById(`answerButton${i}`).classList.add("wrong-answer-button");
        document.getElementById(`letter_${i}`).classList.add("wrong-answer-box");
    }
    questionCounter++;
    showQuestion();
  }

   
   

   




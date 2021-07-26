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
    question: "What is the correct TAG for a new line?",
    answer_1: "<break>",
    answer_2: "<br>",
    answer_3: "<lb/>",
    answer_4: "<enter>",
    right_answer: 2,
  },
  {
    question: "What is the correct HTML tag to make a text thicker?",
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

let cssQuestions = [ {
  question: "Which of the following property is used to align the text of a document?",
  answer_1: "text-indent",
  answer_2: "text-align",
  answer_3: "text-decoration",
  answer_4: "text-transform",
  right_answer: 2,
},
{
  question: "Which of the following property of a anchor element signifies visited hyperlinks?",
  answer_1: ":link",
  answer_2: ":visited",
  answer_3: ":hover",
  answer_4: ":active",
  right_answer: 2,
},
{
  question: "Which of the following property serves as shorthand for the padding properties?",
  answer_1: "padding",
  answer_2: "padding-top",
  answer_3: "padding-left",
  answer_4: "padding-right",
  right_answer: 1,
},
{
  question: "Which of the following defines a measurement in points?",
  answer_1: "mm",
  answer_2: "px",
  answer_3: "pc",
  answer_4: "pt",
  right_answer: 4,
},
{
  question: "Which of the following selector matches a element based on its class attribute?",
  answer_1: "The Type Selector",
  answer_2: "The Universal Selector",
  answer_3: "The Descendant Selector",
  answer_4: "The Class Selector",
  right_answer: 4,
}];


let jsQuestions = [];



let thisArea = 0;
let questionArea = 0;
let thisQuestion = [];
let rightAnswerCounter = 0;
let questionCounter = 0;
let questionIndex = 0;
let i = 0;


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
      console.log(questionIndex);
 } else {
  questionIndex = 0;
  thisArea++;
  showQuestion();
  console.log(questionIndex);
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
    i = selection.slice(-1)
    if( i == thisQuestion['right_answer']) {
        document.getElementById(`answerButton${i}`).classList.add("right-answer-button");
        document.getElementById(`letter_${i}`).classList.add("right-answer-box");
        rightAnswerCounter++;
    } else {
        document.getElementById(`answerButton${i}`).classList.add("wrong-answer-button");
        document.getElementById(`letter_${i}`).classList.add("wrong-answer-box");
    }
    questionCounter++;
    setTimeout(clearButtonColor, 1000);
    
  }

function  clearButtonColor() { 
  document.getElementById(`answerButton${i}`).classList.remove("right-answer-button");
  document.getElementById(`letter_${i}`).classList.remove("right-answer-box");
  document.getElementById(`answerButton${i}`).classList.remove("wrong-answer-button");
  document.getElementById(`letter_${i}`).classList.remove("wrong-answer-box");
  setTimeout(showQuestion, 1000);
}
   
   

   




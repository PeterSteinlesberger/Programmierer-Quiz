let generalQuestions = [
  {
    question:
      "Wie nennt man den Text in dem Computerprogramme geschrieben werden?",
    answer_1: "Geheimtext",
    answer_2: "Ausführungstext",
    answer_3: "Funktionstext",
    answer_4: "Quelltext",
    right_answer: 4,
  },
  {
    question: "Welche Programmiersprache schreibt man wie ein Kochrezept?",
    answer_1: "Chef",
    answer_2: "Gourmet",
    answer_3: "Dessert",
    answer_4: "Cake",
    right_answer: 1,
  },
  {
    question: "Was ist die jüngste Programmiersprache?",
    answer_1: "Swift",
    answer_2: "AppleScript",
    answer_3: "Java",
    answer_4: "Amiga E",
    right_answer: 1,
  },
  {
    question: "Wann wurde die Programmiersprache JavaScript eingeführt?",
    answer_1: "1982",
    answer_2: "2002",
    answer_3: "1995",
    answer_4: "1964",
    right_answer: 3,
  },
  {
    question: "Was ist keine Programmiersprache?",
    answer_1: "PHP",
    answer_2: "Zoom 4",
    answer_3: "C++",
    answer_4: "Pascal",
    right_answer: 2,
  },
  {
    question: "Was ist kein Content Management System (CMS)?",
    answer_1: "cURL",
    answer_2: "Joomla",
    answer_3: "WordPress",
    answer_4: "Typo3",
    right_answer: 1,
  },
  {
    question:
      "An welcher Sprache orientieren sich die meisten Programmiersprachen?",
    answer_1: "Deutsch",
    answer_2: "Englisch",
    answer_3: "Spanisch",
    answer_4: "Französisch",
    right_answer: 2,
  },
  {
    question: "Welche Maßeinheit aus der Digitaltechnik gibt es nicht?",
    answer_1: "Terabyte",
    answer_2: "Megabyte",
    answer_3: "Petabyte",
    answer_4: "Zulerbyte",
    right_answer: 4,
  },
  {
    question: "Wobei handelt es sich um eine Programmiersprache?",
    answer_1: "Queens",
    answer_2: "Westminster",
    answer_3: "Hollywood",
    answer_4: "Spandau",
    right_answer: 3,
  },
  {
    question: "Wofür steht die Abkürzung HTML?",
    answer_1: "Hypertext Message Language",
    answer_2: "Hypertext Meta Language",
    answer_3: "Hypertext Markup Language",
    answer_4: "Hypertext Model Language",
    right_answer: 3,
  },
];

let htmlQuestions = [
  {
    question: "Wofür steht die Abkürzung HTML?",
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
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    right_answer: 3,
  },
  {
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    right_answer: 3,
  },
  {
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    right_answer: 3,
  },
  {
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    right_answer: 3,
  },
  {
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    right_answer: 3,
  },
];

let cssQuestions = [];
let jsQuestions = [];

let thisArea = 1;
let questionArea = 0;
let thisQuestion;

function startGame() {           // switch the screen from landing-page to question-page
  document.getElementById("landingPage").classList.add("d-none");
  document.getElementById("questionsPage").classList.remove("d-none");
  showNextQuestion();
}

function showNextQuestion() {            // show next question and answers
 nextTheme();

  for (let i = 0; i < questionArea.length; i++) {
    thisQuestion = questionArea[i];
    document.getElementById("question").innerHTML = thisQuestion['question'];
    document.getElementById("answer_1").innerHTML = thisQuestion['answer_1'];
    document.getElementById("answer_2").innerHTML = thisQuestion['answer_2'];
    document.getElementById("answer_3").innerHTML = thisQuestion['answer_3'];
    document.getElementById("answer_4").innerHTML = thisQuestion['answer_4'];
    if (i == questionArea.length) {
      thisArea++;
    }
  }
}

function nextTheme() {  //switch to next questions-area and markup the actual area
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

function clickAnswer(selection) {       // 
    
    if( selection.slice(-1) == thisQuestion[right_answer]) {
        document.getElementById(`answer_${selection}`).classList.add('right-answer-style');
        document.getElementById(`letter_${selection}`).classList.add('right-answer-box');
    } else {
        document.getElementById(`answer_${selection}`).classList.add('wrong-answer-style');
        document.getElementById(`letter_${selection}`).classList.add('wrong-answer-box');
    }
   }



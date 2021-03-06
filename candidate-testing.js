const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/ 2* 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let orderQuestions = ["1) ", "2) ", "3) ", "4) ", "5) "];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < correctAnswers.length; i++){
    candidateAnswers[i] = input.question(orderQuestions[i] + questions[i] + '\nYour answer: ');
    console.log(`Correct answer: ${correctAnswers[i]}`);
  }
}

function gradeQuiz(candidateAnswers) {
let correct = 0;
let grade = 0;
let exam = [];
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < correctAnswers.length; i++) {
if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
   correct += 1;
   grade = correct/correctAnswers.length*100;
   if (grade >= 80) {
     exam = "PASSED";
   } else {
     exam = "FAILED";
   }
}
} 
  console.log(`>>> Overall Grade: ${grade}% (${correct} of ${correctAnswers.length} responses correct)<<< \n>>> Status: ${exam} <<<`);
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// console.log(askQuestion());

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

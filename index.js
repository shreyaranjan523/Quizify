// const { readlink } = require("fs");
let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score=0;

let userName = readlineSync.question("Enter your Name: ");
console.log(kuler(`\nHello ${userName}, Welcome to Quizify!`, "#dc2626"));

console.log("Please select any option by typing either- a/b/c/d\n")

const database = {
  // category: {
  //   name: "JavScript",
    data: [
      {
        question: `Let a={}, b={}
console.log(a==b)
console.log(a===b)`,
        options: {
          a: "false false",
          b: "false true",
          c: "true false",
          d: "true true"
        },
        correctAnswer: "a"
      },
      {
        question:  `Objects.assign(targer, source) creayes which type of copy?`,
        options: {
          a: "Deep copy",
          b: "Shallow copy",
          c: "Nested copy",
          d: "Creates a new reference"
        },
        correctAnswer: "b"
      },
      {
        question: `Is method chaining possible with forEach?`,
        options: {
          a: "Yes",
          b: "No"
        },
        correctAnswer: "b"
      },
      {
        question: "The ” var” and “function” are known as",
        options: {
          a: "Data types",
          b: "Keywords",
          c: "Prototypes",
          d: "Declaration statements"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of these is not a keyword?",
        options: {
          a: "debugger",
          b: "use strict",
          c: "with",
          d: "if"
        },
        correctAnswer: "b"
      }
    ]
  // }
}

const leaderBoard = {
  data: [
    {
      name: "Anonymous User",
      score: 1
    },
    {
      name: "Shubham",
      score: 4
    },
    {
      name: "Shambhawi",
      score: 2
    },
    {
      name: "Shruti",
      score:3
    }
  ]
}

function playGame(userAnswer, correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler("Correct Answer ✓", "#059669"));
    score++;
  }
  else{
    console.log(kuler("Incorrect Answer ✗", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

function showQuestionAndOptions(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userAnswer = readlineSync.question("Enter your answer - ").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function showhighScorer(leaderBoard){
  leaderBoard.data.push({name: userName, score: score});
  // console.log(leaderBoard);
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board!😎\n", "#fde047"));
  // console.log(sortedScoreList);
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.name} - ${leader.score}`, "#9333ea"));
  }
  // for(let i=0;i<sortedScoreList.length;i++){
    if(score >= sortedScoreList[0].score){
      console.log(kuler(`\nCongratulations ${userName}, You are on #1 Position🎉`, "#ea580c"));
    }
  // }
  // if(score >= sortedScoreList.score[0]){
  //   console.log("Congratulations, You are on #1 Position");
  // }
  console.log(kuler(`\nSee you Soon, ${userName}!👋`, "#fde047"));
}

showQuestionAndOptions(database);
console.log(kuler(`\nYour score is: ${score}`, "#5eead4"));

showhighScorer(leaderBoard);

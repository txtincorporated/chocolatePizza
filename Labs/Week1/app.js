// Code 201 Day 02
// Demo code for lecture & lab
var points = document.getElementById('points');//set scoreboard
var user = document.getElementById('contestant');//points to location for player name


var userName = prompt('What is your name?');//gather player's name
console.log('User is named ' + userName);
user.textContent = userName;//fill in player's name from prompt input
var playerScore = 0;//set starting score
var guess = false;//set default feedback condition
var prevResponse = '';
var questionIds = ['whereLived', 'birthplace', 'profession', 'interests', 'secretNumber'];//point to DOM locations of question/response log
var questionType = ['multipleAnswers','tf','tf','tf','highorlow'];//designate question types for processing by correct code block
var questions = ['Welcome, ' + userName + '. Name one city where Nate has lived besides Portland.','Will you wager that Nathan was born in Idaho?','But how about Mr. Keene\'s profession: would you say he has been an educator most of his years?','Now, how about his interests?  Would you say his reputation is his number one concern?','Now it\'s time to see if we can get into NPK\'s bank account and make off with his millions!  Can you guess the first two digits of his secret number?'];
var answerKeys = [['tokyo', 'brooklyn', 'new york', 'nyc', 'new york city'], ['y', 'YES'], ['y', 'YES'], ['n', 'NO'], 49];//all the answers!
var feedback = [
  ['Great start, ' + userName + '! ', 'Oops, ' + userName + ', time to move on! '],
  ['Yes, ' + userName + ', you\'re really doing great! ', 'Awww, no points for you, ' + userName + '. '],
  ['That\'s right, ' + userName + ', go to the head of the class! ','Nope! Dang, ' + userName + ', you just got schooled! '],
  ['You got it, ' + userName + '.  It\'s all about those kids, innit? ', 'Awwww! You\'ve played valiantly, ' + userName + ', but it\'s clear old Nate cares more about his kids than anything in the world. '],
  ['Spot on, ' + userName + '. Cha-CHINNNNNNG! Let\'s get to Nate\'s ATM! ', 'Sorry, ' + userName + ', but that\'s too high.  Try again!','Sorry, ' + userName + ', but that\'s too low.  Try again!'] ];//feedback for each answer, appended to succeeding question text in each prompt


for (i = 0;i < questionIds.length; i++) {//superQuiz ya
  if(i === 0 ) {//if first question...
    superQuiz(questionIds[i], questionType[i], questions[i], answerKeys[i], ['','']);//set these values for processing
  } else {
    superQuiz(questionIds[i], questionType[i], questions[i], answerKeys[i], feedback[i-1]);//for successive questions set as above and incl. feedback to previous question
  }
  points.textContent = playerScore; //update score after each response
}

function superQuiz(id, qType, qstn, ansKey, feedback) {//now here it finally comes
  var questionId = document.getElementById(id);//get question text location in DOM
  // var question = questionId.textContent;//extract question text from DOM
  if(guess === true) {//if prev. answer correct...
    var userResponse = prompt(feedback[0]+ qstn);//concat pos. feedback text to prev. question w/ question text to current question in a prompt dialogue
  } else {
    userResponse = prompt(feedback[1] + qstn);//concat neg. fbk. w/ qn. text in prompt
  }
  if(qType === 'multipleAnswers') {//for items allowing more than 1 correct ans.
    multipleAnswers(qstn, userResponse, ansKey);//call fn. for open-ended questions
  } else if (qType === 'tf') {//items w/ only 1 correct ans.
    tf(userResponse, ansKey);//call fn. for true/false questions
  } else if( qType === 'highorlow') {//items allowing endless guesses
    highOrLow(qstn, userResponse, ansKey);//call fn. for guesswork questions
  }
  questionId.textContent = qstn + ' -- You said ' + prevResponse + '.';
}

// function multipleAnswers(questionMA, userResponseMA, ansKeyMA) {
//   for (j = 0; j <= 3; j++) {//allow up to four guesses
//     for (k = 0; k < ansKeyMA.length; k++) {//for each of the possible correct answers
//       if (userResponseMA.toLowerCase() === ansKeyMA[k]) {
//         guess = true;//set for positive fbk. at start of next round
//         playerScore++;
//         return;//quit loop
//       } //else if (j > 3) {//
//         guess = false;//set for neg. fbk. and complete any remaining iterations
//         //return;//
//       //}//
//       console.log('userResponse: ' + userResponseMA);
//     }
//     questionMA = 'Sorry try again.';//neg. fbk. before last iteration of lp.
//     userResponseMA = prompt(questionMA + ' You have ' + (4 - (j + 1)) + ' guesses!');
//   };//state question and guesses remaining in each lp. iteration
//   //return;//quit loop
// }

function multipleAnswers(questionMA, userResponseMA, ansKeyMA) {
  for (j = 0; j < 3; j++) {//allow up to four guesses
    for (k = 0; k < ansKeyMA.length; k++) {//for each of the acceptable answers
      if (userResponseMA.toLowerCase() === ansKeyMA[k]) {//If player got it right
        guess = true;//set for positive fbk. at start of next round
        playerScore++;
        console.log('userResponse: ' + userResponseMA);
        prevResponse = userResponseMA;//Post most recent response to DOM element
        return;//correct answer, quit loop
      } /*else if (j == 3) {//last guess done
        //guess = false;//uncomment if not first question in quiz
        console.log('userResponse: ' + userResponseMA);
        prevResponse = userResponseMA;//Post most recent response to DOM element
        return;//no more guesses, quit loop
      }
      console.log('userResponse: ' + userResponseMA);
      prevResponse = userResponseMA;*/
    }
    questionMA = 'Sorry try again.';//neg. fbk. before last iteration of lp.
    userResponseMA = prompt(questionMA + ' You have ' + (4 - (j + 1)) + ' guesses!');
  }//state question and guesses remaining in each lp. iteration
  for (k = 0; k < ansKeyMA.length; k++) {//for each of the acceptable answers
    if (userResponseMA.toLowerCase() === ansKeyMA[k]) {//If player got it right
      guess = true;//set for positive fbk. at start of next round
      playerScore++;
      console.log('userResponse: ' + userResponseMA);
      prevResponse = userResponseMA;//Post most recent response to DOM element
    }
  }
}

function tf(userResponseTA,ansKeyTA) {//single-chance, strict match questions
  if (userResponseTA.toLowerCase() === ansKeyTA[0] || userResponseTA.toUpperCase() === ansKeyTA[1]) {//if user input matches answer when forced to all-upper or all-lower case
    playerScore++;
    guess = true;//set pos. fbk. condition
    console.log('userResponse: ' + userResponseTA);
    prevResponse = userResponseTA;
  } else {
    guess = false;//set neg. fbk. condition
    console.log('userResponse: ' + userResponseTA);
    prevResponse = userResponseTA;
  }
}

function highOrLow(questionHL,userResponseHL, ansKeyHL) {//convergent guesswork questions
  while (userResponseHL != ansKeyHL) {//until player guesses correctly
    if (userResponseHL > ansKeyHL) {//if too high
      alert('Sorry, ' + userName + ', but that\'s too high.  Try again!');
    } else if (userResponseHL < ansKeyHL) {//if too low
      alert('Sorry, ' + userName + ', but that\'s too low.  Try again!');
    }
    userResponseHL = prompt(questionHL);//give question prompt
    console.log('userGuess: ' + userResponseHL);
    prevResponse = userResponseHL;
  }
  alert('Spot on, ' + userName + '. Cha-CHINNNNNNG! Let\'s get to Nate\'s ATM!');//if correct
  playerScore ++;
  console.log('userGuess: ' + userResponseHL);
  prevResponse = userResponseHL;
  guess = true;//set for pos. fbk. (allows quiz scalability and reconfiguration)
}// That's all folks

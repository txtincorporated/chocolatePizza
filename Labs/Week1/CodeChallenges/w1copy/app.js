// Code 201 Day 02
// Demo code for lecture & lab
//Grab element from the DOM
var userAction = document.getElementById('quizMe');
var prompt1 = document.getElementById('q1');
var prompt2 = document.getElementById('q2');
var prompt3 = document.getElementById('q3');
var prompt4 = document.getElementById('q4');
var prompt5 = document.getElementById('q5');

//Quiz button. From Stackoverflow question found here: http://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function
if (userAction.addEventListener)
  userAction.addEventListener('click', quizUser, false);
/*else if (userAction.attachEvent)
  userAction.attachEvent('onclick', quizUser);*/

function quizUser() {
  //Keep track of number of correct answers
  var correct = 0;

  //Get user's name
  var q1Text = prompt1.textContent;
  var userName = prompt(q1Text);
  console.log('The user\'s name is ' + userName);

  //Ask which city Lizzie studied abroad in
  var cityNames = ['valparaiso', 'valpo', 'valparaiso, chile', 'valparaiso chile'];
  var city = (prompt('Ok ' + userName + ', let\'s begin. In what city did Lizzie study abroad?')).toLowerCase();
  console.log(userName + ' thinks Lizzie studied abroad in ' + city);
  if (cityNames.indexOf(city) >= 0){
    alert('Congratulations! Lizzie did study abroad in Valparaiso');
    correct++;
  }
  else {
    alert('Oops! Actually, Lizzie studied aborad in Valparaiso. Let\'s try another question.');
  }

  //Ask if Lizzie knows C++
  var skills = prompt('Yes or No; Lizzie is skilled in C++ (Enter \'Y\' or \'N\')');
  if (skills.toLowerCase() === 'n'){
    alert('Well done! Lizzie is not proficient in C++.');
    console.log(userName + ' is right, Lizzie doesn\'t know C++');
    correct++;
  } else {
    alert('Oops! Actually, Lizzie is not proficient in C++.');
    console.log(userName + ' is incorrect, Lizzie doesn\'t know C++');
  }

  //Ask if Lizzie knows C++
  var skills = prompt('Yes or No; Lizzie is skilled in Adobe InDesign (Enter \'Y\' or \'N\')');
  if (skills.toLowerCase() === 'y'){
    alert('Well done! Lizzie is proficient in Adobe InDesign.');
    console.log(userName + ' is right, Lizzie does know Adobe InDesign');
    correct++;
  } else {
    alert('Oops! Actually, Lizzie is proficient in Adobe InDesign.');
    console.log(userName + ' is incorrect, Lizzie does know Adobe InDesign');
  }

  //Ask what year Lizzie graduated college
  var tryAgain = true;
  var numTries = 0;
  while (tryAgain){ //Could have added Number() around prompt once to be more efficient
    var beganCollege = prompt('Knowing that Lizzie completed her Vermont Legal Aid internship 4 years before she started college, in what year did Lizzie start college?');
    if (Number(beganCollege) === 2010){
      alert('Correct! Lizzie did start school in ' + beganCollege);
      console.log(userName + ' is right, Lizzie did start school in ' + beganCollege);
      if (numTries === 0){
        correct++;}
      tryAgain = false;
    } else if (Number(beganCollege) < 2010){
      alert('Sorry! That answer is too low. Please try again');
      console.log(userName + '\'s guess is too low');
      numTries++;
    } else if (Number(beganCollege) > 2010){
      alert('Sorry! That answer is too high. Please try again');
      console.log(userName + '\'s guess is too high');
      numTries++;
    } else if (isNaN(beganCollege)){
      alert('Sorry! That is not a numeric answer. Please try again');
      console.log(userName + '\'s guess is not a number');
      numTries++;
    } else {
      alert('Sorry! I can\'t understand you. Please try again');
      console.log(userName + '\'s guess is not valid');
      numTries++;
    }
  }

  //Ask Lizzie's major in college
  var major = prompt('Ok, final question. What did Lizzie study in college?');
  if (major.toLowerCase() === 'geography'){
    alert('Well done! Lizzie did study Geography in college.');
    console.log(userName + ' is right, Lizzie did study Geography');
    correct++;
  } else {
    alert('Oops! Actually, Lizzie did not study ' + major + '. She actually studied Geography.');
    console.log(userName + ' is incorrect, Lizzie didn\'t study ' + major);
  }

  //Give the user their final score
  alert('You got ' + correct + ' of 5 questions right ' + userName + '! Thanks for taking the quiz');
}

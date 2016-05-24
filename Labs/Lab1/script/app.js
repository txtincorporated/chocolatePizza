//Ask six questions
  //define six variables storing user input
var hometown=prompt("What is the city you grew up in?");
var residence=prompt("Wow! " + hometown + ". What a place to be raised.  What city do you live in now?");
var edLevel=prompt('' + residence + "! That's such a cool town! If you don't mind, what is your highest level of education?");
var favoriteMovie=prompt(edLevel + ". Got it. Thanks!  Now, down to business:  what's your favorite movie?");
var favoriteFood=prompt("Ah, " + favoriteMovie + ".  What a classic.  How about your favorite food?");
var lastVacation=prompt("OK. You like " + favoriteFood + ". To each his own.  Last question:  where did you go on your last vacation?");

var QandA = [hometown, residence, edLevel, favoriteMovie, favoriteFood, lastVacation];
var ids = ['yrHometown', 'yrResidence', 'yrEducation', 'favMovie', 'favFood', 'lastVaca'];
//Console.log six answers
function ask (id,content) {
  var element=document.getElementById(id);
  element.textContent = content;
  console.log(content);
};
for (var i=0; i < QandA.length; i++) {
  ask (ids[i], QandA[i]);
}

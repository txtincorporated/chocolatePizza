|Rubric | Met all requirements (*/12) | Idiomatic style used (*/6)| Proper Git workflow utilized (*/2)| Other adjustments (*/+-2)| Total possible  (*/20)|
|---        |---|---|---|---|---|--|
| Submission|   |   |   |   |   |
| Late      |   |   |   |   |   |  |

* A couple things on your last question:

  - the variable `secretNum` gets defined inside of your `while` loop on line 84, whereas right above it we are checking if it is truthy, and we need to define it before this check, otherwise it will always be falsy. so move this line so that your conditional can check it: `var secretNum = prompt('Now it\'s time to see if we can get into ol\' NPK\'s bank account and make off with his millions!  Can you guess the first two digits of his secret number?');`


## USER STORIES Lab 03

1. Convert information about yourself into unordered lists such as education, school and work/experience.

  - passed, nice!

2. Add a top ten list with a ordered list

- passed, nice!

3. Have a fourth question that is a question for a number and responds with too high or too low, give the user 4 guesses to get the question right.

- -1 point You have the logic in place for this one, but you just need to make a small tweak to get it to work right, which is hinted at in the note at the top. Right now, because `secretNum` is false at the start of the while loop, my score keeps counting up into the thousands! I got the high score :)

4. Add a fifth question to guessing game that accepts multiple correct answers that are stored in a array.

- passed, nice!

5. Keep a tally of the total number of correct answers given by the user and have a response with the user's name that shows how many they got right out of a certain amount of questions

- passed, nice!

6. Use CSS to add some color to the "About Me" page

- passed, nice!


## Stretch Goals Bonus Points

1. Put all of the questions, answers, and responses to my game into arrays. Modify the game logic that a for loop will control the flow from question to question.


## Technical Requirements

1. Passes eslint (write clean HTML and javascript)

- passed, nice!
2. Use console.log() throughout the code for debugging purposes

- passed, nice!

## Proper Git Flow Utilized

1. Make a new Git branch of today's work (day3)

2. Create a new branch and add a question or new features then merge that into day 3 branch


# Additional Comments:

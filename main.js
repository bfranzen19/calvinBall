/*
//Player One
var score = 193;
var last_play = "Q";
var broom = "handle";
var has_ball = false;
var is_in_tree = false;
var crying = false;
//final score: 332
*/

/*
//Player Two
var score = 394;
var last_play = "W";
var broom = "none";
var has_ball = true;
var is_in_tree = true;
var crying = false;
//final score: 222
*/


//Player Three
var score = "f";
var last_play = 1.5
var broom = "brush";
var has_ball = true;
var is_in_tree = false;
var crying = true;
//final score: 900



// 1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).

if(typeof score !== 'number') {
  score = 500
  console.log(`score is not a number, player's score set to ` + score)
} else {
console.log('score is a number. score set to ' + score)
}


// 2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.

if(crying === true) {
  score = score - 300
  console.log('player is crying, lose 300. \n score: ' + score )
} else {
  score = score + 50
  console.log('player is not crying. score is increased by 50. \n score: ' + score)
}


// 3. A player's score is reduced by 77 if their last play was "Q"

if(last_play === "Q") {
  score = score - 77
  console.log('last play was ' + last_play + ', lose 77. \n score: ' + score)
} else {
console.log('last play was ' + last_play + '. no change to score. \n score: ' + score)
}


// 4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.

if(typeof last_play === 'number') {
  if(is_in_tree === true) {
    console.log('player was in a tree and their last play was a number. score increased by 395. \n score: ' + score)
  } else {
    console.log('player was not in a tree. score unchanged. \n score: ' + score)
  }
} else {
  console.log('last play was a number but player was not in a tree. score unchanged. \n score: ' + score)
}


// 5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.

if(broom === 'handle') {
  score = score * 2
  console.log('broom held by the handle. score doubled. \n score: ' + score)
} else if (broom === 'brush') {
  score = score * 3
  console.log('broom held by brush. score tripled. \n score: ' + score)
} else {
  score = score / 2
  console.log('broom not held by handle or by brush. score is halved. \n score: ' + score)
}


// 6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
// missing
if(crying === false) {
  if(has_ball === true) {
    if(is_in_tree === true) {
      console.log('player is in a tree. score unchanged. \n score: ' + score)
    } else {
      console.log('player is not crying, has the ball, and is not in a tree. score is multiplied by 1.5. score: '+ score)
    }
  } else {
    console.log('player does not have the ball. score unchanged. \n score: ' + score)
  }
} else {
  console.log('player is crying. score unchanged. \n score: ' + score)
}


// 7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.

if(typeof last_play === 'number') {
  score = score * last_play
  console.log('last play is a number. score multiplied by ' + last_play + '. \n   score: ' + score)
} else {
  console.log('last play was not a number. score is unchanged. \n score: ' + score)
}

// logs the final score of the game.
console.log('final score: ' + score)

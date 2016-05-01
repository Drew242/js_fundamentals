// var readline = require('readline');
//
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question("What's your name? ", function(answer) {
//   console.log("Welcome to the show", answer);
//
//   rl.close();
// });

// console.log('printing the triangle')
//
// for (var hashtag = '#'; hashtag.length <= 10; hashtag = hashtag + '#')
//   console.log(hashtag);

for (var i=1; i <= 100; i++){
  if (i % 15 == 0)
    console.log("Fizzbuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i); 
}

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", function(answer) {
  console.log("Welcome to the show", answer);

  rl.close();
});


// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {

  if (input === "b") {
    process.stdout.write('\x07');
  } // if the user presses b, it beeps right away

  if (Number(input) >= 1 && Number(input) <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    setTimeout( () => {
      process.stdout.write('\x07');
    }, 1000 * input);
  }

});

rl.on('SIGINT', () => {
  console.log(`Thanks for using me, ciao!`)
  rl.pause();
});
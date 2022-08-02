let userInput = process.argv.slice(2);

const timerFunction = (userInput) => {
  let validInput = [];

  for (let elem of userInput) {
    if (elem > 0) {
      validInput.push(elem);
    }
  }

  for (let i = 0; i < validInput.length; i++) {

    setTimeout( () => {
      process.stdout.write('\x07');
    }, 1000 * (validInput[i]));
  };
  
    setTimeout( () => {
      console.log('\n');
    }, 1000 * (validInput[validInput.length + 1]));

  return;
  
};

timerFunction(userInput);
let userInput = process.argv.slice(2);

const timerFunction = (userInput) => {
  userInput.sort((a, b) => a - b);
  console.log(userInput);

  
};

timerFunction(userInput);
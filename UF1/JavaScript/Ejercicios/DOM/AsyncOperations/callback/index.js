const veryExpensiveOperation = callback => {
  
  /* ------------------------------- */  

  // Version larga
  // const functionToExecute = () => {
  //   callback('BACKEND DATA');
  // };
  // setTimeout(functionToExecute, 3000);

  /* ------------------------------- */

  // Version intermedia
  // const functionToExecute = () => callback('BACKEND DATA');
  // setTimeout(functionToExecute, 3000);

  /* ------------------------------- */

  // Version corta
  setTimeout(() => callback('BACKEND DATA'), 3000);
  
};

const onVeryExpensiveOperationSuccess = result => {
  console.log('RESULT', result);
};

// HERE STATS THE ASYNC OPERATION
veryExpensiveOperation(onVeryExpensiveOperationSuccess);

// BUT WE CAN CONTINUE EXCUTING JS CODE
console.log('Hi');
console.log('Dragon Ball Rocks');

const veryExpensiveOperation = () => {
  return new Promise((resolve, reject) => {
    reject();
    setTimeout(() => {
      resolve('foo');
    }, 3000);
  });
};

const onVeryExpensiveOperationSuccess = result => {
  console.log('success', result);
};

const onVeryExpensiveOperationFail = () => {
  console.log('FAIL');
};

// HERE STATS THE ASYNC OPERATION
veryExpensiveOperation()
  .then(onVeryExpensiveOperationSuccess)
  .catch(onVeryExpensiveOperationFail);

// BUT WE CAN CONTINUE EXCUTING JS CODE
console.log('Hi');
console.log('Dragon Ball Rocks');

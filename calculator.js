let calculator = (() => {
  let _storingValues = [];
  let _receivingOperation = null;

  const entryValue = (value) => {
    _storingValues = [..._storingValues, value];
  };

  const setOperation = (op) => {
    _receivingOperation = op;
  };

  const getOperations = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "/": (num1, num2) => num1 / num2,
    "*": (num1, num2) => num1 * num2,
  };

  const equals = () => {
    let total = 0;
    for (let i = 0; i < _storingValues.length; i += 1) {
      if (typeof _storingValues[i] !== "number") {
        return "Please enter valid values!";
      } else {
        total = _storingValues.reduce(getOperations[_receivingOperation]);
      }
    }
    return total;
  };

  const listValues = () => {
    return _storingValues;
  };

  const listOperations = () => {
    return _receivingOperation;
  };

  const reset = () => {
    _storingValues = [];
    _receivingOperation = null;
  };

  return {
    entryValue,
    setOperation,
    listValues,
    listOperations,
    equals,
    reset,
  };
})();

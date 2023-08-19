const sumAll = function (min, max) {
  let sum = 0;

  if (min > max) {
    for (let i = max; i <= min; i++) {
      sum += i;
    }
  } else if (min < 0 || max < 0) {
    return "ERROR";
  } else if (typeof min !== "number" || typeof max !== "number") {
    return "ERROR";
  } else {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

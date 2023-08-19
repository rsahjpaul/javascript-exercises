const removeFromArray = function (arr, arg, arg2, arg3, arg4) {
  let modifiedArray = arr.filter(
    (item) => item !== arg && item !== arg2 && item !== arg3 && item !== arg4
  );

  return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

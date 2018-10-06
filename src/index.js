module.exports = function getZerosCount(number, base) {
  // your implementation

  let newnum = base;
  let arrMultipliers = [];

  for (let i = 2; i < newnum; i * i) {
    if (newnum % i === 0) {
      arrMultipliers.push(i);
      // console.log(arrMultipliers);
      newnum = newnum / i;
      // console.log(newnum);
    }
    else {
      i++;
      // console.log(i);
    }
  }

  if (newnum != 1) {
    // console.log(arrMultipliers);
    arrMultipliers.push(newnum);
    // console.log(arrMultipliers);
  }

  let maxMultiplier = Math.max.apply(null, arrMultipliers);
  // console.log(maxMultiplier);
  let degreeOfMultiplier = arrMultipliers.filter(item => item === maxMultiplier).length;
  // console.log(degreeOfMultiplier);

  var count = 0;
  for (var i = maxMultiplier; number / i >= 1; i *= maxMultiplier) {
    count += Math.floor(number / i);
  }
  zerosCount = Math.floor(count / degreeOfMultiplier);
  // console.log(zerosCount);
  return zerosCount;
}
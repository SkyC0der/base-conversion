const convert = (digits, fromBase = 0, toBase = 0) => {
  if (fromBase < 2 || (fromBase + "").match(/[^\d]/g))
    throw new Error("Wrong input base");
  if (toBase < 2 || (toBase + "").match(/[^\d]/g))
    throw new Error("Wrong output base");
  if ( digits.length === 0 || digits.filter((n) => n < 0 || n >= fromBase).length)
    throw new Error("Input has wrong format");
  if (digits.length > 1 && digits[0] === 0)
    throw new Error("Input has wrong format");

  let n = digits.reduce((p, c) => p * fromBase + c, 0);
  let r = [];
  do {
    r.push(n % toBase);
    n = Math.floor(n / toBase);
  } while (n > 0);
  return r.reverse();
};

module.exports = convert;

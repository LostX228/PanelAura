function so02() {
  var arr = [];

  function calculate(x) {
    return x < -60 ? x + 33 : x > -60 ? x > 20 ? x - 68 : x + 59 : x - 75;
  }

  function getValue(x) {
    return x;
  }

  function getCharCode(x) {
    return String.fromCharCode(x);
  }

  arr = [getValue(getCharCode(2)), getValue(getCharCode(3)), getValue(calculate(15)), getValue(calculate(16))];

  var result = h5gg[getValue(getCharCode(6))](arr[calculate(-53)] + arr[calculate(-41)] + arr[getCharCode(-46)] + '\x37', getValue(getCharCode(7)));

  return {
    [getValue(calculate(19))]: getValue[getCharCode(-38)](getCharCode(-42), calculate(-52)),
    [arr[calculate(-43)]]: '\x78\x38'
  };
}

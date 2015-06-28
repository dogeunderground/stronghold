var validator = {};

/* returns true if password is valid */
validator.validate = function(password) {
  // return password === 'shibe4life'; // such insecure

  // such secure wow:

  function alphabetic(str) {
    return /^[a-zA-Z()]+$/.test(str);
  }

  function toBytes(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr.push(str.charCodeAt(i));
    }
    return arr;
  }

  function everyEven(arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }

  // very confuse
  function cksum(bytes) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < bytes.length; i++) {
      a = (a + bytes[i]) % 0xff;
      b = (b + a) % 0xff;
    }
    return (b << 8) | a;
  }

  if (!alphabetic(password)) {
    // much gross
    return false;
  }

  if (password.length < 10) {
    // very short, much insecure
    return false;
  }

  if (password.length % 2 != 0) {
    // much asymmetric
  }

  var bytes = toBytes(password);
  var half = Math.floor(bytes.length / 2);
  var left = bytes.slice(0, half);
  var right = bytes.slice(half);
  var even = everyEven(bytes);

  if (cksum(even) !== 0x0000) {
    return false; // such random
  }
  if (cksum(left) !== 0xd06e) {
    return false; // much sad, not for doge
  }
  if (cksum(right) !== 0xf00d) {
    return false; // wow unfortunate, not food
  }

  return true; // very success, 0xd06ef00d
};

module.exports = validator;

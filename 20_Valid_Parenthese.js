/**
 * @param {string} s
 * @returns {boolean}
 */
var isValid = function(s) {

  if ((s.length % 2 === 1) || (s.length === 0)) {
      return false;
  }

  var brackets = [],
      openBracketsMapping = {
        '(': ')',
        '[': ']',
        '{': '}'
      },
      chars = s.split(''),
      currentChar = '',
      couple = '';

  for (var i = 0; i < chars.length; i++) {
    currentChar = chars[i];
    if (currentChar in openBracketsMapping) {
      brackets.push(currentChar);
    } else {
      if (openBracketsMapping[brackets.pop()] !== currentChar) {
         return false;
      } else {
        continue;;
      }
    }
  }

  if (brackets.length === 0) {
      return true;
  }
  return false;
};

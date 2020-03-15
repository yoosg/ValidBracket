// 맨 앞과 맨 마지막 괄호가 다를경우 false return
// 맨 앞이 닫는 괄호일 때 false return
function isValid(s) {
  const bracketData = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  let openBracketArr = [];
  let sArr = s.split('');
  let result = false;

  for (let i in bracketData) {
    if (sArr[0] === i) {
      result = true;
      if (bracketData[sArr[0]] !== bracketData[i]) {
        return !result; // 첫번째와 마지막 괄호가 다른 경우 return
      }
    }
  }
  if (!result) {
    // 닫는 괄호로 시작하는 경우 return
    return result;
  }

  // 인자로 들어온 괄호 string를 반복하며 맨 마지막으로 여는 괄호가
  // 처음 닫히는 괄호와 일치하는지 확인한다.
  for (let i = 0; i < sArr.length; i++) {
    let tempStr = sArr[i];
    let tempCloseStr = bracketData[sArr[i]];
    // tempStr이 여는 괄호면 tempCloseStr은 bracketData에 일치하는 닫는 괄호.
    // 닫는 괄호면 undefined
    if (tempCloseStr) {
      // tempStr이 여는 괄호일 때
      openBracketArr.push(tempStr);
    } else {
      // 닫는 괄호일 때
      // 여는 괄호의 맨 뒤 index 빼기
      let tempOpenStr = openBracketArr.pop();
      if (tempStr !== bracketData[tempOpenStr]) {
        // data의 value와 일치하는지 확인 후 맞으면 다음반복 진행
        // 다르면 false return
        return !result;
      }
    }
  }
  // 괄호 순서가 맞다면 여는 괄호 배열은 빈 배열
  return openBracketArr.length === 0;
}

isValid('([)]');

// 예외처리 없는 풀이
function isValid(s) {
  const bracketData = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  let openBracketArr = [];
  let sArr = s.split('');

  // 인자로 들어온 괄호 string를 반복하며 맨 마지막으로 여는 괄호가
  // 처음 닫히는 괄호와 일치하는지 확인한다.
  for (let i = 0; i < sArr.length; i++) {
    let tempStr = sArr[i];
    let tempCloseStr = bracketData[sArr[i]];

    // tempStr이 여는 괄호면 tempCloseStr은 bracketData에 일치하는 닫는 괄호.
    // 닫는 괄호면 undefined
    if (tempCloseStr) {
      // tempStr이 여는 괄호일 때
      openBracketArr.push(tempStr);
    } else {
      // 닫는 괄호일 때
      // 여는 괄호의 맨 뒤 index 빼기
      let tempOpenStr = openBracketArr.pop();
      if (tempStr !== bracketData[tempOpenStr]) {
        // data의 value와 일치하는지 확인 후 맞으면 다음반복 진행
        // 다르면 false return
        return false;
      }
    }
  }
  // 괄호 순서가 맞다면 여는 괄호 배열은 빈 배열
  return openBracketArr.length === 0;
}

isValid('([)]');

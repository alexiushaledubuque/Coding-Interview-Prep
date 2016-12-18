function balanceCheck (str, symbolTypes) {
  let stack = [];
  let symbol;
  symbolTypes = symbolTypes.split('');

  let opening = { '(':')','[':']', '{':'}' };
  let closing = { ')':"null", ']': "null", '}': "null" };

  for(let i = 0; i < str.length; i++) {
    symbol = str[i];
    //if(stack.length === 0 && closing.hasOwnProperty(symbol) && i === 0) return false;

    if (opening.hasOwnProperty(symbol) && symbolTypes.indexOf(symbol) > -1) {
      stack.push(symbol);
    } else if(closing[symbol]) {
    	if (stack.length === 0){
    		return false;
    	} else if (symbol === opening[stack[stack.length - 1]]) {
            let removed = stack.pop();
    	}
    }
  }
  return stack.length === 0;
}

balanceCheck('[{]}', '{}');

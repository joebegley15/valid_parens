function validParentheses(string){
	counter = 0;
	for (var i = 0; i < string.length; i++) {
		if(string.charAt(i) == '('){
			counter += 1;
		} else if (string.charAt(i) == ')') {
			counter -= 1;
		}
		if (counter < 0) {
			return false;
		}
	};
	if (counter == 0) {
		return true
	} else {
		return false;
	}
};
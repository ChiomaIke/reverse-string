module.exports = {
reverseString:function(str){
if (str ===""){
	return null;
}
//declaring variables
var newStr = '';
var newArr = str.split("");
//declaring an array
var result = [];
x = newArr.length;
//decrementing for-loop with concatenation
for(var i = str.length - 1; i >=0; i--) {
   newStr += str[i];
}

if(newStr == str) {
   return true;
   return newStr;
} else {
var newArr = str.split("");
var result = [];
//assigning the length of the newArr to x
x = newArr.length;
//looping through x
for (var i = x; i > -1; i--){
   result.push(newArr[i]);
}
   str = result.join("");
	  return str;
}
  
}
}
        
	  
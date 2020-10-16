let isPangram = (string) =>[...'qwertyuiopasdfghjklzxcvbnm'].every(x => string.toLowerCase().indexOf(x) !== -1);
 
//some test examples
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); //ture
console.log(isPangram("Pack my box with five dozen liquor jugs.")); //ture
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")); //true
console.log(isPangram("A pangram is a sentence that contains every single letter of the alphabet at least once.")); //false
console.log(isPangram("This isn't a pangram!")); //false
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa")); //false
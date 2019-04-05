const countVowels = str => Array.from(str)
	.filter(letter => 'aeiouAEIOU'.includes(letter)).length;

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`Enter a filename: `, (name) => {
	var fs = require('fs');
	var array = fs.readFileSync(`${name}`).toString().split("\n");
	var substrings = [];
	readline.close();

	for (var word in array) {
		console.log(countVowels(getAllSubstrings(array[word])));
	}

	function getAllSubstrings(str) {
		var i, j, result = [];
		for (i = 0; i < str.length; i++) {
			for (j = i + 1; j < str.length + 1; j++) {
				result.push(str.slice(i, j));
			}
		}
		return result.join('');
	}
});

# Vowel Count

*Create a program to count the number of vowels in a each given input string.*

### Task

Write a program in javascript that takes a text file as input and for each line in the file outputs the count of vowels in all possible substrings of the line.

Write your solution in a new branch/fork of this repo your solution as a pull request. Please commit as frequently as you like to document your process, and do not squash your commits.

**Bonus:** After completing the task, create a simple web app (using [Create React App](https://github.com/facebook/create-react-app) or similar) that provides similar functionality.

#### Notes:
* Define vowels as any of the following letters: `a,e,i,o,u,A,E,I,O,U`.
* Lines of input will contain only uppercase and lowercase letters.
* Assume that all input is valid.
* Sample input files have been provided, but your solution will be tested against additional inputs

### Example
#### Sample Input
```
baker
lol
```

#### Sample Output
```
16
4
```

#### Explanation
The first line of the sample input contains the following substrings (inclusive of the full string) with the following vowel counts:

| substring | vowels |
| --- | --- |
| b | 0 |
| ba | 1 |
| bak | 1 |
| bake | 2 |
| baker | 2 |
| a | 1 |
| ak | 1 |
| ake | 2 |
| aker | 2 |
| k | 0 |
| ke | 1 |
| ker | 1 |
| e | 1 |
| er | 1 |
| r | 0 |

The sum total of all vowels in all substrings of "baker" is 16.
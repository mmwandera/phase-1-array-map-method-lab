const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// We want all the titles to be "title case", in other words, the first letter of each word should be capitalized. Create a new array containing the names of the tutorials with proper title case formatting. For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'.
function titleCased(){
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1)
    }).join(' ')
  })
}

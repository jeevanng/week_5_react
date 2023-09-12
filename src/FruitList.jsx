
let someFruit = [
	"mangoes",
	"peaches",
	"apples",
	"blueberries",
	"aubergine",
	"secret banana",
	"papayas",
	"banana",
	"durian",
	"tomatoes",
	"rambutan",
	"mulberries", 
	"kiwis",
	"jackfruit",
	"watermelon",
	"zach fruit",
	"grape",
	"coconut"
]
  
// Process someFruit and build an array of li tags 
let fruitListTags = someFruit.map((fruit => {
return <li>{fruit}</li>
}));

// Functions MUST return JSX, if you want to use it as HTML 
// aka in place of inline JSX 
export default function FruitList(){
	return fruitListTags;
}

// module.exports = FruitList;
// module.exports = {
// 	FruitList
// }
import "./FruitList.css";
import ListGroup from 'react-bootstrap/ListGroup';

// let someFruit = [
// 	"mangoes",
// 	"peaches",
// 	"apples",
// 	"blueberries",
// 	"aubergine",
// 	"secret banana",
// 	"papayas",
// 	"banana",
// 	"durian",
// 	"tomatoes",
// 	"rambutan",
// 	"mulberries", 
// 	"kiwis",
// 	"jackfruit",
// 	"watermelon",
// 	"zach fruit",
// 	"grape",
// 	"coconut"
// ]
  
// Process someFruit and build an array of li tags 
// let fruitListTags = someFruit.map(((fruit, index) => {
// return <li key={fruit} fancyNumber={index}>
//     {fruit}
//     </li>
// }));

// Functions MUST return JSX, if you want to use it as HTML 
// aka in place of inline JSX 
export default function FruitList(props){

    // On wednesdays if there is pineapple, we return null
    if(props.listToShow.includes("pineapple") && new Date(Date.now()).getDay() === 3){
        return null;
    }

	let listOfFruit = props.listToShow.map(fruit => {
        return <ListGroup.Item key={fruit}> 
            {fruit}
        </ListGroup.Item>
    });

    return <span>
        {listOfFruit}
        {props.children}
    </span>
}

// module.exports = FruitList;
// module.exports = {
// 	FruitList
// }
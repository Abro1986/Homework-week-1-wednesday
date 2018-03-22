// easy going

/*for (i = 0; i<=20; i++) {
	console.log(i);
}

// Get even

for (i = 0; i<=200; i+= 2) {
	console.log(i);
}

// Excited Kitten

kittenArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."];

for (i = 0; i<20; i++) {
	 if (i%2 !== 0) {
		console.log("Love me, pet me! HSSSSSS!");
	} else if (i%2 === 0) 
	console.log(kittenArray[Math.floor(Math.random() * kittenArray.length)]);
}

// Fizz Buzz


let fizzArray = ['fizz', 'buzz', 'fizzbuzz'];
let var1 = 1;

for (var1; var1<=20; var1++) {	
	if (var1%3 !== 0 && var1%5 !== 0) {
		console.log(var1);
	}
	  else if (var1%3 === 0) {
		console.log(fizzArray[0]);
	} else if (var1%5 ===0) {
		console.log(fizzArray[1]);
	} else if (var1%3 === 0 && var1%5 === 0) {
		console.log(fizzArray[2]);
	}
	
}


let fizzArray = ['fizz', 'buzz', 'fizzbuzz'];
let var1 = 1;

for (var1; var1<=100; var1++) {	
	if (var1%3 !== 0 && var1%5 !== 0) {
		console.log(var1);
	}
	  else if (var1%3 === 0 && var1%5 === 0) {
		console.log(fizzArray[2]);
	} else if (var1%5 ===0) {
		console.log(fizzArray[1]);
	} else if (var1%3 === 0) {
		console.log(fizzArray[0]);
	}
	
}

//getting to know you

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

//thom.shift();
//th/om.unshift("Gameboy");
//console.log(thom)

karolin.splice([1]);
karolin.push('17', 'New York');
console.log(karolin);

matt.pop();
matt.push("Gotham City");
console.log(matt);

kristyn.pop();
kristyn.push("Brooklyn");
console.log(kristyn);


//yell at the Ninja Turtles

let turtlePower = ['donatello', 'leonardo', 'raphael', 'michaelangelo']


function toUpperCase() {for (i=0; i < turtlePower.length-1; i++ ) {
	console.log(turtlePower[i]);
	}
}

toUpperCase()
*/
//

//Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*
kristynsCloset.splice(0, 1);
console.log(kristynsCloset)

let kristynsShoe = "left shoe";

thomsCloset.splice((3), (2), (2, kristynsShoe));
console.log(thomsCloset);

for (let i = 1; i <=3; i++){
	kristynRandomNum = Math.floor((Math.random() * (kristynsCloset.length - 1)));
	console.log("Kristyn will be wearing: " + kristynsCloset[kristynRandomNum] + " and " + kristynsCloset[kristynRandomNum]);
};

for (let i = 1; i <=3; i++) {

	thomRandomShirtNum = Math.floor(Math.random() *(thomsCloset[0].length -1));

	thomsRandomPantsNum = Math.floor(Math.random() *(thomsCloset[1].length -1));

	thomsRandomAccessoriesNum = Math.floor(Math.random() *(thomsCloset[2].length -1));


console.log("Thom will be wearing: " + thomsCloset[0] [thomRandomShirtNum] + thomsCloset[1] [thomsRandomPantsNum ] + thomsCloset[2][thomsRandomAccessoriesNum]);	
}
*/

//Dirty Laundry

for (let i = 0; i < kristynsCloset.length; i++) {
	console.log("Whirr: Now washing " + kristynsCloset[i]);
}

for (let i = 0; i < thomsCloset.length; i++) {
		for (t = 0; t < thomsCloset[i].length; t++){
			console.log(thomsCloset[i][t]);
		}
	
}

//Multiples of 3 and 5

let sum = 0

for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
  	console.log(sum += i)
  }
}








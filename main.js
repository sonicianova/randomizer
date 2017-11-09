//Declare and instantiate variables:
var object = [];
var usedObjects = [];
var total = 0;
var randomNum = Math.random();
var objectsLeft = 0;
var testing = false;

//Input an object into the system:
function inputName() {
	//Add the inputted value to the array and display that array value as a new div.
	object.push(document.getElementById("txtObject").value);
	document.getElementById("divDisplay").innerHTML += "<div id='object" + total + "' class='object' onclick='removeObject(" + total + ")'>" + object[object.length - 1] + "</div>";
	
	//Clear the text box and update the total;
	document.getElementById("txtObject").value = "";
	total += 1;
	objectsLeft = object.length;
	usedObjects.splice(0,usedObjects.length);
	document.getElementById("lblTotal").innerHTML = "Total: " + total;
}

//Remove an object:
function removeObject(num) {
	object.splice(num, 1);
	total -= 1;
	objectsLeft = object.length;
	usedObjects.splice(0,usedObjects.length);
	document.getElementById("lblTotal").innerHTML = "Total: " + total;
	//Remove all the objects from the display and then add all of the ones back that have not been deleted.
	document.getElementById("divDisplay").innerHTML = "";
	for (i = 0; i < object.length; i++) {
		document.getElementById("divDisplay").innerHTML += "<div id='object" + i + "' class='object' onclick='removeObject(" + i + ")'>" + object[i] + "</div>";
	}
}

//Pick a random object and display it:
function randomObject() {
	//Declare and instantiate variables used for the random generator.
	var interval = 1/total;
	var usedObjects_str = usedObjects.toString();
	var tries = 0;
	//Test if all the objects have been used. If they have, reset the used objects list:
	if (objectsLeft === 0) {
		usedObjects.splice(0,usedObjects.length);
		usedObjects_str = "";
		objectsLeft = object.length;
	}
	testing = true;
	//If the length of the array is greater than 0 then it will run a while loop testing for the random value.
	//A while loop is necessary to prevent the holes from the missing values created by the used objects array.
	if (object.length > 0) {
		while (testing) {
			randomNum = Math.random();
			//For each interval it will test if the random generator 'picked' a value from the array.
			for (i = 1; i <= total; i++) {
				if (randomNum < (interval*i) && !usedObjects_str.includes(object[i-1])) {
					alert(object[i-1]);
					usedObjects.push(object[i-1]);
					objectsLeft -= 1;
					testing = false;
					break;
				}
			}
		}
	}
}
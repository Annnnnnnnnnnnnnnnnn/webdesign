const greeting = (message) => {
	alert('Good day!' + message);
}

// TASK 1
let task1Btn = document.querySelector(".task1-btn");
let answer = document.querySelector(".answer");

task1Btn.addEventListener('click', () => {
	let task1Input = document.querySelector(".input-number-1");

	
	let arrA = fillUpArr(task1Input.value);
	let arrB = createArrB(fillUpArr(task1Input.value));
	arrB = insertionSort(arrB);

	answer.innerHTML = `<h4>Start array: ${arrA}</h4><br> <h4>Final array: ${arrB}</h4>`;
	
});


const fillUpArr = (size) => {
	let arr = [];
	for (let a = 0; a < size; a++) {
		arr[a] = a + 1;
	}
	return arr;
}

const createArrB = (arr) => {

	let max = arr[arr.length - 1];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = max * arr[i];
	}

	return arr;
}

const insertionSort = (arr) => {
	for (let i = 1, l = arr.length; i < l; i++) {
		const current = arr[i];
		let j = i;
		while (j > 0 && arr[j - 1] < current) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = current;
	}
	return arr;
};


//TASK 2
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
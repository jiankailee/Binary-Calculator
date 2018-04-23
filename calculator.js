// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

//
var Calc = {

Model : {
	firstVal: 0,
 	memory:0,
	key: undefined,
	reset: false,
},


View : {
	textRow : {id: "textRow", type: "text", value: "", onclick:""},
	button7 : {id: "button7", type: "button", value: 7, onclick:""},
	button8 : {id: "button8", type: "button", value: 8, onclick:""},
	button9 : {id: "button9", type: "button", value: 9, onclick:""},
	button4 : {id: "button4", type: "button", value: 4, onclick:""},
	button5 : {id: "button5", type: "button", value: 5, onclick:""},
	button6 : {id: "button6", type: "button", value: 6, onclick:""},
	button1 : {id: "button1", type: "button", value: 1, onclick:""},
	button2 : {id: "button2", type: "button", value: 2, onclick:""},
	button3 : {id: "button3", type: "button", value: 3, onclick:""},
	buttonPlus : {id: "buttonPlus", type: "button", value:"+", onclick:""},
	buttonMinus : {id: "buttonMinus", type: "button", value:"-", onclick:""},
	buttonTimes : {id: "buttonTimes", type: "button", value:"*", onclick:""},
	buttonDivide : {id: "buttonDivide", type: "button", value:"/", onclick:""},
	button0 : {id: "button0", type: "button", value: 0, onclick:""},
	buttonDot : {id: "buttondOT", type: "button", value: ".", onclick:""},
	buttonEqual : {id: "buttonEqual", type: "button", value: "=", onclick:""},
	buttonC : {id: "buttonC", type: "button", value: "C", onclick:""},
	buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
	buttonMminus : {id: "buttonMminus", type: "button", value: "M-", onclick:""},
	buttonMadd : {id: "buttonMadd", type: "button", value: "M+", onclick:""},
	buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},

	 },

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
	var s;
	s = "<table id=\"myTable\" border=2>"
	s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.button7);
	s += Calc.displayElement(Calc.View.button8);
	s += Calc.displayElement(Calc.View.button9);
	s += Calc.displayElement(Calc.View.buttonPlus);
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.button4);
	s += Calc.displayElement(Calc.View.button5);
	s += Calc.displayElement(Calc.View.button6);
	s += Calc.displayElement(Calc.View.buttonMinus);
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.button1);
	s += Calc.displayElement(Calc.View.button2);
	s += Calc.displayElement(Calc.View.button3);
	s += Calc.displayElement(Calc.View.buttonTimes);
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.button0);
	s += Calc.displayElement(Calc.View.buttonDot);
	s += Calc.displayElement(Calc.View.buttonEqual);
	s += Calc.displayElement(Calc.View.buttonDivide);
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.buttonC);
	s += Calc.displayElement(Calc.View.buttonMR);
	s += Calc.displayElement(Calc.View.buttonMminus);
	s += Calc.displayElement(Calc.View.buttonMadd);
	s += "<tr><td>";
	s += Calc.displayElement(Calc.View.buttonMC);
	s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
	Calc.View.button7.onclick = "Calc.button7Handler(this)";
	Calc.View.button8.onclick = "Calc.button7Handler(this)";
	Calc.View.button9.onclick = "Calc.button7Handler(this)";
	Calc.View.button4.onclick = "Calc.button7Handler(this)";
	Calc.View.button5.onclick = "Calc.button7Handler(this)";
	Calc.View.button6.onclick = "Calc.button7Handler(this)";
	Calc.View.button1.onclick = "Calc.button7Handler(this)";
	Calc.View.button2.onclick = "Calc.button7Handler(this)";
	Calc.View.button3.onclick = "Calc.button7Handler(this)";
	Calc.View.button0.onclick = "Calc.button7Handler(this)";
	Calc.View.buttonDot.onclick = "Calc.button7Handler(this)";
	Calc.View.buttonDot.onclick = "Calc.button7Handler(this)";
	Calc.View.buttonPlus.onclick = "Calc.buttonKeyHandler(this)";
	Calc.View.buttonMinus.onclick = "Calc.buttonKeyHandler(this)";
	Calc.View.buttonDivide.onclick = "Calc.buttonKeyHandler(this)";
	Calc.View.buttonTimes.onclick = "Calc.buttonKeyHandler(this)";
	Calc.View.buttonEqual.onclick = "Calc.buttonEqualHandler(this)";
	Calc.View.buttonC.onclick = "Calc.buttonCHandler(this)";
	Calc.View.buttonMadd.onclick = "Calc.buttonMaddHandler(this)";
	Calc.View.buttonMR.onclick = "Calc.buttonMRHandler(this)";
	Calc.View.buttonMminus.onclick = "Calc.buttonMminusHandler(this)";
	Calc.View.buttonMC.onclick = "Calc.buttonMCHandler(this)";

},
changeColor: function(){
	document.getElementById('button9').style.color="black";
	document.getElementById('button8').style.color="black";
	document.getElementById('button7').style.color="black";
	document.getElementById('button6').style.color="black";
	document.getElementById('button5').style.color="black";
	document.getElementById('button4').style.color="black";
	document.getElementById('button3').style.color="black";
	document.getElementById('button2').style.color="black";
	document.getElementById('button1').style.color="black";
	document.getElementById('button0').style.color="black";
},

button7Handler : function(that) {
	Calc.changeColor();
	if(Calc.Model.reset){
  	document.getElementById("textRow").value="";
		Calc.Model.reset=false;
	}
  //alert("Hi");
  var textValue="";
  if(document.getElementById("textRow").value!=""){
	  textValue=document.getElementById("textRow").value;
		console.log("textValue: "+textValue);
  }
 document.getElementById("textRow").value=textValue+that.value;
 that.style.color="green";
 console.log("textbox: "+document.getElementById("textRow").value);
},

buttonKeyHandler: function(that){
	Calc.changeColor();
	console.log("textRow: "+document.getElementById("textRow").value);
	if(document.getElementById("textRow").value!=""){
		that.style.color="red";
	  Calc.Model.firstVal=document.getElementById("textRow").value;
		document.getElementById("textRow").value="";
		Calc.Model.key=that.value;
		console.log(Calc.Model.firstVal);
		console.log(Calc.Model.key);
		//Calc.Model.key=""
  }else{
		//console.log("that.value:"+that.value);
		document.getElementById("textRow").value=that.value;
		Calc.Model.reset=false;
	}
	// if(document.getElementById("textRow").value==""){
	// 	console.log("that.value:"+that.value);
	// 	document.getElementById("textRow").value=that.value;
	// }
},

buttonEqualHandler: function(that){
	Calc.changeColor();
	if(document.getElementById("textRow").value!=""){
	 var total;
	 var text=parseFloat(document.getElementById("textRow").value);
	 console.log("text:"+ text);
	 var old=parseFloat(Calc.Model.firstVal);
	 console.log("old:"+ old);
	 if(Calc.Model.key=="+"){
		 document.getElementById("buttonPlus").style.color="black";
		 total=text+old;
		 document.getElementById("textRow").value=total;
		 Calc.Model.reset=true;
	 }
	 if(Calc.Model.key=="-"){
		 document.getElementById("buttonMinus").style.color="black";
		 total=old-text;
		 console.log("total:"+total);
		 document.getElementById("textRow").value=total;
		 Calc.Model.reset=true;
	 }
	 if(Calc.Model.key=="*"){
		 document.getElementById("buttonTimes").style.color="black";
		 total=old*text;
		 document.getElementById("textRow").value=total;
		 Calc.Model.reset=true;
	 }
	 if(Calc.Model.key=="/"){
		 document.getElementById("buttonDivide").style.color="black";
		total=old/text;
		document.getElementById("textRow").value=total;
		Calc.Model.reset=true;
	}
 }
},
buttonCHandler: function(){
		document.getElementById("textRow").value="";
		Calc.Model.firstVal=0;
		Calc.Model.reset=true;
		Calc.Model.key="";
		Calc.changeColor();
		document.getElementById("buttonPlus").style.color="black";
		document.getElementById("buttonMinus").style.color="black";
		document.getElementById("buttonTimes").style.color="black";
		document.getElementById("buttonDivide").style.color="black";
},
buttonMaddHandler: function(){
	if(document.getElementById("textRow").value!=""){

		Calc.Model.memory+=parseFloat(document.getElementById("textRow").value);
		console.log("memory: "+Calc.Model.memory);
		Calc.Model.reset=true;
		//document.getElementById("textRow").value="";
	}
},
buttonMRHandler:function(){
	document.getElementById("textRow").value=Calc.Model.memory;
},
buttonMminusHandler:function(){
	if(document.getElementById("textRow").value!=""){

		Calc.Model.memory-=parseFloat(document.getElementById("textRow").value);
		console.log("memory: "+Calc.Model.memory);
		Calc.Model.reset=true;
		//document.getElementById("textRow").value="";
	}
},
buttonMCHandler:function(){
	Calc.Model.memory=0;
	console.log("memory: "+Calc.Model.memory);
}

} // end of Calc;

// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

//
var bCalc = {

Model : {
  firstVal: 0,
	key: undefined,
	reset: false,
},


View : {
	btextRow : {id: "btextRow", type: "text", value: "", onclick:""},
	bbutton1 : {id: "bbutton1", type: "button", value: 1, onclick:""},
  bbutton0 : {id: "bbutton0", type: "button", value: 0, onclick:""},
  bbuttonAdd : {id: "bbuttonAdd", type: "button", value: "+", onclick:""},
  bbuttonSub : {id: "bbuttonSub", type: "button", value: "-", onclick:""},
  bbuttonDivide : {id: "bbuttonDivide", type: "button", value: "/", onclick:""},
  bbuttonMulti : {id: "bbuttonMulti", type: "button", value: "*", onclick:""},
  bbuttonRemainder : {id: "bbuttonRemainder", type: "button", value: "%", onclick:""},
  bbuttonEqual : {id: "bbuttonEqual", type: "button", value: "=", onclick:""},
  bbuttonC : {id: "bbuttonC", type: "button", value: "C", onclick:""},
  bbuttonShiftLeft : {id: "bbuttonShiftLeft", type: "button", value: "<<", onclick:""},
  bbuttonShiftRight : {id: "bbuttonShiftRight", type: "button", value: ">>", onclick:""},
  bbuttonAND : {id: "bbuttonAND", type: "button", value: "&", onclick:""},
  bbuttonOR : {id: "bbuttonOR", type: "button", value: "|", onclick:""},
  bbuttonNOT : {id: "bbuttonNOT", type: "button", value: "~", onclick:""},
	 },

Controller : {

},

brun : function() {
  bCalc.battachHandlers();
  console.log(bCalc.bdisplay());
  return bCalc.bdisplay();
},


bdisplayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},
bdisplay : function() {
	var s;
	s = "<table id=\"myTable\" border=2>"
	s += "<tr><td>" + bCalc.bdisplayElement(bCalc.View.btextRow) + "</td></tr>";
	s += "<tr><td>";
	s += bCalc.bdisplayElement(bCalc.View.bbutton0);
  s += bCalc.bdisplayElement(bCalc.View.bbutton1);
  s += "<tr><td>";
  s += bCalc.bdisplayElement(bCalc.View.bbuttonAdd);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonSub);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonDivide);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonMulti);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonRemainder);
  s += "<tr><td>";
  s += bCalc.bdisplayElement(bCalc.View.bbuttonEqual);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonShiftLeft);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonShiftRight);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonC);
  s += "<tr><td>";
  s += bCalc.bdisplayElement(bCalc.View.bbuttonAND);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonOR);
  s += bCalc.bdisplayElement(bCalc.View.bbuttonNOT);
	s += "</tr></td></table>";
  return s;
},

battachHandlers : function() {
	bCalc.View.bbutton1.onclick = "bCalc.bbuttonHandler(this)";
  bCalc.View.bbutton0.onclick = "bCalc.bbuttonHandler(this)";
  bCalc.View.bbuttonAdd.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonSub.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonDivide.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonRemainder.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonEqual.onclick="bCalc.bbuttonEqualHandler(this)";
  bCalc.View.bbuttonC.onclick="bCalc.bbuttonCHandler(this)";
  bCalc.View.bbuttonShiftLeft.onclick="bCalc.bbuttonShiftLeftHandler(this)";
  bCalc.View.bbuttonShiftRight.onclick="bCalc.bbuttonShiftRightHandler(this)";
  bCalc.View.bbuttonAND.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonOR.onclick = "bCalc.bbuttonKeyHandler(this)";
  bCalc.View.bbuttonNOT.onclick = "bCalc.bbuttonNOTHandler(this)";
},
changeColor: function(){
	document.getElementById('bbutton1').style.color="black";
  document.getElementById('bbutton0').style.color="black";

},

bbuttonHandler : function(that) {
	bCalc.changeColor();
	if(bCalc.Model.reset){
  	document.getElementById("btextRow").value="";
		bCalc.Model.reset=false;
	}
  //alert("Hi");
  var textValue="";
  if(document.getElementById("btextRow").value!=""){
	  textValue=document.getElementById("btextRow").value;
		console.log("textValue: "+textValue);
  }
 document.getElementById("btextRow").value=textValue+that.value;
 that.style.color="green";
 console.log("btextbox: "+document.getElementById("btextRow").value);
},


bbuttonKeyHandler: function(that){
	bCalc.changeColor();
	console.log("textRow: "+document.getElementById("btextRow").value);
	if(document.getElementById("btextRow").value!=""){
		that.style.color="red";
	  bCalc.Model.firstVal=document.getElementById("btextRow").value;
		document.getElementById("btextRow").value="";
		bCalc.Model.key=that.value;
		console.log(bCalc.Model.firstVal);
		console.log(bCalc.Model.key);
		//Calc.Model.key=""
  }else{
		//console.log("that.value:"+that.value);
		document.getElementById("btextRow").value=that.value;
		bCalc.Model.reset=false;
	}

},
bbuttonEqualHandler: function(that){
  bCalc.changeColor();
	if(document.getElementById("btextRow").value!=""){
	 var total;
   var totalbinary;
   //console.log("equal first value:"+bCalc.Model.firstVal+"equal key:"+bCalc.Model.key);
   var secondN=document.getElementById("btextRow").value;
   //console.log("second "+secondN);
   var first=parseInt(bCalc.Model.firstVal,2);
   var second=parseInt(secondN,2);
   console.log("first: "+first+",second "+second);

    if(bCalc.Model.key=="+"){
      document.getElementById("bbuttonAdd").style.color="black";
      total=first+second;
      totalbinary=total.toString(2);
      document.getElementById("btextRow").value=totalbinary;
      bCalc.Model.reset=true;
    }
    if(bCalc.Model.key=="-"){
      document.getElementById("bbuttonSub").style.color="black";
      total=first-second;
      totalbinary=total.toString(2);
      document.getElementById("btextRow").value=totalbinary;
      bCalc.Model.reset=true;
    }
    if(bCalc.Model.key=="/"){
      document.getElementById("bbuttonDivide").style.color="black";
      total=first/second;
      totalbinary=total.toString(2);
      document.getElementById("btextRow").value=totalbinary;
      bCalc.Model.reset=true;
    }
    if(bCalc.Model.key=="%"){
      document.getElementById("bbuttonRemainder").style.color="black";
      if(first>=0&&second>=0){
        total=first%second;
        totalbinary=total.toString(2);
        document.getElementById("btextRow").value=totalbinary;
      }
      bCalc.Model.reset=true;
    }
    if(bCalc.Model.key=="&"){
      document.getElementById("bbuttonAND").style.color="black";
      total=first&second;
      totalbinary=total.toString(2);
      document.getElementById("btextRow").value=totalbinary;
      bCalc.Model.reset=true;
    }
    if(bCalc.Model.key=="|"){
      document.getElementById("bbuttonOR").style.color="black";
      total=first|second;
      totalbinary=total.toString(2);
      document.getElementById("btextRow").value=totalbinary;
      bCalc.Model.reset=true;
    }
	 }
},
changeKeycolor: function(){
  document.getElementById("bbuttonAdd").style.color="black";
  document.getElementById("bbuttonSub").style.color="black";
  document.getElementById("bbuttonDivide").style.color="black";
  document.getElementById("bbuttonAND").style.color="black";
  document.getElementById("bbuttonOR").style.color="black";
},
bbuttonCHandler: function(){
  bCalc.changeColor();
  document.getElementById("btextRow").value="";
  bCalc.Model.firstVal=0;
  bCalc.Model.reset=true;
  bCalc.Model.key="";
  bCalc.changeKeycolor();
},
bbuttonShiftLeftHandler: function(that){
  bCalc.changeColor();
  bCalc.changeKeycolor();
  var value=document.getElementById("btextRow").value;
  document.getElementById("btextRow").value=value+"0";
  //console.log();
  //console.log(value+"0");
},
bbuttonShiftRightHandler: function(){
    bCalc.changeColor();
    bCalc.changeKeycolor();
    var value=document.getElementById("btextRow").value;
    value=value.substring(0,value.length-1);
    document.getElementById("btextRow").value=value;
},
bbuttonNOTHandler:function(){
  bCalc.changeColor();
  bCalc.changeKeycolor();
  var value=document.getElementById("btextRow").value;
  var result="";
   for(var i=0;i<value.length;i++){
    if(value.charAt(i)=="0"){
      result=result+"1";
    }else{
      result=result+"0";
    }
    }
  document.getElementById("btextRow").value=result;
}

} // end of Calc;

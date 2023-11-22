/***************THIS SHOWS AND HIDES BEGINNING QUESTIONS******************/
function showMoreOptions() {
  var q2 = document.getElementById("question2");
  var q3 = document.getElementById("question3");
  var q4 = document.getElementById("question4");
  var q5 = document.getElementById("question5");
  var aaResult1 = document.querySelector(".result-display1");
  var aaResult2 = document.querySelector(".result-display2");
  if (document.getElementById("connection").value === "math") {
    q5.style.display = "none";
    q4.style.display = "none";
    q3.style.display = "none";
    q2.style.display = "block";
    aaResult1.style.display = "none";
    aaResult2.style.display = "none";
  } else if (document.getElementById("connection").value === "english") {
    q2.style.display = "none";
    q3.style.display = "block";
    q4.style.display = "none";
    q5.style.display = "none";
  } else if (document.getElementById("connection").value == "science") {
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "block";
    q5.style.display = "none";
  }else if (document.getElementById("connection").value == "compsci"){
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "block";
  }
  else {
    q3.style.display = "none";
    q2.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
  }
}
/*******THIS SHOWS USER WANTS General Resources OR NOT******/
function phoneControlSelect() {
  var connectionValue = document.getElementById("connection").value;
  var qE = document.getElementById("qEnglish").value;
  var qM = document.getElementById("qMath").value;
  var qS = document.getElementById("qScience").value;
  var qCS = document.getElementById("qCompsci").value;
  var waitingElement1 = document.getElementById("waiting-result-display1").value;
  var waitingElement2 = document.getElementById("waiting-result-display2").value;
  var waitingElement3 = document.getElementById("waiting-result-display3").value;
  var waitingElement4 = document.getElementById("waiting-result-display4").value;
  var waitingElement5 = document.getElementById("waiting-result-display5").value;
  var waitingElement6 = document.getElementById("waiting-result-display6").value;
  var waitingElement7 = document.getElementById("waiting-result-display7").value;
  var waitingElement8 = document.getElementById("waiting-result-display8").value;  
 
    if (qM === "yes") {
      waitingElement1.style.display = "none";
      waitingElement2.style.display = "block";
    } else {
      waitingElement1.style.display = "block";
      waitingElement2.style.display = "none";
    }
    
    if (qE === "yes") {
      waitingElement3.style.display = "none";
      waitingElement4.style.display = "block";
    } else if (qE === "no") {
      waitingElement3.style.display = "block";
      waitingElement4.style.display = "none";
    }
  
    if (qS === "yes") {
      waitingElement5.style.display = "none";
      waitingElement6.style.display = "block";
    } else if (qS === "no") {
      waitingElement5.style.display = "block";
      waitingElement6.style.display = "none";
    }
  
    if (qCS === "yes") {
      waitingElement7.style.display = "none";
      waitingElement8.style.display = "block";
    } else if (qCS === "no") {
      waitingElement7.style.display = "block";
      waitingElement8.style.display = "none";
    }
  
  }

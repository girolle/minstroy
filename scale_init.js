var windowHeight =  document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;

var quizWidth;
if (windowWidth > 1000) {quizWidth =  "1000px";}
else {quizWidth = (windowWidth) + "px";}

var h1Size;
if (parseInt(quizWidth) / 15 > 30 ) {h1Size = 30 + "px";}
else {h1Size = (parseInt(quizWidth) / 20) + "px";}

for (let j = 0; j < 8; j+=1) {
	$("#q" + j)[0].style.width = quizWidth;
	$("#a" + j)[0].style.width = quizWidth;

}

$("#finish")[0].style.width = quizWidth;

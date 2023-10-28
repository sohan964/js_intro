console.log("this is from eventjs");
 //option2
 const makeBlueback = document.getElementById('make-blue');
 makeBlueback.onclick = makeblue;
 function makeblue() {
     document.body.style.backgroundColor = 'blue';
 }

 //option1
 function makeRed() {
     document.body.style.backgroundColor = 'red';
 }

 //option3
 const purpleB = document.getElementById('make-purple');
 purpleB.onclick = function purpleBg(){
     document.body.style.backgroundColor = 'purple';
 }

 //option4
 const pinkButton = document.getElementById('make-pink');
 //new keyword
 pinkButton.addEventListener('click',makePink);
 function makePink(){
     document.body.style.backgroundColor = 'pink';
 }
 
 //option5 mostly need to use
 document.getElementById('make-goldenrod').addEventListener('click', function(){
     document.body.style.backgroundColor = 'goldenrod';
 })

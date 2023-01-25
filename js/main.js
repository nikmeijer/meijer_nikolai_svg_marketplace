console.log('JavaScript is running!');

const cat1= document.querySelector('#cat1');
const cat2= document.querySelector('#cat2');
const cat3= document.querySelector('#cat3');
const cat4= document.querySelector('#cat4');
const cat5= document.querySelector('#cat5');
const cat6= document.querySelector('#cat6');
const cat7= document.querySelector('#cat7');
const cat8= document.querySelector('#cat8');
const cat9= document.querySelector('#cat9');
const cat10= document.querySelector('#cat10');

function logID() {
    console.log('clicked on this element', this.id)
}

cat1.addEventListener('click', logID);
cat2.addEventListener('click', logID);
cat3.addEventListener('click', logID);
cat4.addEventListener('click', logID);
cat5.addEventListener('click', logID);
cat6.addEventListener('click', logID);
cat7.addEventListener('click', logID);
cat8.addEventListener('click', logID);
cat9.addEventListener('click', logID);
cat10.addEventListener('click', logID);
console.log('JavaScript is running!');

const cat1= document.querySelector('#cat1');

function logID() {
    console.log('clicked on this element', this.id)
}

cat1.addEventListener('click', logID);
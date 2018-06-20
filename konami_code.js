const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;
const body = document.querySelector('body');

function init(e) {

}
//var e = body.addEventListener()

body.addEventListener('keydown', (e) => {
  debugger;
  const key = e.key;
  
  if (key === codes[index]){
    index++;
    
    if (index === codes.length){
      alert('Success!');
      
      index = 0;
    }
  } else {
    index = 0;
  }
  
} );

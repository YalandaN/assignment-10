let button = document.querySelector('button');
let over = document.querySelector('.over');

over.style.display = 'none';
button.onclick = () => {
  if (over.style.display === 'none') {
    over.style.display = 'block';
  } else {
    over.style.display = 'none';
  }
};

//
gate.onclick = () => {
  if (gate.getAttribute('src') === 'images/gatekeeper.jpeg')
   {
     gate.setAttribute('src', 'images/new_overview.jpeg');
   } else {
     gate.setAttribute('src', 'images/gatekeeper,jpeg');
   }
}//

const div = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = 'Hey I\'m red';
redText.setAttribute('style', 'color: red;')
div.appendChild(redText);

const blueh3 = document.createElement('h3');
blueh3.textContent = 'I\'m a blue h3!';
blueh3.setAttribute('style', 'color: blue;');
div.appendChild(blueh3);

const blackdiv = document.createElement('div');
blackdiv.setAttribute('style', 'border: 1px solid black; background-color: pink;');

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
blackdiv.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
blackdiv.appendChild(p);

div.appendChild(blackdiv);



const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");
/** 
btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});
*/
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});
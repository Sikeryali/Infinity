const form = document.querySelector('#form');
const content = document.querySelector('#content');
const age = prompt('How old are you');

if(age > 19) {
  
   content.style.display = 'block';
   let name = prompt('what is your name');
   document.querySelector('.message').innerHTML = "Welcome " + name + " to something really cool";
   document.querySelector('#enter'). className = 'granted';
} else {
 
   window.alert('You are not old enough, sorry ');
   window.location.replace("404 error");
   content.style.display = 'none';
   document.querySelector('#enter'). className = 'undenied';
 
}

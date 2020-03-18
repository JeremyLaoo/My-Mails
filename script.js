// getElementByTagName permet d'accéder au texte 
var messagesCount = document.getElementsByTagName('p').length

console.log('messagesCount :', messagesCount);
// Le console.log va s'afficher sur la console du navigateur 

// Le .textContent permet de modifier le texte sur lequel on accede ici "count"
document.getElementById('count').textContent = messagesCount;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
// Mécanique qui permet de capter le click sur le picto 'trash'
document.getElementsByClassName('trash')[i].addEventListener("click",
 function(){
  console.log("clic détecté !");
  this.parentNode.remove()
  var messagesCount = document.getElementsByTagName('p').length
  document.getElementById('count').textContent = messagesCount;
 }
);
}

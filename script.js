// getElementByTagName permet d'accéder au texte 
var messagesCount = document.getElementsByTagName('p').length

console.log('messagesCount :', messagesCount);
// Le console.log va s'afficher sur la console du navigateur 

// Le .textContent permet de modifier le texte sur lequel on accede ici "count"
document.getElementById('count').textContent = messagesCount;


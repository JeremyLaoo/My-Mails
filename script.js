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
// On capte le Click, on supprime l'élément parent de la cible, ici la poubelle donc parent = la div et on recompte dans la fonction pour mettre à jour le compteur

document.getElementById('button').addEventListener("click",
 function(){
  console.log("clic détecté !");
//   .value recupère la valeur du champs input
  var newMessage = document.getElementById('input').value
  console.log('newMessage :', newMessage);

  var newDiv = document.createElement('div');
  newDiv.className = "profil";
  document.body.appendChild(newDiv);

  var image = document.createElement('img');
  image.className = "avatar";
  image.src = "avatar-1.jpg";
  newDiv.appendChild(image);

  var nameMessageDiv = document.createElement('div');
  nameMessageDiv.className = "body";
  newDiv.appendChild(nameMessageDiv);

  var title = document.createElement('h4');
  title.className = "title";
  title.textContent = newMessage ;  
  nameMessageDiv.appendChild(title);

  var desc = document.createElement('p');
  desc.textContent = "Ici c'est Paris";
  nameMessageDiv.appendChild(desc);

  var trashPicto = document.createElement('img');
  trashPicto.className = "trash";
  trashPicto.src = "trash.png";
  newDiv.appendChild(trashPicto);

  var messagesCount = document.getElementsByTagName('p').length
  document.getElementById('count').textContent = messagesCount;

  document.getElementById('input').value = "";

  trashPicto.addEventListener('click', 
  function(){
        console.log("click ok")
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length
        document.getElementById('count').textContent = messagesCount;
  })
  
 }
 );

//  document.getElementsByClassName('trash').addEventListener("click", 
//   function(){
//       console.log("clic ok");
//   })


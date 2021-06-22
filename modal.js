
/*fonction faisant apparaitre le menu de nav et le changeant de couleur 
au clique sur la partie mobile*/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById ("last");
const birthdate = document.getElementById ("birthdate");
const input = document.getElementsByName("form");
const  p = document.createElement("p");
const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const nameReg = new RegExp(/[a-zA-Z]{2,10}/);
const email = document.getElementById("email");
const quantityReg = new RegExp(/[0-9]/);
const quantity = document.getElementById("quantity");
const btn= document.getElementsByClassName("btn-submit");
const checkTown = document.querySelectorAll("input[type='radio']");
const town = document.getElementById ("town");
const confirmBg=document.querySelector(".launch-confirm");
const checkBox=document.getElementById("checkbox1");
const validateBtn=document.getElementById("btn-validate");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close  modal form
function closeModal () {  
  modalbg.style.display ="none"; 
}

// launch page confirm 
function launchConfirm () {
  confirmBg.style.display ="block";
}

//close page confirm
function closeConfirm () {
  confirmBg.style.display ="none";  
}

//fonction validation des input au moment du remplissage 
function validate (nomclasse,regle, msg, distMargin) {

nomclasse.addEventListener ('input', (e) => {
    
  if (regle.test(e.target.value) && nomclasse.value!="")  {
    nomclasse.style.border="2px solid green"; 
    p.parentNode.removeChild(p);  }
   else {
    nomclasse.style.border="2px solid #e54858";
    nomclasse.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.5em";
    p.style.padding="0";
    p.innerHTML=msg;
    p.style.marginBottom= distMargin+ "em";
    
   }
})  }

validate (firstName, nameReg, "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.","-3");
validate (lastName, nameReg, "Veuillez entrer 2 caractères ou plus pour le champ du nom.","-3");
validate (email, emailReg,"Merci d'enregistrer une adresse email valide" ,"-3");
validate (quantity, quantityReg, "","0");


//fonction validation des conditions pour envoyé le formulaire

function validateNameForm (nomclasse, distMargin) {
  if ( nomclasse.value == "" ) {
  nomclasse.insertAdjacentElement("afterend", p);
  p.style.color="#e54858";
  p.style.fontSize="0.5em";
  p.innerHTML="Le champ ne peut pas être vide";   
  p.style.marginBottom=distMargin+ "em";
  p.style.padding="0";
  
  return false;
}

}
birthdate.addEventListener ('input', (e) => {
    
  if (birthdate!=="")  {
    birthdate.style.border="2px solid green"; 
    p.parentNode.removeChild(p);  }
  
})  

//fonction de validation pour choix de la ville
let tempDiv = document.createElement('div')

function validateTown () {
  
  for (let i=0; i<checkTown.length;i++) {
    
    if(checkTown[i].checked == true) {  
      tempDiv.style.visibility="hidden";
      console.log(checkTown[i].value);        
   return true;  
    }     
  }
  
  checkBox.insertAdjacentElement("beforebegin", tempDiv);
  tempDiv.innerHTML="Veuillez choisir une ville";
  tempDiv.style.color="#e54858";
  tempDiv.style.fontSize="0.5em";
  
  return false;
}


// fonction validation des conditions d'utilisation
function validateCheckbox () {
  if (checkBox.checked==false)
  {validateBtn.insertAdjacentElement("beforebegin", p);
  p.style.color="#e54858";
  p.style.fontSize="0.5em";
  p.style.marginBottom="2em";
  p.innerHTML="Merci de lire et d'accepter les conditions d'utilisations"; 
 return false; }
 
 

}
//fonction d'envoi du formulaire
function validateForm () {
 
  if (    
  validateNameForm (firstName, -3)==false ||
  validateNameForm (lastName, -3)==false ||
  validateNameForm (email, -3)==false ||
  validateNameForm (birthdate, -2)==false ||
  validateNameForm (quantity, 0)==false ||
  validateTown () == false  ||
  validateCheckbox () ==false   ) 
  {return false}  
  

 else {
closeModal();
launchConfirm();
return false;
  
}}




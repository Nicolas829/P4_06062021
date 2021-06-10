
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
const input = document.getElementsByName("form");
const  p = document.createElement("p");
const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const nameReg = new RegExp(/[a-zA-Z]{2,500}/);
const email = document.getElementById("email");
const quantityReg = new RegExp(/[0-9]/);
const quantity = document.getElementById("quantity");
const btn= document.getElementsByClassName("btn-submit");
const check = document.getElementsByClassName('checkbox-input');
const town= document.getElementById("town");
const location1=document.getElementById("location1");
const location2=document.getElementById("location2");
const location3=document.getElementById("location3");
const location4=document.getElementById("location4");
const location5=document.getElementById("location5");
const location6=document.getElementById("location6");
const confirmBg=document.querySelector(".launch-confirm");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal () {  
  modalbg.style.display ="none";
 
}

// launch confirm 
function launchConfirm () {
  confirmBg.style.display ="block";
}

//close confirm

function closeConfirm () {
  confirmBg.style.display ="none";
  
}


firstName.addEventListener ('input', (e) => {
    
  if (nameReg.test(e.target.value))  {
    firstName.style.border="2px solid green"; 
    p.parentNode.removeChild(p);  }
   else {
    firstName.style.border="2px solid #e54858";
    firstName.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    p.style.marginBottom="-2em";
    
   }
})      

lastName.addEventListener ('input', (e) => {
    
  if (nameReg.test(e.target.value))  {
    lastName.style.border="2px solid green"; 
    p.parentNode.removeChild(p);
    }
   else {
    lastName.style.border="2px solid #e54858";
    lastName.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";   
    p.style.marginBottom="-2em";
    
   }
})      

email.addEventListener('input', (e) => {

  if (emailReg.test(e.target.value)) {
    email.style.border="2px solid green"; 
    p.parentNode.removeChild(p);
  }
  else {
    email.style.border="2px solid #e54858";
    email.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Merci d'enregistrer une adresse email valide";   
    p.style.marginBottom="-2em";
  }
})

quantity.addEventListener ('input', (e) => {
    
  if (quantityReg.test(e.target.value))  {
    quantity.style.border="2px solid green"; 
    p.parentNode.removeChild(p);  }
   
})    



function validate () {
  if ( firstName.value == "" ) {
    firstName.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Le champ prénom ne peut pas être vide";   
    p.style.marginBottom="-2em";
    return false;
  }
  if ( lastName.value == "" ) {
    lastName.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Le champ nom ne peut pas être vide";   
    p.style.marginBottom="-2em";
    return false;
  }
  if ( email.value == "" ) {
    email.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.innerHTML="Le champ email ne peut pas être vide";   
    p.style.marginBottom="-2em";
    return false;
  }
  if ( quantity.value == "" ) {
    quantity.insertAdjacentElement("afterend", p);
    p.style.color="#e54858";
    p.style.fontSize="0.6em";
    p.style.marginLeft="10em";
    p.innerHTML="Merci de nous indiquer un nombre";   
   
    return false;
  }
  else {
closeModal();
launchConfirm();
return false;
  
}}



//"[a-zA-Z]{2,500}"
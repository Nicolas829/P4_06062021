
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




  function verification () {
    var x = document.getElementsByClassName(".formData");
      
    if (x = ("[a-zA-Z]{2,500}")) {
               
        x= ".formData";
  }
    else {
      x = ".formData [data-error-visible="true"] ::after";
    }
  }



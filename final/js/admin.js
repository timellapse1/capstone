// drop-down
  function toggleDropdown() {
      var dropdownItems = document.getElementById("dropdownItems");
      if (dropdownItems.style.display === "none") {
        dropdownItems.style.display = "block";
      } else {
        dropdownItems.style.display = "none";
      }
    }




// side-bar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";  
  document.getElementById("main-content").style.marginLeft = "250px";
  document.getElementById("main").style.display="none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";  
  document.getElementById("main").style.display="block";  
}
    



// add movie modal

const modals = document.querySelector('.set-pass');
let isModalOpen = false;

function modal(){
    if(!isModalOpen){
        isModalOpen= true;
        modals.style.display = 'flex';
    }else{
        isModalOpen= false;
        modals.style.display = 'none';
    }
}

const mods = document.querySelector('.cont-modal')
let isContModal = false;
function openModal() {
  if(!isContModal){
    isContModal = true;
    mods.style.display = 'flex';
  }else{
    isContModal = false;
    mods.style.display = 'none';
  }
}

function closeModal() {
  document.getElementById("modalBackground").style.display = "none";
  // Clear the selected file and the displayed image
  document.getElementById("fileInput").value = "";
  document.getElementById("imageContainer").innerHTML = "";
}

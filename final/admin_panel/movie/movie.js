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
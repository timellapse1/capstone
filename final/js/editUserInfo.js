// Variables
let isEditing = false;
const actions = document.querySelector('.actions');
const actions_hid = document.querySelector('.actions-hid');
const inputElements = document.querySelectorAll('input');
const pass = document.getElementById('pass');

function onEdit(){
    if (!isEditing){
        isEditing = true;
        actions_hid.style.display = 'flex';
        actions.style.display = 'none';
        inputElements.forEach((input) => {
            input.disabled = false;
        })
        pass.disabled = true;
    }else{
        isEditing = false;
        actions_hid.style.display = 'none';
        actions.style.display = 'flex';
        inputElements.forEach((input) => {
            input.disabled = true;
        })
        pass.disabled = true;

    }
}

function cancelEdit(){
    if(isEditing){
        isEditing = false;
        actions_hid.style.display = 'none';
        actions.style.display = 'flex'
        inputElements.forEach((input) => {
            input.disabled = true;
        })
    }else{
        isEditing = true;
        actions_hid.style.display = 'flex';
        actions.style.display = 'none'
        inputElements.forEach((input) => {
            input.disabled = false;
        })
    }
}

// Modal

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


// change img

function openModal() {
    document.getElementById("modalBackground").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modalBackground").style.display = "none";
    // Clear the selected file and the displayed image
    document.getElementById("fileInput").value = "";
    document.getElementById("imageContainer").innerHTML = "";
  }

  function displayImage(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
      };
      reader.readAsDataURL(file);
    }
  }


//  DRAG AND DROP

    // Function to allow drop
    function allowDrop(event) {
        event.preventDefault();
      }
  
      // Function to handle the dropped files
      function handleDrop(event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
      }
  
      // Function to handle the selected files (in case user clicks to browse)
      function handleFileSelect(event) {
        const files = event.target.files;
        handleFiles(files);
      }
  
      // Function to handle the files (you can customize this part)
      function handleFiles(files) {
        const fileDisplayArea = document.getElementById('dropArea');
        fileDisplayArea.innerHTML = ""; // Clear previous content
  
        for (const file of files) {
          const fileItem = document.createElement('p');
          fileItem.textContent = `File name: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`;
          fileDisplayArea.appendChild(fileItem);
        }
      }
  
      // Event listener for input file element (for clicking to select files)
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.style.display = 'none';
      inputElement.addEventListener('change', handleFileSelect);
      document.body.appendChild(inputElement);
  
      // Click the hidden input element when the drop area is clicked
      const dropArea = document.getElementById('dropArea');
      dropArea.addEventListener('click', () => {
        inputElement.click();
      });
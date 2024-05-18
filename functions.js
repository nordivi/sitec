window.onscroll = function() {myFunction()};
        
let header = document.getElementById("tabs-div");
let sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > 90) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const chBoxes = 
            document.querySelectorAll('.dropdown-menu input[type="checkbox"]'); 
        const dpBtn =  
            document.getElementById('multiSelectDropdown'); 
        let mySelectedListItems = []; 
  
        function handleCB() { 
            mySelectedListItems = []; 
            let mySelectedListItemsText = ''; 
  
            chBoxes.forEach((checkbox) => { 
                if (checkbox.checked) { 
                    mySelectedListItems.push(checkbox.value); 
                    mySelectedListItemsText += checkbox.value + ', '; 
                } 
            }); 
  
            dpBtn.innerText = 
                mySelectedListItems.length > 0 
                    ? mySelectedListItemsText.slice(0, -2) : 'Select'; 
        } 
  
        chBoxes.forEach((checkbox) => { 
            checkbox.addEventListener('change', handleCB); 
        }); 
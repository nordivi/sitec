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

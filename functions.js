window.onscroll = function() {myFunction()};
        
var header = document.getElementById("tabs-div");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
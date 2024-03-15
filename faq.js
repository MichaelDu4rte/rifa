var acc = document.getElementsByClassName("accordion");
var i;

//scrolling through my FAQs and opening them
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    // If I clicked on the FAQ and it is open, then I should close it
    if (pannel.style.display === "block") {
      pannel.style.display = "none";

    } else { // else, open faq
      pannel.style.display = "block";
    }
  });
}
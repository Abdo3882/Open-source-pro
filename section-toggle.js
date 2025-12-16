const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  const card = section.querySelector(".section__title");
  card.addEventListener("click", () => {
    sections.forEach((item) => {
      if(item !== section) {
        item.classList.remove("show-text");
      }
    });
    section.classList.toggle("show-text");
  });

});


// Said Makes Editings 

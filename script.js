document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove active class from all links and hide all contents
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((content) => (content.style.display = "none"));
  
        // Add active class to the clicked tab and show corresponding content
        this.classList.add("active");
        const tab = this.getAttribute("data-tab");
        document.getElementById(tab).style.display = "block";
      });
    });
  
    // Display the first tab by default
    document.querySelector(".tab-link.active").click();
  });
  
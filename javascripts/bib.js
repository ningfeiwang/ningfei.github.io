document.addEventListener("DOMContentLoaded", function() { // Ensure DOM is fully loaded
    var bibtexLinks = document.querySelectorAll(".fakelink");
    
    bibtexLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var bibContent = this.nextElementSibling;
            if (bibContent.style.display === "none") {
                bibContent.style.display = "block";
            } else {
                bibContent.style.display = "none";
            }
        });
    });
});
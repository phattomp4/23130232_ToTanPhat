document.addEventListener('DOMContentLoaded', function () {
    var accButtons = document.querySelectorAll('.accordion-button');
    
    accButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the active class
            this.classList.toggle('active');
            
            // Get the corresponding accordion content
            var content = this.nextElementSibling;
            
            // If the content is not open, expand it
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Close all other accordions
                var allContents = document.querySelectorAll('.accordion-content');
                allContents.forEach(function (el) {
                    el.style.maxHeight = null;
                });
                
                // Open the current accordion
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

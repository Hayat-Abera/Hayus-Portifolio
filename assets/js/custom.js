document.addEventListener('DOMContentLoaded', function() {
    // 1. Select all sections and all nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 2. Function to check scroll position and update links
    const updateActiveLink = () => {
        // Get current scroll position from the top of the viewport
        let currentScroll = window.scrollY;
        
        // Loop through each section
        sections.forEach(section => {
            // Check if the section is currently in the viewport
            // The '-150' offset is a common practice to make the link
            // become active a little *before* the section hits the very top.
            const sectionTop = section.offsetTop - 150; 
            const sectionBottom = sectionTop + section.offsetHeight;
            
            const targetId = section.getAttribute('id');

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                // Remove 'active' from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' to the link that matches the current section's ID
                document.querySelector(`.nav-link[href="#${targetId}"]`).classList.add('active');
            }
        });
    };

    // 3. Attach the function to the scroll event
    window.addEventListener('scroll', updateActiveLink);
    
    // 4. Run once on load to set the initial active link
    updateActiveLink(); 
});
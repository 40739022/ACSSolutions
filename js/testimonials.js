// Testimonials Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonialForm = document.getElementById('testimonialForm');
    const ratingStars = document.querySelectorAll('.rating-input i');
    const ratingInput = document.getElementById('rating');
    
    if (!testimonialForm) return;
    
    // Rating stars functionality
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;
            
            // Update star display
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('fas');
                    s.classList.add('active');
                    s.classList.remove('far');
                } else {
                    s.classList.add('far');
                    s.classList.remove('fas');
                    s.classList.remove('active');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseover', function() {
            const hoverRating = parseInt(this.getAttribute('data-rating'));
            
            ratingStars.forEach((s, index) => {
                if (index < hoverRating) {
                    s.classList.add('fas');
                    s.classList.remove('far');
                } else {
                    s.classList.add('far');
                    s.classList.remove('fas');
                }
            });
        });
        
        // Remove hover effect
        star.addEventListener('mouseout', function() {
            const currentRating = parseInt(ratingInput.value) || 0;
            
            ratingStars.forEach((s, index) => {
                if (index < currentRating) {
                    s.classList.add('fas');
                    s.classList.add('active');
                    s.classList.remove('far');
                } else {
                    s.classList.add('far');
                    s.classList.remove('fas');
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Testimonial form submission
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const name = this.querySelector('#name').value.trim();
        const company = this.querySelector('#company').value.trim();
        const position = this.querySelector('#position').value.trim();
        const project = this.querySelector('#project').value.trim();
        const rating = this.querySelector('#rating').value;
        const testimonial = this.querySelector('#testimonial').value.trim();
        
        if (!name || !company || !position || !project || !rating || !testimonial) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (parseInt(rating) === 0) {
            alert('Please provide a rating');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message and reset the form
        
        alert('Thank you for your testimonial! It will be reviewed before being published.');
        this.reset();
        
        // Reset stars
        ratingStars.forEach(star => {
            star.classList.add('far');
            star.classList.remove('fas');
            star.classList.remove('active');
        });
        ratingInput.value = '0';
    });
});
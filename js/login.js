// Login Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    if (!tabButtons.length) return;
    
    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Forgot password link
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Switch to reset password tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="reset"]').classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === 'reset') {
                    content.classList.add('active');
                }
            });
        });
    }
    
    // Form validation for login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#loginEmail').value.trim();
            const password = this.querySelector('#loginPassword').value.trim();
            
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            // Simple email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would authenticate with a server here
            // For this demo, we'll just show a success message
            alert('Login successful! Redirecting to customer portal...');
            // window.location.href = 'dashboard.html'; // Redirect to dashboard in a real app
        });
    }
    
    // Form validation for registration form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#regName').value.trim();
            const email = this.querySelector('#regEmail').value.trim();
            const company = this.querySelector('#regCompany').value.trim();
            const phone = this.querySelector('#regPhone').value.trim();
            const password = this.querySelector('#regPassword').value;
            const confirmPassword = this.querySelector('#regConfirmPassword').value;
            const terms = this.querySelector('input[name="terms"]').checked;
            
            if (!name || !email || !company || !phone || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 8) {
                alert('Password must be at least 8 characters long');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Registration successful! You can now login with your credentials.');
            
            // Switch to login tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="login"]').classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === 'login') {
                    content.classList.add('active');
                }
            });
            
            this.reset();
        });
    }
    
    // Form validation for password reset form
    const resetForm = document.getElementById('resetForm');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#resetEmail').value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send a reset link to the email
            alert('If an account exists with this email, a password reset link has been sent.');
            this.reset();
        });
    }
});
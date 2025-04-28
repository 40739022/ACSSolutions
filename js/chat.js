// Live Chat Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.querySelector('.chat-widget');
    const chatToggle = document.querySelector('.chat-toggle');
    const chatBody = document.querySelector('.chat-body');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    
    if (!chatWidget) return;
    
    // Toggle chat widget
    chatToggle.addEventListener('click', function() {
        chatWidget.classList.toggle('active');
    });
    
    // Sample automated response
    const automatedResponses = [
        "Hello! How can we help you today?",
        "Our support team is available 24/7 to assist you.",
        "Could you provide more details about your question?",
        "Thank you for contacting ACE Solutions!",
        "We'll connect you with a specialist shortly."
    ];
    
    // Send message function
    function sendMessage(message, isUser = true) {
        if (!message.trim()) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(isUser ? 'user' : 'agent');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // If user message, send automated response after delay
        if (isUser) {
            setTimeout(() => {
                const randomResponse = automatedResponses[Math.floor(Math.random() * automatedResponses.length)];
                sendMessage(randomResponse, false);
            }, 1000);
        }
    }
    
    // Send button click event
    chatSendBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
        }
    });
    
    // Enter key event
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message);
                chatInput.value = '';
            }
        }
    });
    
    // Initial greeting
    setTimeout(() => {
        sendMessage("Welcome to ACE Solutions! How can we help you today?", false);
    }, 1000);
});
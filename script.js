// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const loadingScreen = document.getElementById('loadingScreen');
    const apiKeyModal = document.getElementById('apiKeyModal');
    const closeModal = document.getElementById('closeModal');
    const saveApiKeyBtn = document.getElementById('saveApiKey');
    const apiKeyInput = document.getElementById('apiKeyInput');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Theme toggle
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // Toggle sidebar
    toggleSidebarBtn.addEventListener('click', function() {
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        apiKeyModal.classList.remove('active');
    });

    // Save API key
    saveApiKeyBtn.addEventListener('click', function() {
        const apiKey = apiKeyInput.value.trim();
        if (apiKey) {
            localStorage.setItem('apiKey', apiKey);
            apiKeyModal.classList.remove('active');
            showLoading();
            setTimeout(() => {
                hideLoading();
                showWelcomeMessage();
            }, 1000);
        } else {
            alert('Silakan masukkan API Key Anda');
        }
    });

    // Check if API key exists
    if (!localStorage.getItem('apiKey')) {
        apiKeyModal.classList.add('active');
    } else {
        showLoading();
        setTimeout(() => {
            hideLoading();
            showWelcomeMessage();
        }, 1000);
    }

    // Show loading screen
    function showLoading() {
        loadingScreen.style.display = 'flex';
    }

    // Hide loading screen
    function hideLoading() {
        loadingScreen.style.display = 'none';
    }

    // Show welcome message
    function showWelcomeMessage() {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'message';
        welcomeMessage.innerHTML = `
            <div class="message-avatar">
                <span>🤖</span>
            </div>
            <div class="message-content">
                <div class="message-header">
                    <strong>SantriAI</strong>
                    <span class="message-time">Online</span>
                </div>
                <div class="message-text">
                    <p>API Key berhasil disimpan! 😊</p>
                    <p>SantriAI siap membantu Anda belajar ilmu Islam dengan adab yang baik.</p>
                    <p>Silakan ketik pertanyaan Anda di bawah ini.</p>
                </div>
            </div>
        `;
        chatMessages.appendChild(welcomeMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle message submission
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addUserMessage(message);
            
            // Simulate AI response
            showLoading();
            setTimeout(() => {
                hideLoading();
                addAIMessage(message);
            }, 1000);
            
            messageInput.value = '';
        }
    });

    // Add user message
    function addUserMessage(message) {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-content" style="text-align: right;">
                <div class="message-text" style="background: var(--primary-green); color: white; margin-left: auto;">
                    ${message}
                </div>
            </div>
        `;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add AI message
    function addAIMessage(message) {
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message';
        aiMessage.innerHTML = `
            <div class="message-avatar">
                <span>🤖</span>
            </div>
            <div class="message-content">
                <div class="message-header">
                    <strong>SantriAI</strong>
                    <span class="message-time">Online</span>
                </div>
                <div class="message-text">
                    <p>Anda bertanya: "${message}"</p>
                    <p>Maaf, fitur ini masih dalam pengembangan. Silakan gunakan API Key OpenAI Anda untuk mendapatkan jawaban lengkap.</p>
                    <p>Terima kasih atas pengertiannya! 😊</p>
                </div>
            </div>
        `;
        chatMessages.appendChild(aiMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

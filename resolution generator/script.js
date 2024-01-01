document.addEventListener('DOMContentLoaded', function () {
    const resolutions = {
        programming: [
            "Learn a new programming language 🚀",
            "Contribute to an open-source project on GitHub 🤝",
            "Build a personal website or portfolio 💻",
            "Explore machine learning and AI 🤖",
            "Master a new framework or library 🛠️",
            "Participate in a coding competition 🏁",
            "Start a coding blog or YouTube channel 📝",
            "Create a mobile app 📱",
            "Learn about cybersecurity and ethical hacking 🔐",
            "Collaborate on a group project with other developers 👥",
            "Improve coding efficiency by mastering keyboard shortcuts ⌨️",
            "Become a mentor or coach for aspiring developers 👩‍💻👨‍💻",
            "Contribute to documentation or write technical articles 📚",
            "Automate a repetitive task with scripting 🤖",
            "Explore cloud computing platforms like AWS, Azure, or GCP ☁️",
            "Join a tech community or forum to connect with other developers 🌐",
            "Attend a tech conference or meetup for networking 🚀",
            "Experiment with graphics programming or game development 🎮",
            "Create a chatbot or voice-controlled application 🤖🗣️",
            "Learn about DevOps practices and tools 🛠️🚀",
        ],
        challenge: [
            "Solve a coding puzzle every day 🧩",
            "Build a project using a technology you're not familiar with 🚧",
            "Complete a coding challenge on a competitive programming platform 🏆",
            "Implement a data structure from scratch 📊",
            "Optimize the performance of an existing project ⚙️",
            "Create a command-line interface (CLI) tool ⌨️🔧",
            "Solve a real-world problem with code 🌍",
            "Refactor an old project to follow best practices 🔄",
            "Participate in a hackathon 🏅",
            "Build a web application using a serverless architecture ⚡",
            "Create a game with unique and challenging mechanics 🎮",
            "Implement a neural network from scratch 🧠",
            "Optimize an algorithm for better time or space complexity ⏱️🚀",
            "Contribute to solving an issue on an open-source project 🛠️🤝",
            "Explore blockchain development and create a simple blockchain ⛓️",
            "Build a RESTful API from scratch 🚀",
            "Experiment with integrating different APIs into a project 🔄🔗",
            "Implement a continuous integration/continuous deployment (CI/CD) pipeline 🚀",
            "Create a security-focused project to identify vulnerabilities 🔐",
            "Develop a microservices-based architecture for a project 🚀🔧",
        ],
        fun: [
            "Write a program that generates random jokes 😄",
            "Create a game just for fun 🎮",
            "Build a virtual reality (VR) or augmented reality (AR) application 🕶️",
            "Develop a creative coding project with generative art 🎨",
            "Create a music player or playlist generator 🎵",
            "Build a personal chatbot with a unique personality 🤖💬",
            "Experiment with creating a meme generator 🤣",
            "Design and implement a choose-your-own-adventure game 📖",
            "Build a weather app with a creative and interactive UI ☁️🌦️",
            "Create a digital pet or virtual pet simulation game 🐾",
            "Develop a mobile app for mindfulness or relaxation 🧘‍♂️",
            "Build a recommendation system for movies, books, or music 🎬📚🎶",
            "Experiment with creating 3D graphics or animations 🚀🎥",
            "Develop a language translation tool with creative features 🌐🗣️",
            "Create an AI-based project that generates art or poetry 🤖🎨",
            "Build a collaborative online game or multiplayer experience 👥🎮",
            "Develop a personal finance tracker or budgeting app 💰",
            "Create a fitness or health-tracking application 🏋️‍♂️🍏",
            "Build a virtual tour or exploration app using maps and geolocation 🗺️",
            "Experiment with creating a mobile app for time management ⏰📱",
        ],
    };
    

    const resolutionText = document.getElementById('resolution-text');
    const generateBtn = document.getElementById('generate-btn');
    const resolutionContainer = document.getElementById('resolution-container');
    const generatedResolution = document.getElementById('generated-resolution');
    const generateAnotherBtn = document.getElementById('generate-another-btn');
    const shareBtn = document.getElementById('share-btn');

    generateBtn.addEventListener('click', function () {
        anime({
            targets: '#resolution-text',
            opacity: 0,
            translateY: -20,
            duration: 500,
            easing: 'easeOutExpo',
            complete: function () {
                const resolution = generateResolution(resolutions);
                generatedResolution.innerHTML = resolution; // Use innerHTML to render HTML tags
                resolutionContainer.classList.remove('hidden');

                anime({
                    targets: ['#resolution-text', resolutionContainer],
                    opacity: 1,
                    translateY: 0,
                    duration: 500,
                    easing: 'easeInOutQuad',
                });
            },
        });
    });

    generateAnotherBtn.addEventListener('click', function () {
        anime({
            targets: [resolutionContainer, '#resolution-text'],
            opacity: 0,
            translateY: -20,
            duration: 500,
            easing: 'easeOutExpo',
            complete: function () {
                resolutionContainer.classList.add('hidden');
                resolutionText.textContent = "Click the button below to generate your unique resolution.";

                anime({
                    targets: ['#resolution-text'],
                    opacity: 1,
                    translateY: 0,
                    duration: 500,
                    easing: 'easeInOutQuad',
                });
            },
        });
    });

    function generateResolution(resolutions) {
        const programmingResolution = getRandomElement(resolutions.programming);
        const challengeResolution = getRandomElement(resolutions.challenge);
        const funResolution = getRandomElement(resolutions.fun);

        return `<div class="resolution-item">1. ${programmingResolution}</div><div class="resolution-item">2. ${challengeResolution}</div><div class="resolution-item">3. ${funResolution}</div>`;
    }

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const colorThemes = ['#FF6B6B', '#48dbfb', '#1dd1a1', '#feca57', '#ff9f43'];
    const theme = getRandomColorTheme();
    applyColorTheme(theme);

    function getRandomColorTheme() {
        return getRandomElement(colorThemes);
    }

    function applyColorTheme(theme) {
        document.body.style.backgroundColor = theme;
        // You can customize other elements' styles based on the theme
    }

    shareBtn.addEventListener('click', function () {
        const resolutionText = generatedResolution.textContent;
        const shareTitle = 'My New Year\'s Resolution';
        const shareText = `Check out my New Year's resolution:\n\n${resolutionText}\n\nWhat's yours?`;

        if (navigator.share) {
            navigator.share({
                title: shareTitle,
                text: shareText,
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Share functionality is not supported on this browser. You can manually copy and share the text:\n\n' + shareText);
        }
    });
});

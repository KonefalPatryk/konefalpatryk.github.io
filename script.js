// Project data
const projectsData = {
    "Artefact": {
        title: "Nanite Procedural Content Generation Artefact",
        type: "Nanite compatible foliage generation tool",
        tags: ["Unreal Engine", "Blueprint", "Procedural Content Generation", "Tool", "PCG","Dissertation"],
        description: "Investigated Photorealistic Environments and the impact of Procedural Content Generation (PCG) on efficiency and scalability in game development. Designed and developed a technical tool to assist Game Designers and Environmental Artists in rapid prototyping, reducing iteration time while expanding creative possibilities. Integrated Nanite foliage assets for enhanced performance and realism, ensuring high-fidelity environments with optimized rendering. The tool seamlessly combines PCG,, and C++ Blueprints to automate and streamline world-building processes, offering a scalable solution for modern game development.",
        gallery: [
            "Images/Artefact/Artefact.png",
            "Images/Artefact/pcgnonanite.png",
            "Images/Artefact/pcgnanite.png",
        ],
        videoId: "sjx6G3aaul8", 
        techDetails: "The game was created using Unreal Engine 5 with cutting-edge technologies such as Nanite and Lumen, which allow for photorealistic rendering of huge, open spaces. The procedural content generation system uses advanced machine learning algorithms to create coherent and logical worlds. The game runs at 4K resolution at 60 FPS on the latest consoles and PCs."
    },
    "tree-tool": {
        title: "L-System Tree Generation Tool",
        type: "Custom PCG Tool",
        tags: ["Unreal Engine", "Blueprint", "PCG", "Procedural Content Generation", "Design"],
        description: "As part of my studies, I explored Procedural Content Generation (PCG) to develop tools that enhance the workflow of artists, designers, and technical designers. This module provided hands-on experience in creating dynamic and scalable content within Unreal Engine 5, focusing on L-System-based tree generation.",
        gallery: [
            "Images/Lsystem/Lsystem.png",
            "Images/Lsystem/Example.png",
            "Images/Lsystem/Example2.png",
            "Images/Lsystem/Example3.png",
            "Images/Lsystem/Example4.png",
            "Images/Lsystem/Example6.png",
            "Images/Lsystem/Example7.png",
            "Images/Lsystem/Example8.png",
        ],
        videoId: "BstpagjY4Jw", 
        techDetails: "The game uses Unity engine with a custom lighting and rendering system, designed specifically to achieve a unique, disturbing aesthetic. The advanced AI system responds to player actions, adjusting difficulty and horror elements to individual gameplay style, creating a personalized experience for each player."
    },
    "mobile-game": {
        title: "PCG Mobile Game",
        type: "Educational App",
        tags: ["Unreal Engine 5", "Android", "Educational", "PCG", "C++", "Blueprint", "Niagara", "Save Game"],
        description: "PopLearner: An innovative educational mobile app designed to provide interactive learning experiences. Utilizing Procedural Content Generation (PCG), the app dynamically generates levels and menus, ensuring scalable content production and engaging gameplay. With adaptive level design, players unlock new content through engaging repetition, reinforcing learning outcomes.",
        gallery: [
            "Images/PopLearner/PopLearnerMenu.png",
            "Images/PopLearner/PopLearnerExample.gif",
            "Images/PopLearner/PopLearnerExample2.gif"
            
        ],
        videoId: "CozQTEEp6Pg", 
        techDetails: "Utilising the PCG Graph and C++ Blueprints to generate interactable assets based on the level selected and assigning number(s)/letter(s) based on the selected level, UI is also automated to generate buttons based on the amount unlocked by the player and progressed is saved."
    },
    "Cleanslate": {
        title: "Cleanslate",
        type: "Echolocation Horror Game",
        tags: ["Unreal Engine 5", "First Person Shooter", "Slime"],
        description: "The player can see by making noise through walking and throwing objects. the player must fix all the generators and escape without the monster finding the player.",
        gallery: [
            "Images/Cleanslate/Example1.png",
            "Images/Cleanslate/Example2.png",
            "Images/Cleanslate/Example3.png"
        ],
        videoId: "WZ8CBVhFZDk",  
        techDetails: "The sound system listens to the event system, triggering sounds at specific locations, and utilizes object pooling to optimize game performance."
    },
    "Amaurosis": {
        title: "Amaurosis",
        type: "Echolocation Horror Game",
        tags: ["Unity", "Horror", "Sound", "Narrative", "Psychological"],
        description: "The player can see by making noise through walking and throwing objects. the player must fix all the generators and escape without the monster finding the player.",
        gallery: [
            "Images/Amaurosis/Amaurosis.png",
            "Images/Amaurosis/menu.png",
            "Images/Amaurosis/splash.png"
        ],
        videoId: "VYD3AC9eWao",  
        techDetails: "The sound system listens to the event system, triggering sounds at specific locations, and utilizes object pooling to optimize game performance."
    },
    "Third-Person": {
        title: "Third Person Project",
        type: "Sci-fi Third Person Unity Project",
        tags: ["Unity", "Sci-Fi", "HDRP", "HRDI", "Third Person"],
        description: "Tasked to make a Unity Demo",
        gallery: [
            "/api/placeholder/640/360",
            "/api/placeholder/640/360",
            "/api/placeholder/640/360"
        ],
        videoId: "It2Aa4V62eg",
        techDetails: "Combat & Animation: Enhanced character movement and sword interactions by adjusting Mixamo animation keyframes, achieving smooth and realistic combat animations. Enemy AI: Developed dynamic Enemy AI using NavMesh that reacts based on distance and collision detection, creating more responsive gameplay. Enemy Death Sequence: Crafted a satisfying enemy death sequence with collision removal and animation events, elevating the gameplay experience. Mechanics Integration: Synchronized enemy and player mechanics through animation events, ensuring a seamless interaction and consistent player experience. New Input System: Implemented a new input system for player controls, including a Pause System and a Rolling Mechanic, offering a more dynamic and responsive gameplay experience. Photorealism & Visuals: Achieved photorealistic environments by utilizing Unity’s HDRP features, including Sky and Fog Volume, HDRI, and advanced lighting techniques, ensuring stunning visual fidelity."
    },
    "tank-game": {
        title: "Tank Game",
        type: "Top Down Unity Project",
        tags: ["Unreal Engine", "VR", "Educational", "Historical", "Interactive"],
        description: "VR Experience made in Unity to create a responsive and functional virtual experience minimizing discomfort associated with motion sickness.",
        gallery: [
            "/api/placeholder/640/360",
            "/api/placeholder/640/360",
            "/api/placeholder/640/360"
        ],
        videoId: "RqAUuYamIIQ",
        techDetails: "Developed an AI turret system that tracks and fires at the player when within a trigger box. Integrated a death sequence with particle effects and dynamic menu activation for win/lose states, including toggling cursor visibility for smooth navigation. Created a Health UI paired with a smoke trigger to provide visual damage feedback, enhancing the player experience."
    },
    "vr-experience": {
        title: "VR Experience",
        type: "Educational VR application",
        tags: ["Unreal Engine", "VR", "Educational", "Historical", "Interactive"],
        description: "VR Experience made in Unity to create a responsive and functional virtual experience minimizing discomfort associated with motion sickness.",
        gallery: [
        ],
        videoId: "k7JC5rdAYdc",
        techDetails: "Implemented a New Input System and OpenXR Toolkit to optimize interaction for VR platforms. Designed crane-like controls using joysticks, operable with the Select/Hold buttons on VR controllers for precise gameplay mechanics. Integrated a hand-mounted camera and monitor, enabling players to visually identify enemies and aliens, enhancing situational awareness. Developed a Score and Penalty System to track player performance and encourage strategic gameplay. Added toggleable features and shooting mechanics, mapped to VR controller triggers, providing intuitive player controls."
    },
};

// Optimized code - initialization after document loading
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animated background
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x64B6FF,
        backgroundColor: 0x0A0A12,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 18.00
    });
    
    // Add text data attribute for glitch effect
    const heading = document.querySelector('h1');
    if (heading) {
        heading.setAttribute('data-text', heading.textContent);
    }
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    // Delayed loading of YouTube video for better initial performance
    const loadYouTubeVideo = () => {
        const videoContainer = document.getElementById('video-container');
        if (videoContainer) {
            // Make video container semi-transparent to show the animation background
            videoContainer.style.opacity = '0.7';
            videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/rG_R6Gust3s?autoplay=1&mute=1&loop=1&playlist=rG_R6Gust3s&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&hd=1" title="Portfolio Showreel" allowfullscreen allow="autoplay"></iframe>';
        }
    };
    
    // Delay loading of the video by 1 second for better initial performance
    setTimeout(loadYouTubeVideo, 1000);
    
    // Initialize skill icon tooltips
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = this.getAttribute('title');
            this.appendChild(tooltip);
            
            // Animate tooltip
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 50);
        });
        
        icon.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    tooltip.remove();
                }, 300);
            }
        });
    });
    
    // Lazy loading for images
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('.lazy-load');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const bgSrc = img.getAttribute('data-bg');
                        
                        if (bgSrc) {
                            img.style.backgroundImage = `url(${bgSrc})`;
                            img.classList.add('loaded');
                        }
                        
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(image => {
                imageObserver.observe(image);
            });
        } else {
            // Fallback for browsers without IntersectionObserver support
            lazyImages.forEach(img => {
                const bgSrc = img.getAttribute('data-bg');
                if (bgSrc) {
                    img.style.backgroundImage = `url(${bgSrc})`;
                    img.classList.add('loaded');
                }
            });
        }
    };
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Initialize project modal
    const projectModal = document.getElementById('projectModal');
    const closeProjectBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Close project modal
    closeProjectBtn.addEventListener('click', function() {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    // Close project modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
            setTimeout(() => {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
    
    // Handle ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.classList.remove('show');
            setTimeout(() => {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
    
    // 3D tilt effect for project cards
    const addTiltEffect = (element) => {
        element.addEventListener('mousemove', (e) => {
            const card = element;
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            const rotateX = (-mouseY / (cardHeight / 2)) * 10; // Max 10 degree rotation
            const rotateY = (mouseX / (cardWidth / 2)) * 10; // Max 10 degree rotation
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            setTimeout(() => {
                element.style.transform = '';
            }, 1000);
        });
    };
    
    // Apply tilt effect to project cards
    projectCards.forEach(card => {
        addTiltEffect(card);
    });
    
    // Open modal for each project
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            const projectData = projectsData[projectId];
            
            if (projectData) {
                // Wypełnij podstawowe dane projektu (bez zmian)
                document.querySelector('.modal-title').textContent = projectData.title;
                document.querySelector('.modal-subtitle').textContent = projectData.type;
                document.querySelector('.modal-description').textContent = projectData.description;
                document.querySelector('.modal-tech-details').textContent = projectData.techDetails;
                
                // Wypełnij tagi (bez zmian)
                const tagsContainer = document.querySelector('.modal-tags');
                tagsContainer.innerHTML = '';
                projectData.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'tag';
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
                
                // Obsługa wideo z YouTube
                const videoSection = document.querySelector('.modal-video-section');
                const videoContainer = document.querySelector('.modal-video-container');
                
                if (projectData.videoId) {
                    // Jeśli projekt ma wideo, wyświetl sekcję i utwórz iframe
                    videoSection.style.display = 'block';
                    videoContainer.innerHTML = `<iframe 
                        src="https://www.youtube.com/embed/${projectData.videoId}?rel=0" 
                        title="${projectData.title} video" 
                        allowfullscreen>
                    </iframe>`;
                } else {
                    // Jeśli projekt nie ma wideo, ukryj sekcję
                    videoSection.style.display = 'none';
                    videoContainer.innerHTML = '';
                }
                
                // Wypełnij galerię (bez zmian)
                const galleryContainer = document.querySelector('.modal-gallery');
                galleryContainer.innerHTML = '';
                
                projectData.gallery.forEach((imgSrc, index) => {
                    const imgLink = document.createElement('a');
                    imgLink.href = imgSrc;
                    imgLink.setAttribute('data-fancybox', `gallery-${projectId}`);
                    imgLink.setAttribute('data-caption', `${projectData.title} - image ${index + 1}`);
                    
                    const imgElement = document.createElement('img');
                    imgElement.className = 'gallery-image';
                    imgElement.src = imgSrc;
                    imgElement.alt = `${projectData.title} - image ${index + 1}`;
                    
                    imgLink.appendChild(imgElement);
                    galleryContainer.appendChild(imgLink);
                });
                
                // Inicjalizacja Fancybox i pokazanie modalu (bez zmian)
                $(`[data-fancybox="gallery-${projectId}"]`).fancybox({
                    // opcje...
                });
                
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => {
                    projectModal.classList.add('show');
                }, 10);
            }
        });
    });
    
    // Handle contact form
    const contactForm = document.getElementById('emailForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            
            // Validation
            let isValid = true;
            
            if (!nameField.value.trim()) {
                isValid = false;
                nameField.style.borderColor = '#FF9933';
            } else {
                nameField.style.borderColor = '';
            }
            
            if (!emailField.value.trim() || !emailField.value.includes('@')) {
                isValid = false;
                emailField.style.borderColor = '#FF9933';
            } else {
                emailField.style.borderColor = '';
            }
            
            if (!subjectField.value.trim()) {
                isValid = false;
                subjectField.style.borderColor = '#FF9933';
            } else {
                subjectField.style.borderColor = '';
            }
            
            if (!messageField.value.trim()) {
                isValid = false;
                messageField.style.borderColor = '#FF9933';
            } else {
                messageField.style.borderColor = '';
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});

// Smooth scrolling script - optimized
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
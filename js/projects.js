// Projects Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-options button');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.querySelector('.project-details-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    if (!filterButtons.length) return;
    
    // Project filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project modal functionality
    if (projectModal) {
        // Sample project data (in a real app, this would come from a database)
        const projectsData = {
            'project1': {
                title: 'Central Bank Core Banking System',
                category: 'Software Development',
                duration: '6 months',
                team: '8-person team',
                description: 'Developed a custom core banking solution for Belize\'s central bank with real-time transaction processing and regulatory compliance features.',
                technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kubernetes'],
                image: 'images/project1.jpg',
                outcome: 'Enabled real-time processing and improved regulatory reporting, increasing efficiency by 70%.'
            },
            'project2': {
                title: 'National Insurance Cybersecurity Overhaul',
                category: 'Cybersecurity',
                duration: '3 months',
                team: '5-person team',
                description: 'Conducted a comprehensive cybersecurity assessment and implemented updated security measures for Belize\'s national insurance provider.',
                technologies: ['Nessus', 'Metasploit', 'Firewalls', 'SIEM', 'Security Training'],
                image: 'images/project2.jpeg',
                outcome: 'Improved system resilience and passed compliance audits with a 90% reduction in security incidents.'
            },
            'project3': {
                title: 'Tourism Board Cloud Migration',
                category: 'Cloud Computing',
                duration: '4 months',
                team: '6-person team',
                description: 'Migrated the entire IT infrastructure of Belize\'s Tourism Board to Microsoft Azure cloud with improved performance and cost efficiency.',
                technologies: ['Azure', 'VMware', 'Azure Monitor', 'Blob Storage', 'PowerShell'],
                image: 'images/project3.jpg',
                outcome: 'Achieved 99.9% uptime and reduced IT operating costs by 30%.'
            },
            'project4': {
                title: 'University Campus Network Upgrade',
                category: 'Infrastructure',
                duration: '5 months',
                team: '10-person team',
                description: 'Overhauled the complete network infrastructure for Belize\'s largest university, including backbone upgrades, wireless access points, and security enhancements.',
                technologies: ['Cisco', 'Ubiquiti', 'LAN/WAN', 'Firewall', 'Network Monitoring'],
                image: 'images/project4.jpg',
                outcome: 'Improved network speed by 60% and enhanced reliability across all departments.'
            },
            'project5': {
                title: 'Regional Healthcare Management System',
                category: 'Software Development',
                duration: '8 months',
                team: '12-person team',
                description: 'Developed an integrated patient records system serving multiple healthcare providers across Central America with seamless data sharing.',
                technologies: ['.NET', 'Angular', 'SQL Server', 'HL7 Integration', 'Docker'],
                image: 'images/project5.png',
                outcome: 'Improved patient record accessibility and reduced paperwork by 75%.'
            },
            'project6': {
                title: 'Financial Services Hybrid Cloud Solution',
                category: 'Cloud Computing',
                duration: '6 months',
                team: '8-person team',
                description: 'Designed and implemented a secure hybrid cloud solution for a regional financial services company, ensuring scalability and compliance.',
                technologies: ['Azure', 'AWS', 'VPN', 'Load Balancers', 'Terraform'],
                image: 'images/project6.jfif',
                outcome: 'Improved service availability and supported secure data sharing across environments.'
            }
        };
        
        
        // View details button click
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.closest('.project-card').getAttribute('data-id') || 'project1';
                const project = projectsData[projectId];
                
                if (project) {
                    // Populate modal with project data
                    modalBody.innerHTML = `
                        <div class="modal-project">
                            <div class="modal-project-image">
                                <img src="${project.image}" alt="${project.title}">
                            </div>
                            <div class="modal-project-content">
                                <h2>${project.title}</h2>
                                <p class="project-category">${project.category}</p>
                                <div class="project-meta">
                                    <span><i class="far fa-calendar-alt"></i> ${project.duration}</span>
                                    <span><i class="fas fa-users"></i> ${project.team}</span>
                                </div>
                                <h3>Project Description</h3>
                                <p>${project.description}</p>
                                <h3>Technologies Used</h3>
                                <ul class="technologies-list">
                                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                                </ul>
                                <h3>Key Outcomes</h3>
                                <p>${project.outcome}</p>
                            </div>
                        </div>
                    `;
                    
                    // Show modal
                    projectModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Chat-247',
    description: 'A real-time messaging application with over 10+ reusable components, including 3 custom-built components for enhanced functionality and UX. Implemented Socket.io for real-time communication, enabling seamless private and group messaging.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Socket.io'],
    github: 'https://github.com/Agastya-07/ChitChat',
    live: 'https://chat-2-vqie.onrender.com',
    features: [
      'Real-time messaging with Socket.io',
      'Private and group chat functionality',
      'User authentication and authorization',
      'Message history and persistence',
      'Responsive design for all devices'
    ],
    team: 'Solo Project',
    duration: '2 months',
    challenges: [
      'Implementing real-time communication',
      'Managing complex state with Redux',
      'Handling concurrent user connections'
    ],
    learnings: [
      'WebSocket implementation best practices',
      'State management patterns',
      'Real-time application architecture'
    ]
  },
  {
    title: 'WebDraw',
    description: 'Developed an innovative and seamless blackboard application, leveraging HTML, CSS, and JavaScript to create a sleek and intuitive design ensuring fluid interaction and user satisfaction.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Agastya-07/WebDraw',
    live: 'https://glistening-jelly-00771b.netlify.app/',
    features: [
      'Free-hand drawing capabilities',
      'Multiple color options',
      'Brush size adjustment',
      'Save and export functionality'
    ],
    team: 'Solo Project',
    duration: '1 month',
    challenges: [
      'Implementing smooth drawing mechanics',
      'Optimizing canvas performance',
      'Managing undo/redo functionality'
    ],
    learnings: [
      'Canvas API mastery',
      'Drawing algorithms',
      'Performance optimization techniques'
    ]
  },
  {
    title: 'Weathertrack',
    description: 'Developed the "Weather-Track" web application showing 6+ features. This application adeptly retrieves real-time weather data from the OpenWeather APIs, ensuring precise data accuracy.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/Agastya-07/WeatherTrack',
    live: 'https://weather-tracko.netlify.app/',
    features: [
      'Real-time weather updates',
      'Location-based forecasting',
      '5-day weather prediction',
      'Interactive weather maps'
    ],
    team: 'Solo Project',
    duration: '3 weeks',
    challenges: [
      'API integration and error handling',
      'Accurate location detection',
      'Data visualization implementation'
    ],
    learnings: [
      'API integration patterns',
      'Weather data processing',
      'Geolocation services'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [zoomedProjectIndex, setZoomedProjectIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (zoomedProjectIndex === index) {
      setZoomedProjectIndex(null); // Minimize if the same card is clicked again
      setSelectedProject(null); // Close the modal when zoom is minimized
    } else {
      setZoomedProjectIndex(index); // Zoom in the clicked card
      setSelectedProject(projects[index]); // Open the modal with the clicked project
    }
  };

  // Close modal when clicking outside
  const closeModal = () => {
    setSelectedProject(null);
    setZoomedProjectIndex(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-500 
                          ${zoomedProjectIndex === index ? 'scale-110' : 'scale-100'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={closeModal}
            />
            <div className="mt-6 flex justify-between items-center">
              <div className="flex gap-4">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

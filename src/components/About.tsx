import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative max-w-xs md:max-w-sm mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-75"></div>
            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Saurabh's Profile"
              className="relative rounded-2xl w-full object-cover shadow-lg border-2 border-white/20"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Code2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">
                Experienced in building responsive and interactive web applications using modern frameworks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Terminal className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">
                Proficient in creating scalable server-side applications and RESTful APIs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Palette className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Passionate about creating beautiful and intuitive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

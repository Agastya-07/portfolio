import React from 'react';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiExpress, 
  SiNodedotjs, 
  SiRedux, 
  SiTailwindcss, 
  SiMongodb, 
  SiGit, 
  SiPostman, 
  SiVisualstudiocode, 
  SiWindows 
} from 'react-icons/si';

const Skills = () => {
  const skillSets = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-blue-500 w-8 h-8" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
        { name: "Mongodb", icon: <SiMongodb className="text-green-500 w-8 h-8" /> }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "ReactJS", icon: <SiReact className="text-blue-400 w-8 h-8" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500 w-8 h-8" /> },
        { name: "ExpressJS", icon: <SiExpress className="text-gray-800 w-8 h-8" /> },
        { name: "NodeJS", icon: <SiNodedotjs className="text-green-600 w-8 h-8" /> },
        { name: "DaisyUI", icon: <SiTailwindcss className="text-teal-400 w-8 h-8" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-8 h-8" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "GIT", icon: <SiGit className="text-orange-500 w-8 h-8" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400 w-8 h-8" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-400 w-8 h-8" /> },
        { name: "Windows", icon: <SiWindows className="text-blue-600 w-8 h-8" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {skillSets.map((set) => (
            <div key={set.title} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">{set.title}</h3>
              <div className="grid grid-cols-2 gap-4 justify-items-center">
                {set.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center space-y-2">
                    {skill.icon}
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

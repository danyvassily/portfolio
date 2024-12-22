import { FaJs, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-500" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'RESTful APIs', icon: <SiPostman className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group"
            >
              <div className="text-6xl hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="mt-2 text-sm opacity-80">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
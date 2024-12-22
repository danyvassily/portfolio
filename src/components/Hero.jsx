import { Link } from 'react-scroll';
import heroImage from '../assets/photoportofolio.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bringing your digital vision to life with creativity and expertise
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Full-stack developer specializing in JavaScript, React, and Node.js
            </p>
            <div className="flex gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-secondary"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl border-4 border-primary w-80 h-80">
              <img
                src={heroImage}
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full w-80 h-80" />
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                JavaScript
              </span>
              <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                React.js
              </span>
              <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
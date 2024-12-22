import { Link } from 'react-scroll';
import heroImage from '../assets/photoportofolio.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = "!@#$%^&*()";
    const finalText = "Bringing your digital vision to life with creativity and expertise";
    let scrambledText = "";
    
    // Créer un texte brouillé initial
    for(let i = 0; i < finalText.length; i++) {
      scrambledText += chars[Math.floor(Math.random() * chars.length)];
    }
    
    // Animation en deux étapes
    const tl = gsap.timeline();
    
    // Première étape : afficher le texte brouillé
    tl.set(textRef.current, { text: scrambledText })
      // Deuxième étape : transition vers le texte final
      .to(textRef.current, {
        duration: 2,
        text: finalText,
        ease: "none",
        repeat: 0
      });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      {/* Background Lines */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative h-full"
              >
                <div
                  className="absolute inset-0 h-full w-px bg-gradient-to-b from-transparent via-gray-700/30 to-transparent"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-7xl font-bold mb-6 !text-white  bg-black/10 p-4 rounded-lg">
              Dany Vassiliakos
            </h1>
            <h2 ref={textRef} className="text-2xl md:text-3xl font-bold mb-6 !text-white  bg-black/10 p-4 rounded-lg">
              Bringing your digital vision to life with creativity and expertise
            </h2>
            <p className="text-lg !text-gray-200 mb-8  bg-black/10 p-4 rounded-lg">
              Full-stack developer specializing in JavaScript, React, and Node.js
            </p>
            <div className="flex gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary text-white"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-secondary text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="rounded-full overflow-hidden shadow-xl border-4 border-primary w-80 h-80">
              <img
                src={heroImage}
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full w-80 h-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
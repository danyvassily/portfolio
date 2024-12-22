import React from "react";
import profileImage from '../assets/profil.png';
import Card3D from './Card3D';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-md mx-auto">
            <Card3D className="group/card relative rounded-xl border border-white/10 bg-gray-900/50 p-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover/card:opacity-75 transition duration-500"></div>
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/20 relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card3D>
          </div>
          
          <div className="w-full">
            <Card3D className="group/card relative rounded-xl border border-white/10 bg-gray-900/50 p-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-xl blur-xl"></div>
                <p className="relative text-lg leading-relaxed text-gray-100">
                  Salut ! Je suis Dany, développeur web basé à Paris. Passionné par la création,
                  le partage, et l'exploration de nouveaux projets, j'accompagne mes clients dans la réalisation
                  de leurs sites web et applications. Membre du collectif 3Pixels, une équipe de développeurs
                  passionnés, je mets mes compétences au service de vos projets. Que ce soit pour créer
                  un site moderne, développer une application ou donner vie à vos idées numériques, je suis
                  là pour concrétiser vos ambitions.
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
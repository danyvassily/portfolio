import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AuroraBackground } from "./components/AuroraBackground";

function App() {
  return (
    <div>
      <div className="fixed inset-0 w-full h-full -z-10">
        <AuroraBackground className="w-full h-full" />
      </div>
      <div className="relative min-h-screen">
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App

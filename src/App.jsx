import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, EventsSection, ProjectsSection, TeamSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero onCollapse={() => setRevealed(true)} />

        {/* Site content appears after the playful collapse */}
        <section className={`${revealed ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-6'} transition-all duration-700`}>
          <AboutSection />
          <EventsSection />
          <ProjectsSection />
          <TeamSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

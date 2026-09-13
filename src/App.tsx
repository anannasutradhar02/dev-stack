import React from 'react';
import Navbar from './components/nav';
import ExploreTechnologies from './components/ExploreTechnologies';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
     
      <Navbar />

      
      <main>
        <ExploreTechnologies />
      </main>

      
      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

function App() {
    useEffect(() => {
        // Initialize ScrollReveal animations
        const sr = ScrollReveal({
            origin: 'bottom', // You can change it to 'top', 'left', or 'right'
            distance: '50px', // Distance for the elements to slide
            duration: 1000,   // Duration of the animation in milliseconds
            delay: 200,       // Delay between animations
            reset: false,     // Set to true if you want the animation to repeat
        });

        // Reveal all sections with class 'reveal'
        sr.reveal('.reveal', { interval: 200 });
    }, []);

    return (
        <div className="App">
            <Header />
            {/* Add the 'reveal' class to the elements you want to animate */}
            <div className="reveal">
                <Home />
            </div>
            <div className="reveal">
                <About />
            </div>
            <div className="reveal">
                <Education />
            </div>
            <div className="reveal">
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;

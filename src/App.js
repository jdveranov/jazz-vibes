import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">JazzVibes</div>
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Feel the Rhythm of Jazz today</h1>
        <p>Discover the soul of jazz through live performances, events, and exclusive content.</p>
        <button className="cta-button">Join the Vibe</button>
      </section>

      <section id="about" className="about">
        <h2>About JazzVibes</h2>
        <p>We bring jazz lovers together with live events, inspiring artists, and a community that celebrates the heart of music.</p>
      </section>

      <section id="events" className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <h3>Jazz Night at Blue Moon</h3>
            <p>December 15, 2024 | 7:00 PM</p>
          </li>
          <li>
            <h3>Riverside Jazz Fest</h3>
            <p>January 20, 2025 | All Day</p>
          </li>
        </ul>
      </section>

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src="/images/jazz1.jpg" alt="Jazz Band" />
          <img src="/images/jazz2.jpg" alt="Saxophone Player" />
          <img src="/images/jazz3.jpg" alt="Crowd Enjoying Music" />
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 JazzVibes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
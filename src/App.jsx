// Import the necessary React library
import React from 'react';

// Header component
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header> 
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
}

// Main component that renders Header and Footer
function Main() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My Website</h2>
        <p>This is the main content of the website.</p>
      </main>
      <Footer />
    </div>
  );
}

// Render the Main component into the root element of the HTML document
ReactDOM.render(<Main />, document.getElementById('root'));

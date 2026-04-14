import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} John Doe. Designed & Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;

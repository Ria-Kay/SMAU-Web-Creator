export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SMAU Web-Creator. </p>
      
      <p>Developed by R.</p>
      <p>All images and materials are used for educational purposes only.</p>

      <div className="footer-section">
        <strong>Credits:</strong>
        <ul className="footer-list">
          <li>
            Icons from{' '}
            <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
              Icons8
            </a>
          </li>
  
        </ul>
      </div>

      <div className="footer-section">
        <strong>Resources:</strong>
        <ul className="footer-list">
          <li>
            <a
              href="https://hype4.academy/tools/glassmorphism-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glassmorphism Generator
            </a>
          </li>
         
        </ul>
      </div>
    </footer>
  );
}
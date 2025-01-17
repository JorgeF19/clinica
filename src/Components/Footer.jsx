

const Footer = () => {
  return (
    <footer className="footer footer-gradient">
      <div className="footer-container">
        <p className="quick-links">
          Acceso rapido a: 
          <a href="#" className="footer-link">Privacy Policy</a> | 
          <a href="#" className="footer-link">Terms of Service</a> | 
          <a href="#" className="footer-link">FAQs</a>
        </p>
        <p className="university-info">
          Autores: <a target='_blank' href="https://github.com/manguinhoExe" className='footer-link'>Jorge William Ferrer</a> & <a target='_blank' href='https://github.com/LudNieto' className='footer-link'>Jesus Mario Yanez</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

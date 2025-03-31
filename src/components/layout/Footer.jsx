import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">About Us</h4>
          <ul className="footer-links">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Customer Support</h4>
          <ul className="footer-links">
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="social-links">
            {/* <InstagramIcon className="social-icon" />
            <FacebookIcon className="social-icon" />
            <TwitterIcon className="social-icon" /> */}
          </div>
        </div>
      </div>

      <div className="copyright-notice">
        © 2025 ShopStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

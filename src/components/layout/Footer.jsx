// Footer component
import { motion } from "framer-motion";
import {
  EnvelopeIcon, // Icon email
  PhoneIcon, // Icon điện thoại
  GlobeAltIcon, // Icon website
} from "@heroicons/react/24/outline";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Về chúng tôi</h4>
          <ul className="footer-links">
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">📖</span> Câu chuyện
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">💼</span> Nghề nghiệp
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">🌱</span> Bền vững
            </motion.li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Hỗ trợ</h4>
          <ul className="footer-links">
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">🚚</span> Giao hàng
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">🔄</span> Đổi trả
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <span className="link-emoji">📞</span> Liên hệ
            </motion.li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Liên hệ</h4>
          <div className="social-links">
            <motion.a
              href="mailto:contact@shop.com"
              whileHover={{ y: -2 }}
              className="social-link"
            >
              <EnvelopeIcon className="social-icon text-blue-500" />
            </motion.a>

            <motion.a
              href="tel:+123456789"
              whileHover={{ y: -2 }}
              className="social-link"
            >
              <PhoneIcon className="social-icon text-green-500" />
            </motion.a>

            <motion.a
              href="https://your-website.com"
              target="_blank"
              whileHover={{ y: -2 }}
              className="social-link"
            >
              <GlobeAltIcon className="social-icon text-purple-500" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="copyright-notice">
        <span>© 2025 Class03</span>
        <div className="payment-methods">
          <span className="payment-icon">💳</span>
          <span className="payment-icon">📱</span>
          <span className="payment-icon">💰</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

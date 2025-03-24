const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#222",
    color: "#fff",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;

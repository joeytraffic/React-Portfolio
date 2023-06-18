const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-flex">
        <h2 id="contact">Contact:</h2>
        <nav className="footer-nav">
          <ul>
            <li className="contact-link">
              <a href="mailto:joey.tranvik@gmail.com">joey.tranvik@gmail.com</a>
            </li>
            <li className="contact-link">
              <a href="https://github.com/joeytraffic" target="_blank">
                GitHub
              </a>
            </li>
            <li className="contact-link">
              <a href="https://twitter.com/joeytraffic" target="_blank">
                Twitter
              </a>
            </li>
            <li className="contact-link">
              <a
                href="https://open.spotify.com/artist/0EwxM1Pv0584OF4jZsG8TI"
                target="_blank"
              >
                Spotify
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

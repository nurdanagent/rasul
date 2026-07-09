import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>🎵 MusicWave</h2>
          <p>Feel every beat. Discover new sounds.</p>
        </div>

        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/artists">Artists</a>
          <a href="/albums">Albums</a>
          <a href="/playlist">Playlists</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <hr />

      <p className="footer-copy">
        © {new Date().getFullYear()} MusicWave. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

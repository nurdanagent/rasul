import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="note">♪</div>
        <div className="note">♫</div>
        <div className="note">♬</div>
        <div className="note">♩</div>

        <nav>
          <div className="logo">MusicWave</div>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Playlists</a>
            </li>
            <li>
              <a href="#">Artists</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hero">
          <div className="left">
            <h1>Feel Every Beat</h1>

            <p>
              Experience premium music streaming with millions of songs,
              exclusive playlists, and crystal-clear sound.
            </p>

            <div className="buttons">
              <a href="#" className="btn gold">
                ▶️ Start Listening
              </a>

              <a href="#" className="btn outline">
                Explore Playlist
              </a>
            </div>
          </div>

          <div className="right">
            <div className="circle"></div>
            <div className="music">🎵</div>
          </div>
        </div>

        <div className="wave">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#1a120e"
              d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>
    </div>
  );
}

export default Header;

import "./Bro.css";

function Bro() {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">
          BOX<span>PRO</span>
        </h2>

        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Coaches</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="login">Login</button>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <h3>🥊 TRAIN LIKE A CHAMPION</h3>

          <h1>
            UNLEASH
            <br />
            YOUR
            <span> POWER</span>
          </h1>

          <p>
            Professional boxing training with experienced coaches, personalized
            programs and modern equipment.
          </p>

          <div className="hero-btns">
            <button className="join">Join Now</button>
            <button className="watch">Watch Training</button>
          </div>

          <div className="stats">
            <div className="card">
              <h2>1500+</h2>
              <p>Members</p>
            </div>

            <div className="card">
              <h2>20</h2>
              <p>Professional Coaches</p>
            </div>

            <div className="card">
              <h2>12</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=700"
            alt="Boxer"
          />
        </div>
      </div>
    </header>
  );
}

export default Bro;

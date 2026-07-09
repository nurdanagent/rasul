import "./Box.css";

const songs = [
  {
    id: 1,
    title: "Golden Hour",
    artist: "JVKE",
  },
  {
    id: 2,
    title: "Night Drive",
    artist: "The Weeknd",
  },
  {
    id: 3,
    title: "Dreams",
    artist: "Fleetwood Mac",
  },
  {
    id: 4,
    title: "Blinding Lights",
    artist: "The Weeknd",
  },
];

function TrendingSongs() {
  return (
    <section className="trending">
      <h2>🔥 Trending Songs</h2>

      <div className="songs-grid">
        {songs.map((song) => (
          <div className="song-card" key={song.id}>
            <img src={song.image} alt={song.title} />

            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>

              <button>▶ Play</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingSongs;

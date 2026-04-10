import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listPhim, setListPhim] = useState([]);

  useEffect(() => {
    fetch("https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1")
      .then((response) => response.json())
      .then((data) => setListPhim(data.items || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">🎬 Danh sách phim mới cập nhật</h1>

      <div className="movie-grid">
        {listPhim.map((phim, index) => (
          <div className="movie-card" key={index}>
            <img className="movie-img" src={phim.thumb_url} alt={phim.name} />
            <p className="movie-name">{phim.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

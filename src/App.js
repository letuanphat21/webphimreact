import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [listPhim, setListPhim] = useState([]);

  useEffect(() => {
    fetch("https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1")
      .then((response) => response.json())
      .then((data) => setListPhim(data.items));
  }, []);

  return (
    <div>
      <h1>Danh sách phim mới cập nhật</h1>
      <ul>
        {listPhim.map((phim, index) => (
          <div key={index}>
            <img src={phim.thumb_url} alt={phim.name} />
            <li>{phim.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

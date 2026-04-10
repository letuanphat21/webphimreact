import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2d235a, #3a1d6a)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          textShadow: "0 0 15px #ff66ff, 0 0 25px #cc33ff",
          animation: "fadeIn 2s ease",
        }}
      >
        💖 THANK YOU 💖
      </h1>

      <h2
        style={{
          fontSize: "30px",
          marginTop: "10px",
          color: "#ffd6ff",
          textShadow: "0 0 6px #ff99ff",
          animation: "fadeIn 3s ease",
        }}
      >
        Cảm ơn mọi người đã xem video demo của mình!
      </h2>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          maxWidth: "600px",
          opacity: 0.8,
          animation: "fadeIn 4s ease",
        }}
      >
        Chúc mọi người một ngày thật tuyệt vời ✨ Hẹn gặp lại ở những dự án tiếp
        theo!
      </p>

      {/* nút social */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          animation: "fadeIn 4s ease",
        }}
      >
        <a
          href="#"
          style={{
            padding: "12px 25px",
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.2)",
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          👍 Like
        </a>

        <a
          href="#"
          style={{
            padding: "12px 25px",
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.2)",
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          🚀 Follow
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;

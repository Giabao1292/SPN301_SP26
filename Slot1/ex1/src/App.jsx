import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Container from "react-bootstrap/Container";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ minHeight: `100vh`, display: `flex`, flexDirection: `column` }}
    >
      <Header />

      <main style={{ flex: 1, padding: `24px` }}>
        <h1>Welcome to my store</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;

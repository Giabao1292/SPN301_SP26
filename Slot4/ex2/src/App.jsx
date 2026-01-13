import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useMemo } from "react";
import "./App.css";
import listOfOrchids from "./data/ListOfOrchids";
import ListOrchids from "./components/ListOrchids";
import { Container } from "react-bootstrap";
function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <Header onSearch={setSearchKeyword} />

      <main className="main-wrapper">
        <h1>🌸 Orchid Store</h1>

        <ListOrchids orchids={listOfOrchids} searchKeyword={searchKeyword} />
      </main>

      <Footer
        avatar="/images/whynot.jpg"
        name="Lê Bảo"
        email="lebao@gmail.com"
      />
    </>
  );
}

export default App;

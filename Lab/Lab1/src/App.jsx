import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import listOfOrchids from "./data/ListOfOrchids";
import ListOrchids from "./components/ListOrchids";
const orchid = {
  id: "1",
  orchidName: "Ceasar 4N",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta lobortis ex. Morbi cursus consectetur diam, non lobortis massa gravida eu. Duis molestie purus vel ligula suscipit, sit amet iaculis justo tempus. Cras pellentesque urna in feugiat fringilla. Vivamus dictum lacinia nulla, id rhoncus lectus fermentum et.",
  category: "Dendrobium",
  isSpecial: true,
  price: 1200000, // 👈 thêm price (VND)
  image: "images/4n.jpg",
};
function App() {
  return (
    <>
      <div
        style={{ minHeight: `100vh`, display: `flex`, flexDirection: `column` }}
      >
        <Header />

        <div style={{ padding: "24px" }}>
          <h1>🌸 Orchid Store</h1>
          <ListOrchids orchids={listOfOrchids} />
        </div>

        <Footer
          avatar="/images/whynot.jpg"
          name="Lê Bảo"
          email="lebao@gmail.com"
        />
      </div>
    </>
  );
}

export default App;

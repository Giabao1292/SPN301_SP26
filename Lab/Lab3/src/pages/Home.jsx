import ListOrchids from "../components/ListOrchids";
function Home({ searchKeyword }) {
  return (
    <>
      <h1>🌸 Orchid Store</h1>
      <h3>Chào mừng bạn đến với cửa hàng hoa lan của chúng tôi!</h3>

      <ListOrchids searchKeyword={searchKeyword} />
    </>
  );
}

export default Home;

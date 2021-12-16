import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Home({ dataSource }) {
  return (
    <>
      <Header dataSource={dataSource} />
      <Container dataSource={dataSource} />
      <Footer dataSource={dataSource} />
    </>
  );
}

export default Home;

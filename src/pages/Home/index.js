import { useEffect } from "react";
import { Header, Container, Footer, MotionPart } from "../../components";

function Home() {
  const updateWebsiteTitle = () => {
    document.title =
      "Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website";
  };

  // Handle side effects
  useEffect(() => {
    updateWebsiteTitle();
  }, []);

  return (
    <>
      <Header />
      <Container />
      <Footer />
      <MotionPart />
    </>
  );
}

export default Home;

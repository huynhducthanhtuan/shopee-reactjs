import { useEffect } from "react";
import { useModalStatusContext } from "../../hooks";
import { Header, Container, Footer, MotionPart, Modal } from "../../components";
import { HOME_PAGE_TITLE } from "../../constants";
import { updateWebsiteTitle } from "../../helpers";

function Home() {
  // Get data from Context
  const { showModal } = useModalStatusContext();

  useEffect(() => updateWebsiteTitle(HOME_PAGE_TITLE), []);

  return (
    <>
      <Header />
      <Container />
      <Footer />
      <MotionPart />
      {showModal && <Modal />}
    </>
  );
}

export default Home;

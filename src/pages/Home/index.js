import { useEffect, useContext } from "react";
import { ModalStatusContext } from "../../contexts";
import { Header, Container, Footer, MotionPart, Modal } from "../../components";
import { HOME_PAGE_TITLE } from "../../constants";
import { updateWebsiteTitle } from "../../helpers";

function Home() {
  // Get data from Context
  const modalStatusContext = useContext(ModalStatusContext);
  const { showModal } = modalStatusContext;

  // Handle side effects
  useEffect(() => {
    updateWebsiteTitle(HOME_PAGE_TITLE);
  }, []);

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

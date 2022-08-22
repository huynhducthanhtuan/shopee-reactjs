import { useEffect } from "react";
import { useModalStatusContext } from "hooks";
import { HOME_PAGE_TITLE } from "constants/index";
import { updateWebsiteTitle } from "helpers";
import { Header, Container, Footer, MotionPart, Modal } from "components";

function Home() {
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

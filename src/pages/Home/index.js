import { useState, useEffect, useContext } from "react";
import { ModalStatusContext } from "../../contexts";
import { Header, Container, Footer, MotionPart, Modal } from "../../components";

function Home() {
  //#region Get data from Context
  const modalStatusContext = useContext(ModalStatusContext);
  const { showModal, setShowModal } = modalStatusContext;
  //#endregion

  //#region Handle side effects
  useEffect(() => {
    const updateWebsiteTitle = () => {
      document.title =
        "Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website";
    };

    updateWebsiteTitle();
  }, []);
  //#endregion

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

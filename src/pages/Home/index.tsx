import React, { useEffect, Fragment } from 'react';
import { TITLE } from 'constants/index';
import { updateWebsiteTitle } from 'helpers';
import { useModalStatusContext } from 'hooks';
import { Header, Container, Footer, MotionPart, Modal } from 'components/index';

function Home() {
  const { showModal } = useModalStatusContext();

  useEffect(() => updateWebsiteTitle(TITLE.HOME_PAGE), []);

  return (
    <Fragment>
      <Header />
      <Container />
      <Footer />
      <MotionPart />
      {showModal && <Modal />}
    </Fragment>
  );
}

export default Home;

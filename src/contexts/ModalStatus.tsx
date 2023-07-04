import React, { useState, createContext } from 'react';

const ModalStatusContext = createContext(null);

function ModalStatusContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalStatusContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalStatusContext.Provider>
  );
}

export { ModalStatusContext, ModalStatusContextProvider };

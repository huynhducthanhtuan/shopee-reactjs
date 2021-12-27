import { useState, createContext } from "react";

// Context
const ModalStatusContext = createContext();

// Provider
function ModalStatusContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalStatusContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalStatusContext.Provider>
  );
}

// Consumer
function ModalStatusContextConsumer({ children }) {
  return <ModalStatusContext.Consumer>{children}</ModalStatusContext.Consumer>;
}

export {
  ModalStatusContext,
  ModalStatusContextProvider,
  ModalStatusContextConsumer,
};

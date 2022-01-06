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

export { ModalStatusContext, ModalStatusContextProvider };
